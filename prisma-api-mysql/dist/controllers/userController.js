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
        while (_) try {
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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = void 0;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
prisma.$use(function (params, next) { return __awaiter(void 0, void 0, void 0, function () {
    var before, result, after;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                before = Date.now();
                return [4, next(params)];
            case 1:
                result = _a.sent();
                after = Date.now();
                console.log("Query ".concat(params.model, ".").concat(params.action, " took ").concat(after - before, "ms"));
                return [2, result];
        }
    });
}); });
var getUser = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = Number(_req.params.id);
                return [4, prisma.user.findUnique({
                        where: { id: id }
                    })];
            case 1:
                users = _a.sent();
                res.json({ users: users });
                return [3, 3];
            case 2:
                error_1 = _a.sent();
                console.log("Error in getting user data");
                throw error_1;
            case 3: return [2];
        }
    });
}); };
exports.getUser = getUser;
var createUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var userInformation, user, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                userInformation = req.body;
                console.log(userInformation);
                return [4, prisma.user.create({
                        data: {
                            email: userInformation.email,
                            name: userInformation.name,
                        },
                    })];
            case 1:
                user = _a.sent();
                res.json({ user: user });
                return [3, 3];
            case 2:
                error_2 = _a.sent();
                console.log("Error in Creating user");
                throw error_2;
            case 3: return [2];
        }
    });
}); };
exports.createUser = createUser;
var updateUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, updateInformation, user, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = +req.params["id"];
                updateInformation = req.body;
                return [4, prisma.user.update({
                        where: {
                            id: id,
                        },
                        data: {
                            email: updateInformation.email,
                            name: updateInformation.name,
                        },
                    })];
            case 1:
                user = _a.sent();
                res.json({ user: user });
                return [3, 3];
            case 2:
                error_3 = _a.sent();
                console.log("Error in updated user");
                throw error_3;
            case 3: return [2];
        }
    });
}); };
exports.updateUser = updateUser;
var deleteUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = +req.params["id"];
                return [4, prisma.user.delete({
                        where: {
                            id: id,
                        },
                        include: {
                            posts: true,
                        },
                    })];
            case 1:
                user = _a.sent();
                res.json({ user: user });
                return [3, 3];
            case 2:
                error_4 = _a.sent();
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map