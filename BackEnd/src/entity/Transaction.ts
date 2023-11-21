import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Employee } from "./Employee";
import { Equipment } from "./Equipment";
@Entity()
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "date" })
    transactionDate: Date;

    @Column({ type: "date" })
    returnDate: Date;

    @Column()
    description: string;

    @Column()
    description_return: string;

    @ManyToOne(type => Employee)
    @JoinColumn({ name: "employee_id" })
    employee: Employee;

    @ManyToOne(type => Equipment)
    @JoinColumn({ name: "equipment_id" })
    equipment: Equipment;
   
}
