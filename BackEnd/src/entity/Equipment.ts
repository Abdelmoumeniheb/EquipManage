import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm"

@Entity()
export class Equipment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    brand: string;

    @Column()
    model: string;

    @Column()
    serialNumber: string;

    @Column({ type: "date" })
    purchaseDate: Date;

    @Column({ type: "date" })
    warrantyExpiryDate: Date;

    @Column()
    location: string;

    @Column()
    status: string;

    @Column({ type: "text", nullable: true })
    description: string;

    @Column({ type: "double precision", nullable: true })
    purchasePrice: number;

    @Column()
    cpu: string;

    @Column()
    gpu:string;

    @Column()
    ram: string;

    @Column()
    storage: string;

    @Column()
    os: string;

    @Column()
    Remarque: string;
}