import { promptFilters } from 'src/models';
export declare class PromptFiltersService {
    private readonly promptFiltersRepository;
    constructor(promptFiltersRepository: typeof promptFilters);
    createPromptFilter(createPromptFilterDTO: any): Promise<promptFilters>;
}
