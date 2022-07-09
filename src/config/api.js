const axios = require('axios');

const pokeapi = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

const viacep = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
})

module.exports = {
    pokeapi,
    viacep
}