import { Sequelize } from 'sequelize-typescript';
import { nonFunctionalDays } from '../models/nonFunctionalDays';
import { users } from '../models/users';
import { audioChants } from '../models/audioChants';
import {
  calenderEvents,
  donations,
  nestSecurityLogs,
  nestUserLogins,
  nodes,
  promptFilters,
  sevas,
  spotLightEvents,
  tickerTexts,
  userDetails,
  userDids,
  liveStreams,
  
} from 'src/models';
import { Festivals } from 'src/models/festivals';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'iskcon_db',
      });
      sequelize.addModels([
        nonFunctionalDays,
        users,
        audioChants,
        userDetails,
        nestUserLogins,
        nestSecurityLogs,
        userDids,
        nodes,
        tickerTexts,
        donations,
        sevas,
        spotLightEvents,
        calenderEvents,
        liveStreams,
        Festivals
        
      ]);
      return sequelize.sync().then(async (result) => {
        console.debug(await result.showAllSchemas({}));
        console.debug(await result.models);
        return sequelize;
      });
    },
  },
];
