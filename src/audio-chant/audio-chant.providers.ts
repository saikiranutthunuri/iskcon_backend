import { audioChants } from 'src/models';

export const audioChantsProviders = [
  {
    provide: 'AUDIOCHANTS_REPOSITORY',
    useValue: audioChants,
  },
];
