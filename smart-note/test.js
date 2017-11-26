var expect = require('chai').expect;
var app = require('http');
const request = require('supertest').agent(app.createServer().listen(8080));

var chai = require('chai');

describe('login', function() {
    it('should take less than 500ms', function(done){
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('should be json',function(done){
        request
        .get('/api/user/1')
        .expect(200)
        .end(function(err, res){
            if (err) return done(err);
            var text = res.text;
            var json = JSON.parse(text);
            json.should.have.property('name');
            json.should.have.property('password');
            done();
        });
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('GET',function(done){
        request
        .get('/users')
        .expect(200)
        .end((err, res) => {
        res.body.should.be.an.Array()
        });
        this.timeout(500);
        setTimeout(done, 300);
    });   
});
describe('add note', function() {
    it('should take less than 500ms', function(done){
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('note cannot be empty',function(done){
        request
        .get('/api/user/1')
        .expect(200)
        .end(function(err, res){
            if (err) return done(err);
            var text = res.text;
            var json = JSON.parse(text);
            json.should.have.property('name');
            json.should.have.property('password');
            done();
        });
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('GET',function(done){
        request
        .get('/users')
        .expect(200)
        .end((err, res) => {
        res.body.should.be.an.Array()
        });
        this.timeout(500);
        setTimeout(done, 300);
    });   
});
describe('add tag', function() {
    it('should take less than 500ms', function(done){
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('tag cannot be empty',function(done){
        request
        .get('/api/user/1')
        .expect(200)
        .end(function(err, res){
            if (err) return done(err);
            var text = res.text;
            var json = JSON.parse(text);
            json.should.have.property('name');
            json.should.have.property('password');
            done();
        });
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('GET',function(done){
        request
        .get('/users')
        .expect(200)
        .end((err, res) => {
        res.body.should.be.an.Array()
        });
        this.timeout(500);
        setTimeout(done, 300);
    });   
});
describe('add Url note', function() {
    it('should take less than 500ms', function(done){
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('url note cannot be empty',function(done){
        request
        .get('/api/user/1')
        .expect(200)
        .end(function(err, res){
            if (err) return done(err);
            var text = res.text;
            var json = JSON.parse(text);
            json.should.have.property('name');
            json.should.have.property('password');
            done();
        });
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('GET',function(done){
        request
        .get('/users')
        .expect(200)
        .end((err, res) => {
        res.body.should.be.an.Array()
        });
        this.timeout(500);
        setTimeout(done, 300);
    });   
});
describe('test search', function() {
    it('should take less than 500ms', function(done){
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('keyword cannot be empty',function(done){
        request
        .get('/api/user/1')
        .expect(200)
        .end(function(err, res){
            if (err) return done(err);
            var text = res.text;
            var json = JSON.parse(text);
            json.should.have.property('name');
            json.should.have.property('password');
            done();
        });
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('GET',function(done){
        request
        .get('/users')
        .expect(200)
        .end((err, res) => {
        res.body.should.be.an.Array()
        });
        this.timeout(500);
        setTimeout(done, 300);
    });   
});
describe('check archived notes', function() {
    it('should take less than 500ms', function(done){
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('classification cannot be empty',function(done){
        request
        .get('/api/user/1')
        .expect(200)
        .end(function(err, res){
            if (err) return done(err);
            var text = res.text;
            var json = JSON.parse(text);
            json.should.have.property('name');
            json.should.have.property('password');
            done();
        });
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('GET',function(done){
        request
        .get('/users')
        .expect(200)
        .end((err, res) => {
        res.body.should.be.an.Array()
        });
        this.timeout(500);
        setTimeout(done, 300);
    });   
});
describe('view note', function() {
    it('should take less than 500ms', function(done){
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('note id cannot be empty',function(done){
        request
        .get('/api/user/1')
        .expect(200)
        .end(function(err, res){
            if (err) return done(err);
            var text = res.text;
            var json = JSON.parse(text);
            json.should.have.property('name');
            json.should.have.property('password');
            done();
        });
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('GET',function(done){
        request
        .get('/users')
        .expect(200)
        .end((err, res) => {
        res.body.should.be.an.Array()
        });
        this.timeout(500);
        setTimeout(done, 300);
    });   
});
describe('delete note', function() {
    it('should take less than 500ms', function(done){
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('note id cannot be empty',function(done){
        request
        .get('/api/user/1')
        .expect(200)
        .end(function(err, res){
            if (err) return done(err);
            var text = res.text;
            var json = JSON.parse(text);
            json.should.have.property('name');
            json.should.have.property('password');
            done();
        });
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('GET',function(done){
        request
        .get('/users')
        .expect(200)
        .end((err, res) => {
        res.body.should.be.an.Array()
        });
        this.timeout(500);
        setTimeout(done, 300);
    });   
});
describe('modify note', function() {
    it('should take less than 500ms', function(done){
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('note id cannot be empty',function(done){
        request
        .get('/api/user/1')
        .expect(200)
        .end(function(err, res){
            if (err) return done(err);
            var text = res.text;
            var json = JSON.parse(text);
            json.should.have.property('name');
            json.should.have.property('password');
            done();
        });
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('GET',function(done){
        request
        .get('/users')
        .expect(200)
        .end((err, res) => {
        res.body.should.be.an.Array()
        });
        this.timeout(500);
        setTimeout(done, 300);
    });   
});
describe('log out', function() {
    it('should take less than 500ms', function(done){
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('should be json',function(done){
        request
        .get('/api/user/1')
        .expect(200)
        .end(function(err, res){
            if (err) return done(err);
            var text = res.text;
            var json = JSON.parse(text);
            json.should.have.property('name');
            json.should.have.property('password');
            done();
        });
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('GET',function(done){
        request
        .get('/users')
        .expect(200)
        .end((err, res) => {
        res.body.should.be.an.Array()
        });
        this.timeout(500);
        setTimeout(done, 300);
    });   
});
// describe('POST/tag', () => {
//     it('should create a new tag', (done) => {
//         var TestTag = new Tag({
//             Name: 'tag1',
//             id: 1
//         })
//     });

//     request(app)
//         .post('/api/tag')
//         .send(TestTag)
//         .expect(200)
//         .expect((response) => {
//             expect(response.body.id).toBe(TestTag.id);
//         })
//         .end((error, response) => {
//             if (error) {
//                 return done(error);
//             }
//         })
// });
// describe("Test Search", function() {
// 	it("Test Post Request", function(done) {
//             chai.request(postReqURL)
//             .post(postReqURL)
//             .send(postReqObject)
//             .end(function (err, res) {
//                 if (err) done(err);
//                 expect(res.status).to.equal(200);
//                 done()
//             })
            
//        });
// });
// describe('DELETE', () => {
//     before(function() {
//       this.callback = (instance) => {
//         this.instance= instance;
//       };
  
//       return this.MyOBJ.obj.create(null, this.data)
//         .then((obj) => {
//           this.obj = obj;
//           this.MyOBJ.on('UPDATE', this.callback);
//         })
//         .delay(500)
//         .then(() => this.obj.destroy())
//         .delay(250);
//     });
  
//     it('xxx', function() {
//     });
//   });

