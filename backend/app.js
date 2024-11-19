import express from "express";

const app = express();
import dotenv from "dotenv";

dotenv.config({path:"./config/config.env"})
export default app