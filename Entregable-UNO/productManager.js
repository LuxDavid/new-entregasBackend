class ProductManager{

constructor(){
this.products=[];
}

addProduct(product){

    const {title,description,price,thumbnail,code,stock}=product

    const productsLength=this.products.length;

//-------------------------------------------------------------------------------------
   
    const newproduct={

        id:productsLength > 0 ? this.products[productsLength - 1].id + 1 : 1,
        title:title,
        description:description,
        price:price,
        thumbnail:thumbnail,
        code:code,
        stock:stock
        }

    const productRepeat= this.products.some(prod=> prod.code === code);

    const data=Object.values(newproduct).includes(undefined);

    if(data){
        return console.log("incomplete values, por favor llene todos los campos solicitaods");
    }

    if(productRepeat){
        return console.log('Este codigo de producto ya existe, por favor verifique');
    }

    this.products.push(newproduct);
}
    
//-------------------------------------------------------------------------------------
getProducts(){
    return console.log(this.products);
}

//-------------------------------------------------------------------------------------
getProductById(id){

const search= this.products.find(prod => prod.id === id);

!search ? console.log("Error el producto que buscas no existe") : console.log(search);
}}

const productNew1= new ProductManager();

productNew1.addProduct({
title:'Computadora Gamer', 
description:"Computadora de alta gama",
price:15000,
thumbnail:"Imagen de computadora",
code:"555BB",
stock:16
});

//-------------------------------------------------------------------------------------

productNew1.addProduct({
    title:'Monitor Gamer', 
    description:"Monitor 1920 x 1080 175HZ",
    price:5000,
    thumbnail:"Imagen de Monitor",
    code:"555AA",
    stock:10
});

//-------------------------------------------------------------------------------------

productNew1.addProduct({
    title:'Monitor Gamer 2', 
    description:"Monitor 1920 x 1080 175HZ",
    price:6000,
    thumbnail:"Imagen de otro monitor 2",
    code:"555AA",
    stock:20
});

//-------------------------------------------------------------------------------------

productNew1.addProduct({
    title:'Camara web', 
    description:"Camara 4k",
    price:1100,
    thumbnail:"Imagen de Camara web",
    stock:10
});

//-------------------------------------------------------------------------------------


productNew1.getProducts();

productNew1.getProductById(1)