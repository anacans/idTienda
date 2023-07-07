const request = require('supertest');
const mongoose = require('mongoose');

const app = require('../../src/app');
const Product = require('../../src/models/product.model');
const productModel = require('../../src/models/product.model');


describe('API de productos', () => {

    //METODOS DE CICLO DE VIDA
    //Me conecto a la base de datos antes de las pruebas
    beforeAll(async () => {
        await mongoose.connect('mongodb://127.0.0.1:27017/idtienda')
    })

    //Cuando terminen las pruebas me desconecto
    afterAll(async () => {
        await mongoose.disconnect()
    })


    describe('descripción: GET /api/products', () => {

        let response;
        beforeEach(async () => {
            response = await request(app).get('/api/products').send()
        })

        it('debería devolver status 200', async () => {
            expect(response.statusCode).toBe(200)
        })

        it('debería devolver un JSON', async () => {
            expect(response.headers['content-type']).toContain('application/json')
        })

        it('deberia devolver un array', () => {
            //espero que la respuesta del body sea un array
            expect(response.body).toBeInstanceOf(Array)
        })

    })

    describe('descripción: POST /api/productos', () => {
        let response;
        const body = { name: 'Lapiz verde', description: 'pinta cosas verdes', price: 12, department: 'test', available: true, stock: 23 }

        beforeAll(async () => {
            response = await request(app).post('/api/products').send(body);
        })

        afterAll(async () => {
            await Product.deleteMany({ department: 'test' })
        })

        it('debería funcionar la url', async () => {
            expect(response.statusCode).toBe(200)
            expect(response.headers['content-type']).toContain('application/json')
        })

        it('deberia tener el _id definido', () => {
            expect(response.body._id).toBeDefined()
        })

        it('deberia insertar los mismos datos del body', () => {
            expect(response.body.name).toBe(body.name)
            expect(response.body.description).toBe(body.description)
            expect(response.body.price).toBe(body.price)
            expect(response.body.department).toBe(body.department)
            expect(response.body.available).toBe(body.available)
            expect(response.body.stock).toBe(body.stock)
        })

    })

    describe('descripción: PUT /api/products/IDPRODUCT', () => {

        const body = {
            "name": "Termomix",
            "description": "Para hacer ricas comiditas",
            "price": 1200,
            "available": true,
            "stock": 20,
            "department": "test"
        }

        let product;
        let response;

        beforeAll(async () => {
            product = await Product.create(body)
            response = await request(app).put(`/api/products/${product._id}`).send({
                available: false,
                price: 1300,
                stock: 12
            })
        })

        afterAll(async () => {
            await Product.findByIdAndDelete(product._id)
        })

        it('debería funcionar la url', () => {
            expect(response.statusCode).toBe(200)
            expect(response.headers['content-type']).toContain('application/json')
        })

        it('deberia ver las modificaciones en la bbdd', () => {
            expect(response.body.available).toBe(false);
            expect(response.body.price).toBe(1300);
            expect(response.body.stock).toBe(12);
        })


    })

    describe('DELETE /api/productos/IDPRODUCTO', () => {

        const body = {
            "name": "Termomix",
            "description": "Para hacer ricas comiditas",
            "price": 1200,
            "available": true,
            "stock": 20,
            "department": "test"
        }

        let product;
        let response;

        beforeAll(async () => {
            product = await Product.create(body)
            response = await request(app).delete(`/api/products/${product._id}`).send()
        })

        afterAll(async () => {
            await Product.findByIdAndDelete(product._id)
        })

        it('debería funcionar la url', () => {
            expect(response.statusCode).toBe(200)
            expect(response.headers['content-type']).toContain('application/json')
        })

        it('el producto no debe estar en la BD', async () => {
            const deleteProduct = await Product.findById(product._id)
            expect(deleteProduct).toBeNull();
        })

    })













})