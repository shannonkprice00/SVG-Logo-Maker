const Triangle = require('../triangle');

describe('triangle', () => {
    it('should equal render function return', () => {
    const shape = new Triangle();
    shape.setColor('yellow')
    expect(shape.render()).toEqual('<polygon points="150,20 270,160 30,160" fill="yellow"/>');
    });
});