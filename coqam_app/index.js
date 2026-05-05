import express from "express";
const app = express ();

app.get("/", (reg,res)=>{
    res.send("BIENVENIDO A LA PAGINA DE ROPA JP STYLE")


});

app.listen (3000,()=>{
    console.log ('servicio en espera, puerto 3000')
})

