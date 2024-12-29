const express = require("express")
require("dotenv").config();

const port = 8001 || process.env.PORT;

const app = express()

app.get('/', (req, res)=>{
    res.header('Contant-type', 'application/json')
    res.send(JSON.stringify({title:"TEST"}));
})


app.listen(port, ()=>{
    console.log(`server is running at this ${port}`);
})
