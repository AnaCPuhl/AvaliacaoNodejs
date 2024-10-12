const ServicesAvaliacao = require('../services/avaliacao')

class ControllersAvaliacao {
    Somar(req, res) {
        try {
            const resultado = ServicesAvaliacao.Somar(req.body.num1, req.body.num2);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    Sub(req, res) {
        try {
            const resultado = ServicesAvaliacao.Sub(req.body.num1, req.body.num2);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    Mult(req, res) {
        try {
            const resultado = ServicesAvaliacao.Mult(req.body.num1, req.body.num2);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }

    Divi(req, res) {
        try {
            const resultado = ServicesAvaliacao.Divi(req.body.num1, req.body.num2);
            res.status(201).json({ resultado })
        } catch (e) {
            res.status(500).json({ msg: e.message })
        }
    }


}

module.exports = new ControllersAvaliacao()