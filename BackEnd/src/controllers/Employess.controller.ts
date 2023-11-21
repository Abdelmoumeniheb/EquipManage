import { myDataSource } from "../app-data-source"
import {Request,Response} from 'express';
import { Employee } from "../entity/Employee";

const AddEmployess = async (req:Request, res:Response)=>{
    try{
        const employee = myDataSource.getRepository(Employee).create(req.body);
        const results = await myDataSource.getRepository(Employee).save(employee)
        return res.send(results)
    }catch(err){
            res.send(err);
    }
}

const FindAllEmployess = async (req:Request, res:Response) =>{
    try{
        const users = await myDataSource.getRepository(Employee).find()
        res.json(users)
    }catch(err){
        res.send(err);
    }
}

const FindSinglEmployess = async (req:Request, res:Response)=>{
    try{
        const results = await myDataSource.getRepository(Employee).findOneById(req.params.id);
        return res.send(results)
}catch(err){
    res.send(err);
}}

const FilterEmployess =async(req:Request,res:Response)=>{
    try {
        const employeeRepository = await myDataSource.getRepository(Employee);
        const employees = await employeeRepository
            .createQueryBuilder("employee")
            .where("employee.id LIKE :id", { id: `%${req.query.id_Employess}%` })
            .getMany();

        res.status(200).json(employees);
    } catch (err) {
        console.error(err);
        res.status(400).json({ message: "Error while filtering employees" });
    }
} 
const DeleteEmployess = async (req:Request, res:Response) =>{
    try{
        const results = await myDataSource.getRepository(Employee).delete(req.params.id)
        return res.send(results)
    }catch(err){
        res.send(err);
    }
}

module.exports = {
AddEmployess,
FindAllEmployess,
FindSinglEmployess,
FilterEmployess,
DeleteEmployess
}