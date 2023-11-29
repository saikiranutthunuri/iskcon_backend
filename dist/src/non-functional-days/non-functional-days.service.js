"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NonFunctionalDaysService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const sequelize_1 = require("sequelize");
let NonFunctionalDaysService = class NonFunctionalDaysService {
    constructor(nonFunctionalDaysRepository) {
        this.nonFunctionalDaysRepository = nonFunctionalDaysRepository;
    }
    createNonFunctionalDay(userID, occassionName, occassionDate) {
        return this.nonFunctionalDaysRepository.create({
            id: (0, uuid_1.v4)(),
            occassionName,
            occassionDate,
            creatorId: userID,
            creationTime: new Date(),
        });
    }
    findAllFromToday() {
        return this.nonFunctionalDaysRepository.findAll({
            where: {
                occassionDate: {
                    [sequelize_1.Op.gt]: new Date(),
                },
            },
        });
    }
    delete(date) {
        console.log("date", date);
        return this.nonFunctionalDaysRepository.destroy({
            where: {
                occassionDate: {
                    [sequelize_1.Op.eq]: new Date(date)
                },
            }
        }).then(result => {
            console.log(result);
            return result;
        }).catch(e => {
            console.error(e);
        });
    }
};
exports.NonFunctionalDaysService = NonFunctionalDaysService;
exports.NonFunctionalDaysService = NonFunctionalDaysService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('NONFUNCTIONALDAYS_REPOSITORY')),
    __metadata("design:paramtypes", [Object])
], NonFunctionalDaysService);
//# sourceMappingURL=non-functional-days.service.js.map