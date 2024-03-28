const express = require('express')
const ProdutoController = require('../controllers/ProdutoController')
const Produto = require('../models/Produto')
const router = express.Router()
const ProdutoController = require('../controllers/ProdutoController')

router.get('/', function(req, res){
    res.json({})
})

router.get('/produtos', (req, res) => ProdutoController.getAll(req, res))
router.post('/produtos', (req, res) => ProdutoController.create(req, res))
router.get('/produtos/:id', (req, res) => ProdutoController.get(req, res))
router.put('/produtos/:id', (req, res) => ProdutoController.update(req, res))
router.delete('/produtos/:id', (req, res) => ProdutoController.delete(req, res))

router.get('/comandas', (req, res) => ProdutoController.getAll(req, res))
router.get('/comandas', (req, res) => ProdutoController.getAll(req, res))
router.post('/comandas', (req, res) => ProdutoController.create(req, res))
router.post('/comandas', (req, res) => ProdutoController.create(req, res))
router.get('/comandas/:id', (req, res) => ProdutoController.get(req, res))

router.get('/cliente/:id', (req, res) => ProdutoController.get(req, res))
router.put('/cliente/:id', (req, res) => ProdutoController.update(req, res))
router.put('/cliente/:id', (req, res) => ProdutoController.update(req, res))
router.delete('/cliente/:id', (req, res) => ProdutoController.delete(req, res))
router.delete('/cliente/:id', (req, res) => ProdutoController.delete(req, res))

module.exports = router