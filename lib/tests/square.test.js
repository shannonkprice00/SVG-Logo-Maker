const Square = require('../square');

describe('square', () => {
    it('should equal render function return', () => {
    const shape = new Square();
    shape.setColor('green')
    expect(shape.render()).toEqual('<rect x="45" y="15" width="200" height="200" fill="green"/>');
    });
});