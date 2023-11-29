import { liveStreams } from 'src/models';

export const liveStreamsProviders = [
  {
    provide: 'LIVESTREAMS_REPOSITORY',
    useValue: liveStreams,
  },
];