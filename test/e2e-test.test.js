const chai = require('chai');
const chaiHttp = require('chai-http');


chai.use(chaiHttp);

const app = require('../app').app;


describe('Suit de prueba  e2e para el curso', () => {
    it('Deberia devolver hola mundo', (done) => {
        chai.request(app) //chai queremos que utilices nuestro servidor de nuestros ficheros
            .get('/') //hasme esta llamada a este servidor
            .end((err, res) => {     //Permite recojer el resultado de esta llamda
                chai.assert.equal(res.text, 'Hello World!')  //S
                done();
            });
    })
});
