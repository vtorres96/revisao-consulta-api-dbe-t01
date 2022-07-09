const { pokeapi } = require('../config/api')

const listar = async (req, res) => {
    try {
        let { offset, limit } = req.query;
        let { data } = await pokeapi.get(`/pokemon?offset=${offset}&limit=${limit}`);
        // let { data } = await pokeapi.get('/pokemon', {
        //     params: {
        //         offset,
        //         limit
        //     }
        // });
        return res.status(200).json(data);
    } catch (error) {
        return res.status(400).json({ mensagem: "Erro " + error.message })
    }
}

module.exports = {
    listar
}