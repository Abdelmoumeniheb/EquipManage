import { Employee } from '../entity/Employee';
import { Equipment } from '../entity/Equipment';
export class TransactionDTO {
    id: number;
    transactionDate: Date;
    description: string;
    description_return: string | null;
    returnDate: Date | null;
    employee: Employee; 
    equipment: Equipment;
}
