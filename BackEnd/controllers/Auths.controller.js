const db=require('../config/db');
const bcrypt = require('bcrypt');
const bcryptSalt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');
const jwtSecret='ezrdfgjkzefdnsdfsnjssn'
const RegisterAuth = async (req, res)=>{
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
    db.query('SELECT * FROM authentification where email=?',[email],(err,result)=>
    {
        if (err) {
            return res.json({ messagefordev: 'Server error' });
          } else if (result.length !== 0) {
            return res.json({ message: 'Account Exist' });
    }
    })
    const hashedPassword=bcrypt.hashSync(password,bcryptSalt);
    try{
        const randomNum = Math.random() * 1000000;
        db.query('insert into authentification values(?,?,?,?)', [name,email,hashedPassword,randomNum]
        ,(err,result)=>{
            if(err){
                res.json({messagefordev:"erreur d'insertion"})
            }
            else{
                res.json({message:"Your account registered"});
            }
        })
    }catch(err){
        console.log(err);
        res.status(422).json(err);
    }
}
const LoginAuth = async (req, res)=>{
    const {email,password} =req.body;
    try{
    db.query('SELECT * FROM authentification where email=?',[email],(err,result)=>
    {
        if (err) {
            console.error(err);
            res.status(500).json({ message: 'Server error' });
          } else if (result.length === 0) {
            res.status(404).json({ message: 'Account not found' });
          } else {
            const auth = result[0];
            const isPasswordCorrect = bcrypt.compareSync(password, auth.password);
            if(isPasswordCorrect){
                const token = jwt.sign({email:auth.email,id:auth.id
                }, jwtSecret);
                console.log(token);
                res.cookie("token",token,{
                    httpOnly:true,
                }).json(auth);
           }
           else{
                res.status(422).json('password not ok');
            }
          }
})
}catch{
    res.send(err);
}
}
const LogoutAuth = (req, res)=>{
    console.log("hathoum homa les cookie " + req.cookies.token);
    res.cookie("token","",{
        httpOnly:true,
    }).json("ty wink a weldi");
}

    const GetAuth =(req, res)=>{
        const token=req.cookies.token;
        if(token){
            jwt.verify(token,jwtSecret,{},async (err,userData)=>{
                            if (err) throw err;
                            try {
                            db.query('SELECT * FROM authentification WHERE email = ?', [userData.email]
                            ,(err,result)=>{
                                if(err){
                                    res.json({messagefordev:"erreur d'insertion"})
                                }
                                else if(result){
                                    const row=result[0];
                                    // console.log(row);
                                    res.json(row);
                                }
                            })
                        }catch(err){
                            console.log(err);
                            res.status(422).json(err);
                        }
                    });
                    }else{
                        res.json(null);
                    }
                }
module.exports = {
RegisterAuth,
LoginAuth,
LogoutAuth,
GetAuth,
}