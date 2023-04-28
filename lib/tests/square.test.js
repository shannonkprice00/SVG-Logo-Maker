const Square = require('../square');

describe('square', () => {
    it('should equal render function return', () => {
    const square = new Square();
    square.setColor('green')
    expect(square.render()).toEqual('<rect x="45" y="15" width="200" height="200" fill="green"/>');
    });
});