const Rectangle = require('../rectangle');

describe('Rectangle', () => {
    it('should equal render function return', () => {
        const rectangle = new Rectangle();
        rectangle.setColor('pink');
        expect(rectangle.render()).toEqual('<rect x="30" y="25" rx="10" ry="10" width="250" height="150" fill="pink"/>');
    });
})