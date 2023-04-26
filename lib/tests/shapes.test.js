const Shape = require('../shapes');

describe('shapes', () => {
    it('should be a new instance of Shape', () => {
    const newShape = new Shape();
    expect(newShape).toBeInstanceOf(Shape);
    });
});
