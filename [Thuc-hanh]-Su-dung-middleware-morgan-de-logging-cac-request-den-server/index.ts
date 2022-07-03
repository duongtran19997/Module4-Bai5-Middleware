import express from 'express';
import bodyParser  from "body-parser";
import Morgan from "morgan";
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Morgan("common"));

app.get("/",(req, res) => {
    res.json({message: "hello world!"});
});
// app.use(morgan("common"));

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});