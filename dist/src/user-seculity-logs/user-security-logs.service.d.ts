import { nestSecurityLogs } from 'src/models';
export declare class UserSecurityLogsService {
    private readonly nestSecurityLogsRepository;
    constructor(nestSecurityLogsRepository: typeof nestSecurityLogs);
    log(userId: any, browserInfo: string): Promise<void | nestSecurityLogs>;
}
