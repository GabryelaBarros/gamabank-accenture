const chai = require('chai')
const calculadora = require('../../src/helpers/calculadora')

const assert = chai.assert


describe('Minhas operações da calcula tdd', () => {

    it('Deve retornar a soma com resultado 2', () =>{
        const expectedNumber = 2
        assert.equal(calculadora.sum(1,1), expectedNumber)
    })

    it('Deve retornar a subtracao com resultado 0', () => {
        const expectedNumer = 0
        assert.equal(calculadora.sub(1,1), expectedNumer)
    })

})