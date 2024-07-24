
import express from "express";
import cors from "cors";
import { adminRouter } from "./Routes/AdminRoutes.js";

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    crendentials: true,
  })
);
app.use(express.json());
app.use("/auth", adminRouter);
app.use(express.static('public'))

app.listen(5000, () => {
  console.log("server listening on port 5000");

import express from 'express';
import cors from 'cors';
import { adminRouter } from './Routes/AdminRoutes.js';
import studentRouter from './Routes/StudentRoute.js';

const app = express();
app.use(express.json());

app.use(
	cors({
		origin: 'http://localhost:3000',
		methods: 'POST,GET,PATCH,DELETE,PUT',
		credentials: true,
		optionsSuccessStatus: 204,
	})
);
app.use('/auth', adminRouter);
app.use('/student', studentRouter);

app.listen(5000, () => {
	console.log('server listening on port 5000');
>>>>>>> fe852cc160aa672ba5292c86422ba6344dc89df5
});
