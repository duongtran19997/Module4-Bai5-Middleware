"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
const user = {
    username: 'user',
    password: 'password'
};
const check = (req, res, next) => {
    if (req.body.username == user.username && req.body.password == user.password) {
        next();
    }
    else {
        next('wrong username or password');
    }
};
app.use('/', check, (req, res, next) => {
    res.json({
        message: 'Welcome User!!'
    });
});
app.use((err, req, res, next) => {
    console.log('def');
    res.json({ message: err.message });
});
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
//# sourceMappingURL=index.js.map