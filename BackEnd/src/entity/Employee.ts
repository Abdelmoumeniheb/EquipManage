import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column()
    department: string
}