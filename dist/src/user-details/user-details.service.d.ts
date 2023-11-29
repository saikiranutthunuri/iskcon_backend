import { userDetails } from 'src/models';
export declare class UserDetailsService {
    private userDetailsRepository;
    setVolunteer(userId: any, value: boolean): Promise<[affectedCount: number]>;
    setPhoneNumber(): void;
    createProfile(userId: any): Promise<void | userDetails>;
    private readonly logger;
    constructor(userDetailsRepository: typeof userDetails);
    updateUserProfile(userId: any, updateProfileDTO: any): Promise<[affectedCount: number]>;
    getUserProfile(userId: any): Promise<void | userDetails>;
}
