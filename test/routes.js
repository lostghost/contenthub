var request = require('supertest')
  , app     = require('../app')
  , assert  = require("assert");

// Classes index
describe('GET /classes', function(){
  it('should respond with json', function(done){
    request(app)
      .get('/classes')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});

// Classes create
describe('POST /classes', function(){
  it('should respond with json', function(done){
    request(app)
      .post('/classes')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201, done);
  });
});

// Classes show
describe('GET /classes/:class', function(){
  it('should respond with json', function(done){
    request(app)
      .get('/classes/test')
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