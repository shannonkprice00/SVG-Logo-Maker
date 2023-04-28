const Ellipse = require('../Ellipse');

describe('ellipse', () => {
    it('should equal render function return', () => {
        const ellipse = new Ellipse();
        ellipse.setColor('green');
        expect(ellipse.render()).toEqual('<ellipse cx="145" cy="100" rx="80" ry="60" fill="green"/>');
    });
});