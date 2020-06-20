"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var router_1 = __importDefault(require("./router"));
var mongoose_1 = __importDefault(require("mongoose"));
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use('/', router_1.default);
mongoose_1.default.connect('mongodb://localhost:27017/myContacts', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});
var port = 3333;
app.listen(port, function () {
    console.log("Listening on Port: " + port);
});
