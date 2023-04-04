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
exports.deletePost = exports.updatePost = exports.createPost = exports.getPost = void 0;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query',
        },
        {
            emit: 'stdout',
            level: 'error',
        },
        {
            emit: 'stdout',
            level: 'info',
        },
        {
            emit: 'stdout',
            level: 'warn',
        },
    ],
});
prisma.$on('query', function (e) {
    console.log('Query: ' + e.query);
    console.log('Params: ' + e.params);
    console.log('Duration: ' + e.duration + 'ms');
});
prisma.$use(function (params, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (params.model == 'Post') {
            if (params.action == 'delete') {
                params.action = 'update';
                params.args['data'] = { deleted: true };
            }
            if (params.action == 'deleteMany') {
                params.action = 'updateMany';
                if (params.args.data != undefined) {
                    params.args.data['deleted'] = true;
                }
                else {
                    params.args['data'] = { deleted: true };
                }
            }
        }
        return [2, next(params)];
    });
}); });
prisma.$use(function (params, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (params.model == 'Post') {
            if (params.action === 'findUnique' || params.action === 'findFirst') {
                params.action = 'findFirst';
                params.args.where['deleted'] = false;
            }
            if (params.action === 'findMany') {
                if (params.args.where) {
                    if (params.args.where.deleted == undefined) {
                        params.args.where['deleted'] = false;
                    }
                }
                else {
                    params.args['where'] = { deleted: false };
                }
            }
        }
        return [2, next(params)];
    });
}); });
prisma.$use(function (params, next) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        if (params.model == 'Post') {
            if (params.action == 'update') {
                params.action = 'updateMany';
                params.args.where['deleted'] = false;
            }
            if (params.action == 'updateMany') {
                if (params.args.where != undefined) {
                    params.args.where['deleted'] = false;
                }
                else {
                    params.args['where'] = { deleted: false };
                }
            }
        }
        return [2, next(params)];
    });
}); });
var getPost = function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4, prisma.post.findMany({
                        where: {
                            deleted: false
                        }
                    })];
            case 1:
                users = _a.sent();
                res.json({ users: users });
                return [3, 3];
            case 2:
                error_1 = _a.sent();
                console.log("Error in getting post data");
                throw error_1;
            case 3: return [2];
        }
    });
}); };
exports.getPost = getPost;
var createPost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var postInformation, post, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                postInformation = req.body;
                console.log(postInformation);
                return [4, prisma.post.create({
                        data: {
                            title: postInformation.title,
                            authorId: postInformation.authorId
                        },
                    })];
            case 1:
                post = _a.sent();
                res.json({ post: post });
                return [3, 3];
            case 2:
                error_2 = _a.sent();
                console.log("Error in Creating Post");
                throw error_2;
            case 3: return [2];
        }
    });
}); };
exports.createPost = createPost;
var updatePost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, updateInformation, post, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = +req.params["id"];
                updateInformation = req.body;
                return [4, prisma.post.update({
                        where: {
                            id: id,
                        },
                        data: {
                            title: updateInformation.title,
                            authorId: updateInformation.authorId
                        },
                    })];
            case 1:
                post = _a.sent();
                res.json({ post: post });
                return [3, 3];
            case 2:
                error_3 = _a.sent();
                res.json({ "Message": "Error in Updating post" });
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.updatePost = updatePost;
var deletePost = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, post, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                id = +req.params["id"];
                return [4, prisma.post.delete({
                        where: {
                            id: id,
                        },
                    })];
            case 1:
                post = _a.sent();
                res.json({ post: post });
                return [3, 3];
            case 2:
                error_4 = _a.sent();
                return [3, 3];
            case 3: return [2];
        }
    });
}); };
exports.deletePost = deletePost;
//# sourceMappingURL=postController.js.map