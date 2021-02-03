import express from "express";
import Product from "../models/productModel.js";
import expressAsyncHandler from "express-async-handler";
import {isAdmin, isAuth} from "../util.js";
import data from "../data.js";


export const productRoute = express.Router();

productRoute.get('/', expressAsyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.send(products);
}));

productRoute.get("/seed",
    expressAsyncHandler(async (req, res) => {
        await Product.remove({});
        const products = await Product.insertMany(data.products)
        res.send({products});
    })
);

productRoute.get('/:id', expressAsyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if(product){
        res.send(product);
    }else {
        res.status(404).send({message: "Product not Found"});
    }
}));

productRoute.post('/', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const product = new Product({
        name: 'Przykładowa Nazwa Produktu',
        image: 'p1.jpg',
        price: 0,
        brand: 'Marka Produktu',
        category: 'Przykładowa Kategoria Produktu',
        countInStock: 0,
        thumbnail: 'Przykładowy Opis Wyświetlany Na Stronie Głównej',
        description: 'Przykładowy Opis Produktu'
    });
    const createdProduct = await product.save();
    res.send({message: 'Product was created', product: createdProduct});

}));

productRoute.put('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if(product){
        product.name = req.body.name;
        product.image = req.body.image;
        product.price = req.body.price;
        product.brand = req.body.brand;
        product.category = req.body.category;
        product.countInStock = req.body.countInStock;
        product.thumbnail = req.body.thumbnail;
        product.description = req.body.description;
        const updatedProduct = await product.save();
        res.send({message: 'Product was updated', product: updatedProduct});
    } else {
        res.status(404).send({message: 'Product not found'});
    }

}));

productRoute.delete('/:id', isAuth, isAdmin, expressAsyncHandler(async (req, res)=>{
    const product = await Product.findById(req.params.id);
    if(product){
        const deleteProduct = await product.remove();
        res.send({message: 'Product Deleted', product: deleteProduct});
    }else{
        res.status(404).send({message: 'Product Not Found'});
    }
}));