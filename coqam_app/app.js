import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// RUTAS
import productosRoutes from "./routes/productos.js";

const app = express();

const PORT = 3000;

// NECESARIO PARA __dirname EN ES MODULES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// MIDDLEWARES
app.use(express.json());

// ARCHIVOS ESTÁTICOS
app.use(express.static(path.join(__dirname, "public")));

// RUTAS API
app.use("/api/productos", productosRoutes);

// RUTA PRINCIPAL
app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "public", "index.html"));

});

// ERROR 404
app.use((req, res) => {

    res.status(404).json({
        mensaje: "Ruta no encontrada"
    });

});

// SERVIDOR
app.listen(PORT, () => {

    console.log(`
=====================================
 SERVIDOR JP STYLE ACTIVO
=====================================

URL:
http://localhost:${PORT}

API:
http://localhost:${PORT}/api/productos

=====================================
    `);

});