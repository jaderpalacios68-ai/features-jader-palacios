import express from "express"

const app = express()
const port = 3000

app.get("/", (reg,res)=>{
    res.send("BIENVENIDO A LA PAGINA DE COQUITO AMARILLO DE JADER PALACIOS")


});

app.listen (3000,()=>{
    console.log (`example app listening on port ${port}`)
})
