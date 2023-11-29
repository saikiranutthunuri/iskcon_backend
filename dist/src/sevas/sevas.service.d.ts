import { sevas } from 'src/models';
import { CreateSevasDTO } from 'src/admin/admin.controller';
import { sevasAttributes } from 'src/models';
export declare class SevasService {
    private sevasRepository;
    private logger;
    constructor(sevasRepository: typeof sevas);
    findSevas(): Promise<sevas[]>;
    findSevaBySevaId(sevaId: any): Promise<void | sevas>;
    deleteSeva(sevaId: any): Promise<number | void>;
    createSeva(createSevaDTO: CreateSevasDTO): Promise<sevas>;
    updateSeva(sevaId: string, updateData: Partial<sevasAttributes>): Promise<sevas>;
}
