const express = require('express');
const ControllersAvaliacao = require('../controllers/avaliacao')

const router = express.Router()

router.post("/avaliacao/", ControllersAvaliacao.Somar)
router.post("/avaliacao/", ControllersAvaliacao.Sub)
router.post("/avaliacao/", ControllersAvaliacao.Mult)
router.post("/avaliacao/", ControllersAvaliacao.Divi)

module.exports = router;