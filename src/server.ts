import express from "express";
import path from "path";
import viewRoutes from "./routes/view/viewRouter";
import restRoutes from "./routes/rest";

import * as dotenv from "dotenv";
// initialize dotenv to put env variables into process.env
dotenv.config();

const port = process.env.PORT;
const app = express();

// set default directory for pug templates
app.set("views", path.resolve(__dirname, "templates"));
// set templating engine to use
app.set("view engine", "pug");

// import all controllers into app
app.use("/view", viewRoutes);
app.use("/api", restRoutes);

app.listen(port, () => {
    console.log(`started at port ${port}`)
});

