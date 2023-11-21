import { myDataSource } from "../app-data-source"
import {Request,Response} from 'express';
import { Equipment } from "../entity/Equipment";
const AddEqui = async (req:Request, res:Response)=>{
        try{
            const employee = myDataSource.getRepository(Equipment).create(req.body);
            const results = await myDataSource.getRepository(Equipment).save(employee)
            return res.send(results);
        }catch(err){
                res.send(err);
        }
}
const FindAllEquis = async (req:Request, res:Response) =>{
    try{
        const users = await myDataSource.getRepository(Equipment).find()
        res.json(users)
    }catch(err){
        res.send(err);
    }
}
const FindSinglEqui = async (req:Request, res:Response)=>{
    try{
        const results = await myDataSource.getRepository(Equipment).findOneById(req.params.id);
        return res.send(results)
    }catch(err){
    res.send(err);
    }
}
const FilterEquis =async(req:Request, res:Response)=>{
    try {
        const employeeRepository = await myDataSource.getRepository(Equipment);
        const employees = await employeeRepository
            .createQueryBuilder("Equipment")
            .where("Equipment.id LIKE :id", { id: `%${req.query.id_Equipment}%` })
            .getMany();
        res.status(200).json(employees);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "Error while filtering employees" });
    }
} 
const DeleteEqui = async (req:Request, res:Response) =>{
    try{
        const results = await myDataSource.getRepository(Equipment).delete(req.params.id)
        return res.send(results)
    }catch(err){
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