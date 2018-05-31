import chai, { expect } from 'chai';
import { searchByName, searchByType, searchByAbility } from '../source/search';
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
      expect(searchByName).to.exist;
    });

    it('should exist search method', () => {
      expect(searchByType).to.exist;
    });

    it('should exist search method', () => {
      expect(searchByAbility).to.exist;
    });
  });


  describe('Search By Name tests', () => {   
    it('should call fetch function once', () => {
      const pokemon = searchByName();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch function with the correct URL', () => {
      const pokemon = searchByName('bulbasaur');
      expect(fetchedStub).to.have.been
        .calledWith('https://pokeapi.co/api/v2/pokemon/bulbasaur');

      const pokemon2 = searchByName('squirtle');
      expect(fetchedStub).to.have.been
        .calledWith('https://pokeapi.co/api/v2/pokemon/squirtle');
    });

    it('should return an promise with JSON data', () => {
      promise.resolves({ body: 'json' });

      const pokemon = searchByName('bulbasaur');
  
      expect(pokemon.resolveValue).to.be.eql({ body: 'json' });
    });
  });

  describe('Search By Type tests', () => {   
    it('should call fetch function once', () => {
      const type = searchByType();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch function with the correct URL', () => {
      const type = searchByType('grass');
      expect(fetchedStub).to.have.been
        .calledWith('https://pokeapi.co/api/v2/type/grass');

      const type2 = searchByType('water');
      expect(fetchedStub).to.have.been
        .calledWith('https://pokeapi.co/api/v2/type/water');
    });

    it('should return an promise with JSON data', () => {
      promise.resolves({ body: 'json' });

      const type = searchByType('grass');
  
      expect(type.resolveValue).to.be.eql({ body: 'json' });
    });
  });

  describe('Search By Ability tests', () => {   
    it('should call fetch function once', () => {
      const ability = searchByAbility();
      expect(fetchedStub).to.have.been.calledOnce;
    });

    it('should call fetch function with the correct URL', () => {
      const ability = searchByAbility('serene-grace');
      expect(fetchedStub).to.have.been
        .calledWith('https://pokeapi.co/api/v2/ability/serene-grace');

      const ability2 = searchByAbility('stench');
      expect(fetchedStub).to.have.been
        .calledWith('https://pokeapi.co/api/v2/ability/stench');
    });

    it('should return an promise with JSON data', () => {
      promise.resolves({ body: 'json' });

      const ability = searchByAbility('serene-grace');
  
      expect(ability.resolveValue).to.be.eql({ body: 'json' });
    });
  });


});