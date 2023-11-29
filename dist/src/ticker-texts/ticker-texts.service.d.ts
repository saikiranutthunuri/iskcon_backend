import { tickerTexts } from 'src/models/tickerTexts';
export declare class TickerTextService {
    private readonly tickerTextRepository;
    private logger;
    constructor(tickerTextRepository: typeof tickerTexts);
    createTickerText(userId: any, line: any): Promise<void | tickerTexts>;
    getTickerText(): Promise<void | tickerTexts>;
}
