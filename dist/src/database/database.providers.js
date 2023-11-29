"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const nonFunctionalDays_1 = require("../models/nonFunctionalDays");
const users_1 = require("../models/users");
const audioChants_1 = require("../models/audioChants");
const models_1 = require("../models");
const festivals_1 = require("../models/festivals");
exports.databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: () => {
            const sequelize = new sequelize_typescript_1.Sequelize({
                dialect: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'JM',
                password: 'JMMYSQL',
                database: 'iskcon_db',
            });
            sequelize.addModels([
                nonFunctionalDays_1.nonFunctionalDays,
                users_1.users,
                audioChants_1.audioChants,
                models_1.userDetails,
                models_1.nestUserLogins,
                models_1.nestSecurityLogs,
                models_1.userDids,
                models_1.nodes,
                models_1.tickerTexts,
                models_1.donations,
                models_1.sevas,
                models_1.spotLightEvents,
                models_1.calenderEvents,
                models_1.liveStreams,
                festivals_1.Festivals
            ]);
            return sequelize.sync().then(async (result) => {
                console.debug(await result.showAllSchemas({}));
                console.debug(await result.models);
                return sequelize;
            });
        },
    },
];
//# sourceMappingURL=database.providers.js.map