import { spotLightEvents } from 'src/models';

export const spotLightEventsProviders = [
  {
    provide: 'SPOTLIGHTEVENTS_REPOSITORY',
    useValue: spotLightEvents,
  },
];