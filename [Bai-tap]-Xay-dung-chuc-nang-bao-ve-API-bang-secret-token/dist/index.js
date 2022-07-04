"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
app.set('view engine', 'ejs');
app.set('views', express_1.default.static(path_1.default.join(__dirname, 'views')));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
const tokenReal = 'abcdef';
const checkAPIToken = (req, res, next) => {
    const token = req.query.token || "";
    if (token || tokenReal) {
        res.status(401).json({ message: "Invalid API token" });
    }
    else {
        next();
    }
};
app.get('/api/', checkAPIToken);
app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});
//# sourceMappingURL=index.js.map