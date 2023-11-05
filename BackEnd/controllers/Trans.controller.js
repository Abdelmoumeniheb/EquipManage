const db=require('../config/db');
const { search } = require('../routes/route.users');
const AddTran = async (req, res)=>{
    try{  
        

        
        await db.query('insert into transaction values(?,?,?,?,?,?)', [req.body.id_user,req.body.reference_equi,req.body.borrow_date,null,req.body.comment,null],(err,result)=>
        {console.log("hathi result"+result);
            if (err) 
            {console.log('not clear');
               return res.status(400).json({message:"erreur d'insertion"});
            }
            else{
                console.log('clear');
                res.status(201).json({message:"Tran Added"});       
                //res.json(result);
             }
        }
    )}catch(err){

    res.send(err);
}
}
const FindAllTrans = async (req, res) =>{
    try{
    await db.query("SELECT * FROM transaction",(err,result)=>
    {
        console.log(result);
        res.status(200).json(result);
    }
)}catch{
    res.send(err);
}
}
const FindSinglTran = async (req, res)=>{
    try{
    await db.query('SELECT * FROM transaction where reference_equi=?',[req.params.id],(err,result)=>
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
}}
const FilterTrans =async(req,res)=>{
    let search_cond="";
    console.log(req.query.cond);
    if(req.query.cond=="ACTIVE"){
        search_cond="and return_date is null"
    }   
    try{
        console.log(search_cond);
        await db.query("SELECT * FROM transaction where id_user like  ? and reference_equi like ? "+search_cond,["%"+req.query.id_user+"%","%"+req.query.reference_equi+"%"],(err,result)=> 
     {
        //console.log(id_user,reference_equi,search_cond)
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
const DeleteTran = async (req, res) =>{
    try{
        await db.query("DELETE FROM transaction WHERE id_user=? and Reference_equi=? and borrow_date=?",[req.params.id,req.params.id_2,req.params.borrow_date],(err,result)=>
        {
            res.status(201).json({message:"Trans Deleted"});
        }
    )}catch{
        res.send(err);
    }
}
const returnTran =async (req,res)=>{
    try{
        console.log("hathi req.body "+ req.body.comment_return);
         db.query('UPDATE transaction set return_date=? , comment_return=? where reference_equi=? and id_user=? and return_date is Null ', [req.body.return_date,req.body.comment_return,req.body.reference_equi,req.body.id_user],(err,result)=>
        {
            if (err)
            {
               return res.status(400).json({message:"erreur d'update"});
            }
            else{
                res.status(201).json({message:"Tran returned"});
                //res.json(result);
            }
        }
    )}catch(err){
    res.send(err);
}



}

const check_transaction=async (req,res)=>{
    const reference_equi=req.params.reference;
 await db.query("SELECT count(*) FROM transaction where reference_equi=? and return_date is null",[reference_equi],(err,result)=>
  {if (err)
    {
        res.status(400).json(err);
    }
    else{
         console.log(result);
        res.status(201).json(result);
    } 
  }
  )
  }


module.exports={
    AddTran,
    check_transaction,
    FindAllTrans,
    FilterTrans,
    DeleteTran,
    returnTran
}