 let productos = [
  { id:1, nombre:"CONJUNTO HUGO BOSS", precio:350000, imagen:"/img/conjunto.jpg", descripcion:"Tela de excelente calidad y diseño elegante deportivo." },
  { id:2, nombre:"CONJUNTO NIKE", precio:250000, imagen:"/img/conjunto-nike.jpeg", descripcion:"Conjunto moderno y cómodo para uso deportivo." },
  { id:3, nombre:"CONJUNTO ADIDAS", precio:250000, imagen:"/img/conjunto-adidas.jpeg", descripcion:"Excelente calidad y estilo urbano deportivo." },
  { id:4, nombre:"CONJUNTO PUMA", precio:450000, imagen:"/img/conjunto puma.jpg", descripcion:"conjunto de alta calidad y diseño moderno para uso deportivo." },
  { id:5, nombre:"CONJUNTO REEBOK", precio:230000, imagen:"/img/conjunto-reebok.jpg", descripcion:"Conjunto de exelente tela y comodidad para el uso diario." },
  { id:6, nombre:"CONJUNTO UNDER ARMOUR", precio:235000, imagen:"/img/conjunto-under-armour.jpg", descripcion:"Conjunto de alta calidad y diseño moderno" },
  { id:7, nombre:"CONJUNTO CALVIN KLEIN", precio:400000, imagen:"/img/conjunto calvin klein.jpeg", descripcion:"Conjunto de alta extetica moderna para el uso nocturno" },
  {id:8, nombre:"CONJUNTO SUPERDRY", precio:300000, imagen:"/img/conjunto superdry.jpg", descripcion:"Conjunto en tela de algodon, muy comodo y super abrigado" }, 
  {id:9, nombre:"CONJUNTO TOMMY HILFIGER", precio:350000, imagen:"/img/conjunto tommy.jpg", descripcion:"Conjunto de alta calidad y diseño elegante para el uso diario" },
  {id:10, nombre:"CONJUNTO LACOSTE", precio:220000, imagen:"/img/conjunto lacoste.jpg", descripcion:"Conjunto para los amantes de la moda urbana y moderna" },
  

];

export const findAll = () => productos;
export const findById = (id) => productos.find(p => p.id == id);
export const create = (nuevoProducto) => { const producto = { id: productos.length + 1, ...nuevoProducto }; productos.push(producto); return producto; };
export const update = (id, datos) => { const i = productos.findIndex(p => p.id == id); if(i !== -1){ productos[i] = { ...productos[i], ...datos }; return productos[i]; } return null; };
export const remove = (id) => { const i = productos.findIndex(p => p.id == id); if(i !== -1){ productos.splice(i,1); return true; } return false; };