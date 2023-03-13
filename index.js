const express = require('express');
const app = express();
const port = 8080;

const productos = [
    {id: 1, nombre: 'Producto 1', precio: 10},
    {id: 2, nombre: 'Producto 2', precio: 20},
    {id: 3, nombre: 'Producto 3', precio: 30},
    {id: 4, nombre: 'Producto 4', precio: 40},
    {id: 5, nombre: 'Producto 5', precio: 50},
    {id: 6, nombre: 'Producto 6', precio: 60},
    {id: 7, nombre: 'Producto 7', precio: 70},
    {id: 8, nombre: 'Producto 8', precio: 80},
    {id: 9, nombre: 'Producto 9', precio: 90},
    {id: 10, nombre: 'Producto 10', precio: 100}
];

// Ruta para obtener todos los productos
app.get('/products', (req, res) => {
    const limit = req.query.limit;
    if (limit) {
        res.json(productos.slice(0, limit));
    } else {
        res.json(productos);
    }
});

// Ruta para obtener un producto por su ID
app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    const producto = productos.find(p => p.id == id);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({error: `Producto con ID ${id} no encontrado`});
    }
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
