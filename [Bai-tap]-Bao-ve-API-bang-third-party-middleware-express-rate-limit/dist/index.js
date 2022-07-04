"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const rateLimit = require('express-rate-limit');
const app = (0, express_1.default)();
const PORT = 3000;
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/', limiter, (req, res) => {
    console.log('Bấm ít thôi không là bị khoá mõm');
});
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
//# sourceMappingURL=index.js.map