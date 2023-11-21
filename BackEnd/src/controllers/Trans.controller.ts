// import { myDataSource } from "../app-data-source"
// import { Request,Response } from 'express';
// import { Transaction } from "../entities/Transaction";
// import { TransactionDTO } from "../dtos/TransactionDTO";

// const AddTran = async (req:Request, res:Response)=>{
//     const transactionDTO: TransactionDTO = req.body;
//     try{
//         const employee = myDataSource.getRepository(Transaction).create(transactionDTO);
//         const results = await myDataSource.getRepository(Transaction).save(employee)
//         return res.send(results);
//     }catch(err){
//             res.send(err);
//     }
// }
// const FindAllTrans = async (req:Request, res:Response) =>{
//     try{
//         const users = await myDataSource.getRepository(Transaction).find()
//         res.json(users)
//     }catch(err){
//         res.send(err);
//     }
// }
// const FindSinglTran = async (req:Request, res:Response)=>{
//     try{
//         const users = await myDataSource.getRepository(Transaction).findOneBy({id:req.params.id});
//         res.json(users)
//     }catch(err){
//         res.send(err);
//     }
// }
// const FilterTrans =async(req:Request, res:Response)=>{
//     let search_cond="";
//     console.log(req.query.cond);
//     if(req.query.cond=="ACTIVE"){
//         search_cond="and return_date is null"
//     }   
//     try{
//         console.log(search_cond);
//         await db.query("SELECT * FROM transaction where id_user like  ? and reference_equi like ? "+search_cond,["%"+req.query.id_user+"%","%"+req.query.reference_equi+"%"],(err,result)=> 
//      {
//         //console.log(id_user,reference_equi,search_cond)
//         if(err){
//          console.log(err);
//         res.status(400).json({message:"erreur de filtrage"})
//     }
//     else{
//         // console.log(result);
//         res.status(200).json(result);
//     }
//     }
//     )}catch{
//         res.send(err);
//     }
// } 
// const DeleteTran = async (req:Request, res:Response) =>{
//     try{
//         const results = await myDataSource.getRepository(Transaction).delete(req.params.id)
//         return res.send(results)
//     }catch(err){
//         res.send(err);
//     }
// }

// const returnTran =async (req:Request, res:Response)=>{
//     try{
//         const existingTransaction = await myDataSource.getRepository.findOneBy({id:req.params.id});
//         const results = await myDataSource.getRepository(Transaction).update( existingTransaction.id , { ...req.body });
//         return res.send(results)
//     }catch(err){
//         res.send(err);
//     }
// }
// const checkTransaction = async (req: Request, res: Response) => {
//     try {
//         const referenceEquip = req.params.idEqui;
//         const transactionRepository = myDataSource.getRepository(Transaction);
//         const count = await transactionRepository
//             .createQueryBuilder()
//             .where("reference_equi = :referenceEquip", { referenceEquip })
//             .andWhere("returnDate IS NULL")
//             .getCount();

//         res.status(201).json({ count });
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// }



// module.exports={
//     AddTran,
//     check_transaction,
//     FindAllTrans,
//     FilterTrans,
//     DeleteTran,
//     returnTran
// }