import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectDatabase } from "./config/database";

dotenv.config();

connectDatabase();

import Article from "./models/acticel.model";


const app: Express = express();
const port: number = 3000;

// Rest API
app.get("/articles", async (req: Request, res: Response) => {

    const articles = await Article.find({
        deleted: false
    });


    res.json({
        articles: articles
    });
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
