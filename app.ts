import express from "express";
import cors from "cors";

import categoryRoutes from "./routes/category.routes";
import foodRoutes from "./routes/food.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/categories", categoryRoutes);
app.use("/api/foods", foodRoutes);

export default app;