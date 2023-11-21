"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var isEmpty_1 = require("./isEmpty");
var Validator = require("validator");
module.exports = function ValidateUser(data) {
    var errors = {};
    data.Email = !(0, isEmpty_1.isEmpty)(data.Email) ? data.Email : '';
    data.Lastname = !(0, isEmpty_1.isEmpty)(data.Lastname) ? data.Lastname : '';
    data.Firstname = !(0, isEmpty_1.isEmpty)(data.Firstname) ? data.Firstname : '';
    data.Departement = !(0, isEmpty_1.isEmpty)(data.Departement) ? data.Departement : '';
    if (!Validator.isEmail(data.Email)) {
        errors.Email = "Email is invalid";
    }
    if (Validator.isEmpty(data.id)) {
        errors.Lastname = "id is required";
    }
    if (Validator.isEmpty(data.Lastname)) {
        errors.Lastname = "Lastname is required";
    }
    if (Validator.isEmpty(data.Firstname)) {
        errors.Firstname = "Firstname is required";
    }
    return {
        errors: errors,
        isValid: (0, isEmpty_1.isEmpty)(errors)
    };
};
