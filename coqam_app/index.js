<html>
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
    font-family:Arial, sans-serif;
}

body{
    background:#f5f5f5;
}

/* Barra superior */
.top-bar{
    background:#d60000;
    color:white;
    padding:10px 50px;
    display:flex;
    justify-content:space-between;
    font-size:14px;
}

/* Navbar */
header{
    background:#111;
    color:white;
    padding:20px 50px;
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
    font-weight:bold;
    transition:.3s;
}

nav a:hover{
    color:red;
}

/* Hero principal */
.hero{
    height:90vh;
    background:
    linear-gradient(rgba(255,255,255,.6),rgba(255,255,255,.6)),
    url('/img/banner.jpg') center/cover;
    display:flex;
    align-items:center;
    padding:100px;
}

.hero-text h3{
    color:#666;
    margin-bottom:10px;
}

.hero-text h1{
    font-size:85px;
    font-weight:900;
    line-height:1;
    color:#111;
}

.hero-text span{
    color:red;
}

.btn{
    display:inline-block;
    margin-top:30px;
    padding:18px 35px;
    background:red;
    color:white;
    text-decoration:none;
    font-weight:bold;
    transition:.3s;
}

.btn:hover{
    background:black;
}

/* Productos */
.productos{
    padding:80px 50px;
    background:white;
}

.titulo{
    text-align:center;
    font-size:45px;
    margin-bottom:50px;
    color:#111;
}

.titulo span{
    color:red;
}

.grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
    gap:30px;
}

.card{
    background:white;
    box-shadow:0 10px 25px rgba(0,0,0,.1);
    overflow:hidden;
    transition:.3s;
}

.card:hover{
    transform:translateY(-10px);
}

.card img{
    width:100%;
    height:350px;
    object-fit:cover;
}

.info{
    padding:20px;
}

.info h2{
    font-size:22px;
    margin-bottom:10px;
}

.precio{
    color:red;
    font-size:24px;
    font-weight:bold;
    margin-bottom:15px;
}

.info p{
    color:#666;
    margin-bottom:20px;
}

.comprar{
    background:#111;
    color:white;
    padding:12px 25px;
    text-decoration:none;
    display:inline-block;
}

.comprar:hover{
    background:red;
}

/* Footer */
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
    <p>🔥 Nueva colección deportiva disponible</p>
    <p>JPSTYLE@email.com | +57 300 000 0000</p>
</div>

<header>
    <div class="logo">JP <span>STYLE</span></div>

    <nav>
        <a href="#">Inicio</a>
        <a href="#">Colección</a>
        <a href="#">Ofertas</a>
        <a href="#">Contacto</a>
    </nav>
</header>

<section class="hero">
    <div class="hero-text">
        <h3>ASPIRE TO MORE</h3>
        <h1>NUEVAS <span>COLECCIONES</span><br>DEPORTIVAS</h1>
        <a href="#" class="btn">Comprar Ahora →</a>
    </div>
</section>

<section class="productos">
    <h1 class="titulo">PRODUCTOS <span>DESTACADOS</span></h1>

    <div class="grid">

        <div class="card">
            <img src="/img/conjunto.jpg">
            <div class="info">
                <h2>CONJUNTO HUGO BOSS</h2>
                <div class="precio">$250.000</div>
                <p>Excelente calidad y estilo premium.</p>
                <a href="#" class="comprar">Comprar</a>
            </div>
        </div>

        <div class="card">
            <img src="/img/conjunto nike.jpeg">
            <div class="info">
                <h2>CONJUNTO NIKE</h2>
                <div class="precio">$250.000</div>
                <p>Diseño deportivo moderno y elegante.</p>
                <a href="#" class="comprar">Comprar</a>
            </div>
        </div>

        <div class="card">
            <img src="/img/conjunto adidas.jpeg">
            <div class="info">
                <h2>CONJUNTO ADIDAS</h2>
                <div class="precio">$250.000</div>
                <p>Comodidad máxima para entrenar.</p>
                <a href="#" class="comprar">Comprar</a>
            </div>
        </div>

    </div>
</section>

<footer>
© 2026 JP STYLE - Todos los derechos reservados
</footer>

</body>
</html>
</html>
