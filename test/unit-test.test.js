const assert = require('chai').assert;

function addValue(a ,b) {
    return a + b;
}

describe('Suit de prueba para el curso', () => {
    it('deberia devolver 2', () => {
        let valor = addValue(1, 1);
        assert.equal(valor, 2);
    })
});