const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const app = require('../app').app;

describe('Suit de prueba auth', () => {
    it('should return 401 when no jws token available', (done) => {
        // Cuando la llamda no tiene correctamente la llave
        chai.request(app)
            .get('/team')
            .end((err, res) => {
                chai.assert.equal(res.statusCode, 401);
                done();
            }
    )});

    it('should return 200 when  jws token is valid', (done) => {
        // Cuando la llamda no tiene correctamente la llave
        chai.request(app)
            .post('/login')      
            .end((err, res) => {
                chai.request(app)
                    .get('/team')
                    .set('Authorization', `JWT ${res.body.token}`)
                    .end((err, res) => {
                            chai.assert.equal(res.statusCode, 200);
                            done();
                        }
                )});
    });
});

