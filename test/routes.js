var request = require('supertest')
  , app     = require('../app')
  , assert  = require("assert");

describe('GET /classes', function(){
  it('should return status 200', function(done){
    request(app)
        .get('/classes')
        .expect(200, done);
  });
});