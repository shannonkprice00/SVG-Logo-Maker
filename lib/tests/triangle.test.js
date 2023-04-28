const Triangle = require('../triangle');

describe('triangle', () => {
    it('should equal render function return', () => {
    const triangle = new Triangle();
    triangle.setColor('yellow')
    expect(triangle.render()).toEqual('<polygon points="150,20 270,160 30,160" fill="yellow"/>');
    });
});