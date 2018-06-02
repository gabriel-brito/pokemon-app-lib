# PokeAPI Library

[![Build Status](https://travis-ci.org/gabriel-brito/pokemon-app-lib.svg?branch=master)](https://travis-ci.org/gabriel-brito/pokemon-app-lib)
[![Coverage Status](https://coveralls.io/repos/github/gabriel-brito/pokemon-app-lib/badge.svg?branch=master)](https://coveralls.io/github/gabriel-brito/pokemon-app-lib?branch=master)

A library to work with the [PokeAPI v2](https://pokeapi.co/).

## Browser Support

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | IE11+ ✔ |

## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the PokeAPI Web API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.

## Installation

```sh
$ npm install pokemon-app-lib --save-dev
```

## How to use

```js
// to import a specific method
import { method } from 'pokemon-app-lib';

const [name] = method('[your search]');

// Example:

import { searchByName } from 'pokemon-app-lib';

const squirtleFetch = searchByName('squirtle');
```

### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="pokemon-app-lib.umd.js"></script>

<!-- to import minified version -->
<script src="pokemon-app-lib.umd.min.js"></script>
```

After that the library will be available to the Global as `pokemonAppLib`. Follow an example:

```js

let pokemon = pokemonAppLib.searchByName('charizard');

```

## Methods

> Follow the methods that the library provides. You can test all methods in [PokeAPI](https://pokeapi.co/).

### searchByName(query)

> This method will search your pokemon by the name.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* or *number* | 'Any search query'|

**Example**

```js
pokemonAppLib.searchByName('charizard')
  .then(data => {
    // do what you want with the data
  })
```

### searchByType(query)

> This method will search all pokemons from chosen type.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* or *number* | 'Any search query'|

**Example**

```js
pokemonAppLib.searchByType('flying')
  .then(data => {
    // do what you want with the data
  })
```

### searchByAbility(query)

> This method will one ability pokemons from one type.

**Arguments**

| Argument | Type    | Options           |
|----------|---------|-------------------|
|`query`   |*string* or *number* | 'Any search query'|

**Example**

```js
pokemonAppLib.searchByAbility(13)
  .then(data => {
    // do what you want with the data
  })
```
## Contributing

Please read [CONTRIBUTING.md](https://github.com/gabriel-brito/pokemon-app-lib/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

| ![Gabriel Santos](https://avatars2.githubusercontent.com/u/16655018?s=460&v=4)|
|:---------------------:|
|  [Gabriel Santos](https://github.com/gabriel-brito/)   |

See also the list of [contributors](https://github.com/gabriel-brito/pokemon-app-lib/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Thanks

Special thanks to [Willian Justen](https://github.com/willianjusten) for that wonderful TDD course!