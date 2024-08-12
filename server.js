import dotenv from "dotenv/config"
import express from "express"

const PORT = process.env.PORT

//criação de tabelas 
import "./src/models/PalestrantesMODEL.js"
import "./src/models/ParticipantesMODEL.js"
import "./src/models/EventosMODEL.js"



//rotas
import palestrantesRoutes from "./src/routes/Palestrantes-ROUTES.js"

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//utilização das routas
app.use("/eventos/palestrantes", palestrantesRoutes)

app.listen(PORT, () => {
    console.log("✨ servidor on PORT:", PORT)
})