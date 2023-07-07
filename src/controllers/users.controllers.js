const router = require('express').Router()
const User = require('../models/user.model')

const createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.json(newUser)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

const buyProduct = async (req, res) => {
    const { userId, productId } = req.params;
    try {
        const user = await User.findById(userId);
        user.products.push(productId) //la modifico asi porq es un array
        await user.save();
        res.json(user)
    } catch (error) {
        res.json({ fatal: error.message })
    }

}

const getAll = async (req, res) => {
    try {
        const users = await User.find().populate('products') //populate busca por cada id el producto y lo va a poner con todos sus datos, si no lo pongo solo sale el id 
        res.json(users)
    } catch (error) {
        res.json({ fatal: error.message })
    }
}

module.exports = { createUser, buyProduct, getAll }