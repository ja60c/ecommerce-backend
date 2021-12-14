// REQUIREMENTS
const express = require('express');
const app = express();
const PORT = 3000;

// SERVER SETTINGS  MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTERS/ENDPOINTS
// Homepage
app.get('/', (req, res) => {
    return res.send({ message: 'Hola!' });
});

// AUTH USUARIOS
// Register - POST
app.post('/api/v1/auth/register', (req, res) => {
    return res.send({ message: 'Hola desde register!' })
})

// Login - POST
app.post('/api/v1/auth/login', (req, res) => {
    return res.send({ message: 'Hola desde login!' })
})
// Logout - POST
app.post('/api/v1/auth/logout', (req, res) => {
    return res.send({ message: 'Hola desde logout!' })
})


// CRUD PRODUCTOS
// Create - POST
app.post('/api/v1/products', (req, res) => {
    return res.send({ message: 'Hola desde products!' })
})
// Read all - GET
app.get('/api/v1/products', (req, res) => {
    return res.send({ message: 'Hola desde read all!' })
})
// Read one - GET
app.get('/api/v1/products/:id', (req, res) => {
    return res.send({ message: 'Hola desde read one!' })
})
// Update - PUT
app.put('/api/v1/products/:id', (req, res) => {
    return res.send({ message: 'Hola desde update!' })
})
// Delete - DELETE
app.delete('/api/v1/products/:id', (req, res) => {
    return res.send({ message: 'Hola desde delete!' })
})
// Destroy - DESTROY
app.delete('/api/v1/products/:id/destroy', (req, res) => {
    return res.send({ message: 'Hola desde destroy!' })
})

// LISTENER
app.listen(PORT, () => console.log('Servidor corriendo en http://localhost' + PORT)
);
