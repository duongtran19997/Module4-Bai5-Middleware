import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';

const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', async (req, res, next) => {
    await fs.readFile('./one.txt', (err, data) => {
        if (err) {
            next(err)
        } else {
            res.send(data);
        }
    });
})


app.use((err, req, res, next) => {
    console.error('Error', err.type)
    if (err.type == 'time-out') // arbitrary condition check

        res.status(408).send(err)

    else

        res.status(500).send(err)

})


app.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
})