const db=require('../config/db');
// const ValidateUser=require('../Validation/users.validateur.js');
const AddUser = async (req, res)=>{
    // const {errors,isValid}=ValidateUser(req.body);
    try{
        // if(!isValid){
        //     return res.status(400).json(errors);
        // }else{
        console.log("hathi req.body "+ req.body);
        await db.query('insert into users values(?,?,?,?,?)', [req.body.id,req.body.firstname,req.body.lastname,req.body.Email,req.body.departement],(err,result)=>
        {if (err)
            {
                console.log(err);
               return res.status(400).json({message:"erreur d'insertion"});
            }
            else{
                res.status(201).json({message:"User Added"});
                //res.json(result);
            }
        }
    
)
}catch(err){
    res.send(err);
}
}

const FindAllUsers = async (req, res) =>{
    try{
    await db.query("SELECT * FROM users ",(err,result)=>
    {
     
        res.status(200).json(result);
    }
)}catch{
    res.send(err);
}
}
const FindSinglUser = async (req, res)=>{
    try{
    await db.query('SELECT count(*) FROM users where id=?',[req.params.id],(err,result)=>
    {
    if (err)
    {
        res.status(400).json(err);
    }
    else{
        // console.log(result);
        res.status(201).json(result);
    
    }  
})
}catch{
    res.send(err);
}}
// const UpdateUser = async (req, res)=>{
//     const {errors,isValid}=ValidateUser(req.body);
//     try{
//         if(!isValid){
//             return res.status(400).json(errors);
//         }else{
//             await Users.findOneAndUpdate({Email:req.body.Email},req.body,{new:true}).then(async(exist)=>{
//                 if(exist){
//                     errors.Email="this new Email already exist";
//                     return res.status(400).json(errors);
//                 }
//                 else{
//                     await Users.create(req.body);
//                     res.status(201).json({message:"User Updated"});
//                 }
//             }
//             )
//     }
// }catch(err){
//     res.send(err)
// }
// }
const FilterUsers =async(req,res)=>{
    try{
        await db.query("SELECT * FROM users where id like  ? ",["%"+req.query.id_user+"%","%"],(err,result)=> 
     {
        if(err){
         console.log(err);
        res.status(400).json({message:"erreur de filtrage"})
    }
    else{
        // console.log(result);
        res.status(200).json(result);
    }
    }
    )}catch{
        res.send(err);
    }
} 
const DeleteUser = async (req, res) =>{
    
    try{
        await db.query("DELETE FROM users WHERE id=? ",[req.params.id],(err,result)=>
        {
            res.status(201).json({message:"User Deleted"});
        }
    )}catch{
        res.send(err);
    }
}

module.exports = {
AddUser,
FindAllUsers,
FindSinglUser,
// // UpdateUser,
FilterUsers,
DeleteUser
}