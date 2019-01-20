const request = require('supertest');
const expect = require('expect');

let app = require('./server').app;

it('should return hello world response', (done) => {
   request(app)
       .get('/')
       .expect(200)
       .expect((res)=> {
           expect(res.body).toInclude({ name : 'Hello World!'})
       })
       .end(done) ;
});

it('should show that i exist in the objects', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
            expect(res.body).toBeA('array').toInclude({name: "Aymen", age: 24});
        })
        .end(done);
});
