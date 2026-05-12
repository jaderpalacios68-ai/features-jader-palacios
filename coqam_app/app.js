import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

// PAGINA PRINCIPAL
app.get("/", (req, res) => {

    res.send(`
    
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>JP STYLE</title>

<style>

*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: Arial, Helvetica, sans-serif;
}

body{
    background:#f5f5f5;
}

/* BARRA SUPERIOR */
.top-bar{
    background:red;
    color:white;
    text-align:center;
    padding:10px;
    font-size:14px;
    font-weight:bold;
}

/* MENU */
header{
    background:#111;
    color:white;
    padding:20px 80px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}

.logo{
    font-size:35px;
    font-weight:bold;
    color:white;
}

.logo span{
    color:red;
}

nav a{
    color:white;
    text-decoration:none;
    margin:0 20px;
    font-size:18px;
    transition:0.3s;
}

nav a:hover{
    color:red;
}

/* HERO */
.hero{
    height:90vh;
    background:url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop');
    background-size:cover;
    background-position:center;
    display:flex;
    align-items:center;
    padding-left:100px;
}

.hero-text{
    background:rgba(255,255,255,0.7);
    padding:40px;
    border-radius:10px;
}

.hero-text h3{
    color:gray;
    font-size:25px;
    margin-bottom:15px;
}

.hero-text h1{
    font-size:70px;
    max-width:700px;
    line-height:1.1;
    color:#111;
}

.hero-text span{
    color:red;
}

.btn{
    display:inline-block;
    margin-top:30px;
    background:red;
    color:white;
    padding:18px 35px;
    text-decoration:none;
    font-size:20px;
    font-weight:bold;
    transition:0.3s;
}

.btn:hover{
    background:black;
}

/* PRODUCTOS */
.titulo{
    text-align:center;
    margin:70px 0 30px;
    font-size:45px;
}

.productos{
    width:90%;
    margin:auto;
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:25px;
    padding-bottom:60px;
}

.card{
    background:white;
    border-radius:15px;
    overflow:hidden;
    box-shadow:0 5px 20px rgba(0,0,0,.1);
    transition:.3s;
}

.card:hover{
    transform:translateY(-10px);
}

.card img{
    width:100%;
    height:320px;
    object-fit:cover;
}

.info{
    padding:20px;
}

.info h2{
    margin-bottom:10px;
}

.precio{
    color:red;
    font-size:25px;
    font-weight:bold;
    margin-bottom:10px;
}

.descripcion{
    color:#555;
    line-height:1.5;
    margin-bottom:20px;
}

.comprar{
    display:inline-block;
    background:black;
    color:white;
    padding:12px 25px;
    text-decoration:none;
    border-radius:6px;
}

.comprar:hover{
    background:red;
}

/* FOOTER */
footer{
    background:#111;
    color:white;
    text-align:center;
    padding:30px;
}

</style>
</head>

<body>

<div class="top-bar">
    NUEVA COLECCIÓN 2026 - ENVÍOS A TODO COLOMBIA
</div>

<header>

    <div class="logo">
        JP <span>STYLE</span>
    </div>

    <nav>
        <a href="#">Inicio</a>
        <a href="#">Productos</a>
        <a href="#">Colección</a>
        <a href="#">Contacto</a>
    </nav>

</header>

<section class="hero">

    <div class="hero-text">

        <h3>ASPIRE TO MORE</h3>

        <h1>
            NUEVA <span>COLECCIÓN</span> DEPORTIVA
        </h1>

        <a href="#productos" class="btn">
            Comprar Ahora →
        </a>

    </div>

</section>

<h1 class="titulo" id="productos">
    Nuestros Productos
</h1>

<section class="productos">

    <!-- PRODUCTO 1 -->
    <div class="card">

        <img src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1200&auto=format&fit=crop">

        <div class="info">

            <h2>CONJUNTO HUGO BOSS</h2>

            <p class="precio">$250.000</p>

            <p class="descripcion">
                Tela premium de excelente calidad y diseño elegante.
            </p>

            <a href="#" class="comprar">
                Comprar
            </a>

        </div>

    </div>

    <!-- PRODUCTO 2 -->
    <div class="card">

        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop">

        <div class="info">

            <h2>CONJUNTO NIKE</h2>

            <p class="precio">$250.000</p>

            <p class="descripcion">
                Comodidad, estilo y rendimiento deportivo.
            </p>

            <a href="#" class="comprar">
                Comprar
            </a>

        </div>

    </div>

    <!-- PRODUCTO 3 -->
    <div class="card">

        <img src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop">

        <div class="info">

            <h2>CONJUNTO ADIDAS</h2>

            <p class="precio">$250.000</p>

            <p class="descripcion">
                Diseño moderno y máxima frescura.
            </p>

            <a href="#" class="comprar">
                Comprar
            </a>

        </div>

    </div>

    <!-- PRODUCTO 4 -->
    <div class="card">

        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop">

        <div class="info">

            <h2>KIT DEPORTIVO</h2>

            <p class="precio">$250.000</p>

            <p class="descripcion">
                Set premium ideal para destacar.
            </p>

            <a href="#" class="comprar">
                Comprar
            </a>

        </div>

    </div>

</section>

<footer>
    © 2026 JP STYLE | Todos los derechos reservados
</footer>

</body>
</html>

    `);

});

// RUTA POKEMON
app.get("/pokemon/:name", async (req, res) => {

    const { name } = req.params;

    try {

        const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${name}`
        );

        const data = await response.json();

        res.json({
            nombre: data.name,
            altura: data.height,
            peso: data.weight,
            tipo: data.types.map(t => t.type.name)
        });

    } catch (error) {

        res.status(500).json({
            error: "Error al obtener los datos del Pokémon"
        });

    }

});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
