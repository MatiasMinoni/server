
const fs = require ("fs")
const express = require('express');
const { json } = require("express");
const app = express();

const PORT= process.env.PORT || 3030;

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.get('/productos', async (req, res) => {
let id= Number(req.params.id) - 1 ;
    let items = await fs.promises.readFile(('items.json' ), 'utf8');
    console.log(items)
    res.send(items);

})
let visitas = 0;
app.get('/visitas', (req, res) => {
    res.send(`La cantidad de visitas es de: ${++visitas}`);
})
app.get('/productoRandom', (req, res) => {
    let items = JSON.parse(fs.readFileSync('items.json', 'utf8'));
    let random = Math.floor(Math.random() * items.length);
    res.send(items[random]);

   
})

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

