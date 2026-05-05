import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("BIENVENIDO A LA PAGINA DE JADER PALACIOS");
});

app.get("/pokemon/:name", async (req, res) => {
    const { name } = req.params;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();

        res.json({ 
            nombre: data.name,
            altura: data.height,
            peso: data.weight,
            tipo: data.types.map(t => t.type.name)
        });

    } catch (error) {
        res.status(500).json({ error: "Error al obtener los datos del Pokémon" });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});