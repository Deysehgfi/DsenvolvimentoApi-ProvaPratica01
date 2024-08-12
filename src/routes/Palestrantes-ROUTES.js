import { Router } from "express"

const router = Router()

import { cadastrarPalestrante, getTodosPalestrantes } from "../controllers/Palestrantes-CONTROLLERS.js"


router.get("/", getTodosPalestrantes);
router.post("/", cadastrarPalestrante)

export default router;