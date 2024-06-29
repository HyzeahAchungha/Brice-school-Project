import express from 'express';
import cors from 'cors';
import {adminRouter} from './Routes/AdminRoutes.js'


const app = express();
app.use (cors({
    origin:'http://localhost:3000',
    crendentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],

}));
app.use(express.json());
app.use('/auth', adminRouter)

app.listen(5000,()=>{
    console.log("server listening on port 5000");
})