import axios from 'axios';

const getPokemon = (query, callback) => {
  axios({
    method:'get',
    url: `https://pokeapi.co/api/v2/pokemon/${query}/`,
  })
  .then((data) => {
    callback(data)
  })
  .catch((err) => console.error('Errored :', err));
}

export default getPokemon;