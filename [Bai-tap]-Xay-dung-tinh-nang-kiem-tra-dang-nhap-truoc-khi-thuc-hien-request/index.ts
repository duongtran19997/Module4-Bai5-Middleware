import express from 'express';
import bodyParser from "body-parser";
import router from "./src/router/router";
const PORT = 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const user = {
    username: 'user',
    password: 'password'
}
const check = (req, res,next) => {
    if(req.body.username == user.username && req.body.password == user.password){
        next()
    }else{
        next('wrong username or password')
    }
}

// app.get('/', (req, res,next) => {
//
// });

app.use('/',check,(req, res, next) => {
    res.json({
        message: 'Welcome User!!'
    });
});
app.use((err,req,res,next) => {
    console.log('def')
    res.json({message: err.message})
})

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`);
});