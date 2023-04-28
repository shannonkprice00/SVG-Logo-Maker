const Triangle = require('../lib/triangle');

describe('triangle', () => {
    it("should insert blue as the triangle's fill color", () => {
        const triangle = new Triangle();
        triangle.setColor('blue')
        expect(triangle.render()).toEqual('<polygon points="150,20 270,160 30,160" fill="blue"/>');
    });
    it("should insert green as the triangle's fill color", () => {
        const triangle = new Triangle();
        triangle.setColor('green')
        expect(triangle.render()).toEqual('<polygon points="150,20 270,160 30,160" fill="green"/>');
    });
    it("should insert pink as the triangle's fill color", () => {
        const triangle = new Triangle();
        triangle.setColor('pink')
        expect(triangle.render()).toEqual('<polygon points="150,20 270,160 30,160" fill="pink"/>');
    });
});

describe('triangle', () => {
    it("should be a new instance of Triangle", () => {
        const triangle = new Triangle();
        expect(triangle).toBeInstanceOf(Triangle);
    });
});