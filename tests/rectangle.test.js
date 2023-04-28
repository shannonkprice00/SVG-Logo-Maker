const Rectangle = require('../lib/rectangle');

describe('rectangle', () => {
    it("should insert blue as the rectangle's fill color", () => {
        const rectangle = new Rectangle();
        rectangle.setColor('blue');
        expect(rectangle.render()).toEqual('<rect x="30" y="25" rx="10" ry="10" width="250" height="150" fill="blue"/>');
    });
    it("should insert green as the rectangle's fill color", () => {
        const rectangle = new Rectangle();
        rectangle.setColor('green');
        expect(rectangle.render()).toEqual('<rect x="30" y="25" rx="10" ry="10" width="250" height="150" fill="green"/>');
    });
    it("should insert pink as the rectangle's fill color", () => {
        const rectangle = new Rectangle();
        rectangle.setColor('pink');
        expect(rectangle.render()).toEqual('<rect x="30" y="25" rx="10" ry="10" width="250" height="150" fill="pink"/>');
    });
});

describe('rectangle', () => {
    it("should be a new instance of Rectangle", () => {
        const rectangle = new Rectangle();
        expect(rectangle).toBeInstanceOf(Rectangle);
    });
});