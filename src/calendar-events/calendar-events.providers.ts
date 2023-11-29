import { calenderEvents } from 'src/models';

export const calendarEventsProviders = [
  {
    provide: 'CALENDAREVENTS_REPOSITORY',
    useValue: calenderEvents,
  },
];
