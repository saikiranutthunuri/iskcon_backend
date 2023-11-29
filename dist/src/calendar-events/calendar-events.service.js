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
var CalendarEventsService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalendarEventsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
let CalendarEventsService = CalendarEventsService_1 = class CalendarEventsService {
    constructor(calendarEventRepository) {
        this.calendarEventRepository = calendarEventRepository;
        this.logger = new common_1.Logger(CalendarEventsService_1.name);
    }
    createCalendarEvent(userId, calendarEventDTO) {
        return this.calendarEventRepository.create(Object.assign(Object.assign({}, calendarEventDTO), { creatorId: userId, creationTime: new Date() }));
    }
    findCalendarEventById(calendarEventId) {
        return this.calendarEventRepository.findOne({
            where: {
                id: {
                    [sequelize_1.Op.eq]: calendarEventId
                }
            }
        });
    }
    findAllCalendarEvents() {
        return this.calendarEventRepository.findAll().catch(e => {
            this.logger.error(e);
        });
    }
    deleteCalendarEvent(calendarId) {
        return this.calendarEventRepository.destroy({
            where: {
                id: calendarId
            }
        }).catch;
    }
};
exports.CalendarEventsService = CalendarEventsService;
exports.CalendarEventsService = CalendarEventsService = CalendarEventsService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("CALENDAREVENTS_REPOSITORY")),
    __metadata("design:paramtypes", [Object])
], CalendarEventsService);
//# sourceMappingURL=calendar-events.service.js.map