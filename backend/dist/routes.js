"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ContactController_1 = __importDefault(require("./controllers/ContactController"));
var routes = express_1.default.Router();
routes.post('/contacts', ContactController_1.default.create);
routes.get('/contacts', ContactController_1.default.read);
routes.put('/contacts/:id', ContactController_1.default.update);
routes.delete('/contacts/:id', ContactController_1.default.delete);
exports.default = routes;
