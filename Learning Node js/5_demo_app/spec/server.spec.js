var request = require('request');

// basic example
// describe('calc', ()=>{
//     it('should multiply 2 * 2 ', ()=>{
//         expect(2*2).toBe(4)
//     });
// });

describe('get messages', ()=>{
    
    it('should get 200 status code', (done)=>{
        request.get('http://localhost:3000/messages', (err, res)=>{
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
    
    it('should return a not empty list', (done)=>{
        request.get('http://localhost:3000/messages', (err, res)=>{
            expect(JSON.parse(res.body).length).toBeGreaterThan(0);
            done();
        });
    });

});
