import { userDids } from '../models/userDids';
export declare class UserDidsService {
    private userDidsRepository;
    private readonly logger;
    constructor(userDidsRepository: typeof userDids);
    addUserDid(userId: any, did: any, peerId: any, nodeId: any): Promise<void | userDids>;
}
