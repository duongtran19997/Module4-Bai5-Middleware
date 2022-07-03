"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const fs_1 = __importDefault(require("fs"));
const PORT = 3000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.get('/', async (req, res, next) => {
    await fs_1.default.readFile('./one.txt', (err, data) => {
        if (err) {
            next(err);
        }
        else {
            res.send(data);
        }
    });
});
app.use((err, req, res, next) => {
    console.error('Error', err.type);
    if (err.type == 'time-out')
        res.status(408).send(err);
    else
        res.status(500).send(err);
});
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
//# sourceMappingURL=index.js.map