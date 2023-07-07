const Product = require('../models/product.model')

const getProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}

const createProduct = async (req, res) => {
    const newProduct = await Product.create(req.body)
    res.json(newProduct)
}

const getById = async (req, res) => {
    const { idproducto } = req.params;

    const product = await Product.findById(idproducto)
    res.json(product)
}

const editProduct = async (req, res) => {
    const { idproducto } = req.params;

    const product = await Product.findByIdAndUpdate(idproducto, req.body, { new: true })
    res.json(product)
}

const deleteProduct = async (req, res) => {
    const { idproducto } = req.params;

    const product = await Product.findByIdAndDelete(idproducto)
    res.json(product)
}

module.exports = {
    getProducts, createProduct, getById, editProduct, deleteProduct
}