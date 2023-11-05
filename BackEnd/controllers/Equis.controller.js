const db=require('../config/db');
const AddEqui = async (req, res)=>{
    try{
        await db.query('insert into equiments values(?,?,?,?,?,?,?,?,?,?,?)', [req.body.reference,req.body.type,req.body.model,req.body.cpu,req.body.gpu,req.body.storage,req.body.ram,req.body.os,req.body.date_of_initiation,req.body.lifespan,req.body.comment],(err,result)=>
        {
            if (err)
            {
               return res.status(400).json({message:"erreur d'insertion"});
            }
            else{
                res.status(201).json({message:"Equis Added"});
            }
        }
    )}catch(err){
    res.send(err);
}
}
const FindAllEquis = async (req, res) =>{
    try{
    await db.query("SELECT * FROM equiments ",(err,result)=>
    {
        console.log(result);
        res.status(200).json(result);
    }
)}catch{
    res.send(err);
}
}
const FindSinglEqui = async (req, res)=>{
    try{
    await db.query('SELECT count(*) FROM equiments where reference=?',[req.params.id],(err,result)=>
    {
    if (err)
    {
        res.status(400).json(err);
    }
    else{
       res.status(200).json(result);
    }  
})
}catch{
    res.send(err);
}
}
const FilterEquis =async(req,res)=>{
  console.log("aaaaaaaaaaaa "+req.query.reference_equi)
    try{
        await db.query("SELECT * FROM equiments where reference like ? ",["%"+req.query.reference_equi+"%"],(err,result)=> 
     {
        if(err){
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
const DeleteEqui = async (req, res) =>{
    try{
        await db.query("DELETE FROM equiments WHERE reference=?",[req.params.id],(err,result)=>
        {
            res.status(201).json({message:"Equis Deleted"});
        }
    )}catch{
        res.send(err);
    }
}
module.exports={
    AddEqui ,
    FindAllEquis,
    FindSinglEqui,
    FilterEquis,
    DeleteEqui
}