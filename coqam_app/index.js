import express from "express";
const app = express ();

app.get("/", (reg,res)=>{
    res.send("BIENVENIDO A LA PAGINA DE COQUITO AMARILLO DE JADER PALACIOS")


});

app.listen (3000,()=>{
    console.log ('servicio en espera, puerto 3000')
})

