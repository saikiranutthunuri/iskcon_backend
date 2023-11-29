import { tickerTexts } from 'src/models';

export const tickerTextsProviders = [
  {
    provide: 'TICKERTEXTS_REPOSITORY',
    useValue: tickerTexts,
  },
];