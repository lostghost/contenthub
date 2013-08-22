var request = require('supertest')
  , app     = require('../app')
  , assert  = require("assert");

// Types index
describe('GET /types', function(){
  it('should respond with json', function(done){
    request(app)
      .get('/types')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

// Types create
describe('POST /types', function(){
  it('should respond with json', function(done){
    request(app)
      .post('/types')
      .set('Accept', 'application/json')
      .send({ name: 'deal', description: 'Deal' })
      .expect('Content-Type', /json/)
      .expect(201, done);
  });
});

// Types show
describe('GET /types/:type', function(){
  it('should respond with json', function(done){
    request(app)
      .get('/types/test')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

// Status show
describe('GET /status', function(){
  it('should respond with json', function(done){
    request(app)
      .get('/status')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

// 404
describe('404 request', function(){
  it('should respond with json', function(done){
    request(app)
      .get('/there/is/no/route/for/this')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});