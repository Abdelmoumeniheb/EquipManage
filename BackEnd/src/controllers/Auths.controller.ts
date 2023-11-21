import { myDataSource } from "../app-data-source"
import {Request,Response} from 'express';
import { Authentification } from "../entity/Authentification";
const bcrypt = require('bcrypt');
const bcryptSalt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
const jwtSecret='ezrdfgjkzefdnsdfsnjssn'
const RegisterAuth = async (req:Request, res:Response)=>{
    const {name,email,password,confirmPassword} =req.body;
    console.log(req.body);
    if(!name){
        return res.json({message:"name is required"})
    }
    if(!email){
        return res.json({message:"email is required"})
    }
    if(!password){
        return res.json({message:"password is required"})
    }
    if (!confirmPassword) {
        return res.json({ message: 'confirmPassword is required' });
    }
    if(confirmPassword!==password){
        return res.json({message:"password is not the same"})
    }
    try{
        const results = await myDataSource.getRepository(Authentification).findOneBy({email:req.body.email});
        if(results){
            return res.json({message:"email already exist"})
        }
    }catch(err){
        console.log(err);
        res.status(422).json(err);  
    }
    const hashedPassword=bcrypt.hashSync(password,bcryptSalt);
    try{
        const Auth = myDataSource.getRepository(Authentification).create(req.body);
        const results = await myDataSource.getRepository(Authentification).save(Auth)
    }catch(err){
        console.log(err);
        res.status(422).json(err);
    }
}
const LoginAuth = async (req:Request, res:Response)=>{
    const {email,password} =req.body;
    try{
        const authRepository = myDataSource.getRepository(Authentification);
        const auth = await authRepository.findOneBy({ email: email });
        if (!auth) {
            res.status(404).json({ message: 'Account not found' });
        } else{
            const isPasswordCorrect = bcrypt.compareSync(password, auth.password);
            if(isPasswordCorrect){
                const token = jwt.sign({email:auth.email,id:auth.id
                }, jwtSecret);
                res.cookie("token",token,{
                    httpOnly:true,
                }).json(auth);
           }
           else{
            res.status(422).json('Password is not correct');
            }
          }
}catch(err){
    res.status(500).json({ message: 'Server error' });
}
}
const LogoutAuth = (req:Request, res:Response)=>{
    res.cookie("token","",{
        httpOnly:true,
    }).json("token deleted");
}

const GetAuth = async (req: Request, res: Response) => {
    const token = req.cookies.token;

    if (token) {
        jwt.verify(token, jwtSecret, {}, async (err:any, userData:any) => {
            if (err) {
                throw err;
            }
            try {
                const authRepository = myDataSource.getRepository(Authentification);
                const auth = await await authRepository.findOneBy({ email: userData.email });

                if (auth) {
                    res.json(auth);
                } else {
                    res.status(404).json({ message: 'User not found' });
                }
            } catch (err) {
                console.error(err);
                res.status(422).json({ message: 'Error while fetching user' });
            }
        });
    } else {
        res.json(null);
    }
};
module.exports = {
RegisterAuth,
LoginAuth,
LogoutAuth,
GetAuth,
}