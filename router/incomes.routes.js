import {
    Router
} from "express";
import incomes from "../controllers/incomes.contr.js";
const incomesRoute = Router();


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
incomesRoute.get("/incomes", checkToken, incomes.find);
incomesRoute.get("/incomes/:id", incomes.find);
incomesRoute.post("/incomes", incomes.create);
incomesRoute.put("/incomes/:id", incomes.update);
incomesRoute.delete("/incomes/:id", incomes.delete);

export default incomesRoute;