"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_data_source_1 = require("../app-data-source");
var Authentification_1 = require("../entity/Authentification");
var bcrypt = require('bcrypt');
var bcryptSalt = bcrypt.genSaltSync(10);
var jwt = require('jsonwebtoken');
var jwtSecret = 'ezrdfgjkzefdnsdfsnjssn';
var RegisterAuth = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, password, confirmPassword, results, err_1, hashedPassword, Auth, results, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, email = _a.email, password = _a.password, confirmPassword = _a.confirmPassword;
                console.log(req.body);
                if (!name) {
                    return [2 /*return*/, res.json({ message: "name is required" })];
                }
                if (!email) {
                    return [2 /*return*/, res.json({ message: "email is required" })];
                }
                if (!password) {
                    return [2 /*return*/, res.json({ message: "password is required" })];
                }
                if (!confirmPassword) {
                    return [2 /*return*/, res.json({ message: 'confirmPassword is required' })];
                }
                if (confirmPassword !== password) {
                    return [2 /*return*/, res.json({ message: "password is not the same" })];
                }
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, app_data_source_1.myDataSource.getRepository(Authentification_1.Authentification).findOneBy({ email: req.body.email })];
            case 2:
                results = _b.sent();
                if (results) {
                    return [2 /*return*/, res.json({ message: "email already exist" })];
                }
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                console.log(err_1);
                res.status(422).json(err_1);
                return [3 /*break*/, 4];
            case 4:
                hashedPassword = bcrypt.hashSync(password, bcryptSalt);
                _b.label = 5;
            case 5:
                _b.trys.push([5, 7, , 8]);
                Auth = app_data_source_1.myDataSource.getRepository(Authentification_1.Authentification).create(req.body);
                return [4 /*yield*/, app_data_source_1.myDataSource.getRepository(Authentification_1.Authentification).save(Auth)];
            case 6:
                results = _b.sent();
                return [3 /*break*/, 8];
            case 7:
                err_2 = _b.sent();
                console.log(err_2);
                res.status(422).json(err_2);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
var LoginAuth = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, authRepository, auth, isPasswordCorrect, token, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                authRepository = app_data_source_1.myDataSource.getRepository(Authentification_1.Authentification);
                return [4 /*yield*/, authRepository.findOneBy({ email: email })];
            case 2:
                auth = _b.sent();
                if (!auth) {
                    res.status(404).json({ message: 'Account not found' });
                }
                else {
                    isPasswordCorrect = bcrypt.compareSync(password, auth.password);
                    if (isPasswordCorrect) {
                        token = jwt.sign({ email: auth.email, id: auth.id
                        }, jwtSecret);
                        res.cookie("token", token, {
                            httpOnly: true,
                        }).json(auth);
                    }
                    else {
                        res.status(422).json('Password is not correct');
                    }
                }
                return [3 /*break*/, 4];
            case 3:
                err_3 = _b.sent();
                res.status(500).json({ message: 'Server error' });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var LogoutAuth = function (req, res) {
    res.cookie("token", "", {
        httpOnly: true,
    }).json("token deleted");
};
var GetAuth = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var token;
    return __generator(this, function (_a) {
        token = req.cookies.token;
        if (token) {
            jwt.verify(token, jwtSecret, {}, function (err, userData) { return __awaiter(void 0, void 0, void 0, function () {
                var authRepository, auth, err_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (err) {
                                throw err;
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 4, , 5]);
                            authRepository = app_data_source_1.myDataSource.getRepository(Authentification_1.Authentification);
                            return [4 /*yield*/, authRepository.findOneBy({ email: userData.email })];
                        case 2: return [4 /*yield*/, _a.sent()];
                        case 3:
                            auth = _a.sent();
                            if (auth) {
                                res.json(auth);
                            }
                            else {
                                res.status(404).json({ message: 'User not found' });
                            }
                            return [3 /*break*/, 5];
                        case 4:
                            err_4 = _a.sent();
                            console.error(err_4);
                            res.status(422).json({ message: 'Error while fetching user' });
                            return [3 /*break*/, 5];
                        case 5: return [2 /*return*/];
                    }
                });
            }); });
        }
        else {
            res.json(null);
        }
        return [2 /*return*/];
    });
}); };
module.exports = {
    RegisterAuth: RegisterAuth,
    LoginAuth: LoginAuth,
    LogoutAuth: LogoutAuth,
    GetAuth: GetAuth,
};
