import express from 'express';
import bodyParser from 'body-parser';
const rateLimit = require('express-rate-limit');
const app = express();
const PORT = 3000;


const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',limiter,(req, res) => {
    console.log('Bấm ít thôi không là bị khoá mõm');
});

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
});