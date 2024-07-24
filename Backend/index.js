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
});
