import {
    Router
} from "express";
import positions from "../controllers/positions.contr.js";
const positionsRoute = Router();
positionsRoute.get("/departments/positions", positions.find);
positionsRoute.get("/departments/positions/:id", positions.find);
positionsRoute.post("/departments/positions", positions.create);
positionsRoute.put("/departments/positions/:id", positions.update);
positionsRoute.delete("/departments/positions/:id", positions.delete);

export default positionsRoute;