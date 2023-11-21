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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
var typeorm_1 = require("typeorm");
var Employee_1 = require("./Employee");
var Equipment_1 = require("./Equipment");
var Transaction = exports.Transaction = /** @class */ (function () {
    function Transaction() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)(),
        __metadata("design:type", Number)
    ], Transaction.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "date" }),
        __metadata("design:type", Date)
    ], Transaction.prototype, "transactionDate", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: "date" }),
        __metadata("design:type", Date)
    ], Transaction.prototype, "returnDate", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Transaction.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Transaction.prototype, "description_return", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return Employee_1.Employee; }),
        (0, typeorm_1.JoinColumn)({ name: "employee_id" }),
        __metadata("design:type", Employee_1.Employee)
    ], Transaction.prototype, "employee", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return Equipment_1.Equipment; }),
        (0, typeorm_1.JoinColumn)({ name: "equipment_id" }),
        __metadata("design:type", Equipment_1.Equipment)
    ], Transaction.prototype, "equipment", void 0);
    Transaction = __decorate([
        (0, typeorm_1.Entity)()
    ], Transaction);
    return Transaction;
}());
