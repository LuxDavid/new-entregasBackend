import express from 'express';
import productsRouter from './routes/products-router.js';
import cartsRouter from './routes/cart-router.js';

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.use('/api/products', productsRouter );
app.use('/api/carts', cartsRouter );

app.listen(8080, ()=> console.log("Servidor activo en el puerto 8080"));