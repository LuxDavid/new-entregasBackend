import ProductManager from "./productManager.js";
import express from 'express';

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const products = new ProductManager('./products.json');

//-------------------------------------------------------------------

app.get('/products',async (req,res)=>{

const limit= parseInt(req.query.limit);

const productList= await products.getProducts();

if(!limit || !limit == Number){
    return res.send({products:productList});
}

const limitProducts= productList.slice(0, limit);

return res.send({products:limitProducts});
});

//-------------------------------------------------------------------

app.get('/products/:pid', async (req,res)=>{

const productId= parseInt(req.params.pid);

const productList= await products.getProducts();

const product= productList.find(prod=> prod.id === productId);

if(!product) return res.send({error:"Product not founded"});

return res.send({product:product});

});

app.listen(8080, ()=> console.log("Servidor activo en el puerto 8080"));