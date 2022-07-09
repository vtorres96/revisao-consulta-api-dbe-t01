const express = require('express');
const router = express.Router();

const PokemonController = require('../controllers/PokemonController');
const ViaCepController = require('../controllers/ViaCepController')

router.get('/pokemon', PokemonController.listar);
router.get('/viacep/:cep', ViaCepController.listar);

module.exports = router;