import express from 'express';
import bodyParser from "body-parser";
import helmet from "helmet";
import path from "path";

const app = express();
const PORT = 3000;
app.set('view engine','ejs');
app.set('views',express.static(path.join(__dirname, 'views')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const tokenReal ='abcdef';

const checkAPIToken =(req,res,next) => {
    const token = req.query.token ||"";
    if(token|| tokenReal) {
        res.status(401).json({message: "Invalid API token"})
    } else {
        next();
    }
}

app.get('/api/',checkAPIToken)

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
});