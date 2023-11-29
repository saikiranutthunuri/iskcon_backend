import { nonFunctionalDays } from '../models/nonFunctionalDays';
export declare class NonFunctionalDaysService {
    private readonly nonFunctionalDaysRepository;
    constructor(nonFunctionalDaysRepository: typeof nonFunctionalDays);
    createNonFunctionalDay(userID: any, occassionName: any, occassionDate: any): Promise<nonFunctionalDays>;
    findAllFromToday(): Promise<nonFunctionalDays[]>;
    delete(date: any): Promise<number | void>;
}
