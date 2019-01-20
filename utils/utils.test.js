const utils  = require('./utils');

const expect = require('expect');

describe('utils', () => {
    it('should add two numbers', () => {

        let res = utils.add(33,11);

        expect(res).toBe(44).toBeA('number');

       // if(res !== 44) {
         //   throw new Error(`Expected 44, but got ${res}.`)
        // }
    });

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4,3,(sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        })
    });

    it('should square one number', () => {

        let res = utils.square(5);

        expect(res).toBe(25).toBeA('number');


        //if(res !== 25) {
       //     throw new Error(`Expected 25, but got ${res}.`)
     //   }
    });

    it('should async square x',(done)=> {
       utils.asyncSquare(5,(fin)=> {
          expect(fin).toBe(25).toBeA('number');
          done();
       });
    });
});




/*it('should expect some values', () => {
   expect({
       name: 'Aymen',
       age: 24,
       location: 'voronezh'
   }).toExclude({
       age: 25
   })
});*/

/*it('should set fitstname and second name', () => {
      res = utils.setName({},"Aymen Sakouhi");

      expect(res).toBeA('object').toInclude({firstname: "Aymen", secondname: "Sakouhi"});
   });*/
