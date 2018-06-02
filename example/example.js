global.fetch = require('node-fetch');

import { searchByName } from '../source/search';

const pokemon = searchByName('squirtle');

pokemon
  .then(data => console.log(data.name));