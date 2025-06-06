import {signup, login} from "../controllers/userController.js"
import { Router } from "express";

const router = Router();

router.route("/login")
.post(login)

router.route("/signup")
.post(signup)

export default router;