import {
    Router
} from "express";
import directions from "../controllers/directions.contr.js";
const directionsRoute = Router();



async function checkToken(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({
            message: "Xatolik: Kirish uchun token kerak yoki sizning xuquqingiz yo'q"
        });
    }
    try {
        let {
            contact
        } = await users.findOne({
            contact: JWT.VERIFY(token).id
        });
        if (contact == JWT.VERIFY(token).id) {
            next();
        }
    } catch (error) {
        return res.status(401).json({
            message: "Xatolik: Noto'g'ri yoki amalga oshirilmagan token"
        });
    }
}
directionsRoute.get("/departments/directions", checkToken, directions.find);
directionsRoute.get("/departments/directions/:id", checkToken,directions.find);
directionsRoute.post("/departments/directions",  checkToken,directions.create);
directionsRoute.put("/departments/directions/:id", checkToken, directions.update);
directionsRoute.delete("/departments/directions/:id", checkToken, directions.delete);

export default directionsRoute;