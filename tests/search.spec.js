import chai, { expect } from 'chai';
import { search } from '../source/search';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
import sinon from 'sinon';

chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Search', () => {
  let fetchedStub;
  let promise;

  beforeEach(() => {
    fetchedStub = sinon.stub(global, 'fetch');
    promise = fetchedStub.returnsPromise();
  });

  afterEach(() => {
    fetchedStub.restore();
  });


  describe('Smoke tests', () => {
    it('should exist search method', () => {
      expect(search).to.exist;
    });
  });


  describe('Search main tests', () => {
    
    it('should call fetch function once', () => {
      const pokemon = search();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch function with the correct URL', () => {
      const pokemon = search('bulbasaur');
      expect(fetchedStub).to.have.been
        .calledWith('http://pokeapi.co/api/v2/pokemon/bulbasaur');

      const pokemon2 = search('squirtle');
      expect(fetchedStub).to.have.been
        .calledWith('http://pokeapi.co/api/v2/pokemon/squirtle')
    });

    it('should return an promise with JSON data within', () => {
      promise.resolves({ body: 'json' });

      const pokemon = search('bulbasaur');

      expect(pokemon.resolveValue).to.be.eql({ body: 'json' });
    });

  });



});