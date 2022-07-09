const { viacep } = require('../config/api')

const listar = async (req, res) => {
    try {
        let { cep } = req.params
        let { data } = await viacep.get(`/${cep}/json`)
        return res.status(200).json(data)
    } catch (error) {
        return res.status(400).json({ mensagem: "Erro " + error.message })
    }
}

module.exports = {
    listar
}