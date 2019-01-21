const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');


describe('App', () => {
    let db = {
      saveUser: expect.createSpy()
    };
    app.__set__('db',db);


    it('should call the spy correctly', () =>  {
        let spy = expect.createSpy();
        spy('Andrew');
        expect(spy).toHaveBeenCalledWith('Andrew');
    });

    it('should call saveUser with user object', () => {
       let email = 'aymen@123.tn';
       let password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });

});

