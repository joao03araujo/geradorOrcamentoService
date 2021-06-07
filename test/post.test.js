const test = require('tape')
const supertest = require('supertest')
const app = require(',/app')

test('POST /orcamento', (t) => {
    supertest(app)
      .get('/orcamento/')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) =>{
        t.error(err, 'Sem erros')
        t.end()  
      })
})