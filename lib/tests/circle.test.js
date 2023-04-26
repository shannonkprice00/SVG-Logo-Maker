const Circle = require('../circle');

describe('circle', () => {
    it('should equal render function return ', () => {
    const shape = new Circle();
    shape.setColor('blue')
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
    });
});