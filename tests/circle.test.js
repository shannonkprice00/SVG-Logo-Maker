const exp = require('constants');
const Circle = require('../lib/circle');

describe('circle', () => {
    it("should insert blue as the circle's fill color", () => {
        const circle = new Circle();
        circle.setColor('blue')
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue"/>');
    });
    it("should insert green as the circle's fill color", () => {
        const circle = new Circle();
        circle.setColor('green')
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green"/>');
    });
    it("should insert pink as the circle's fill color", () => {
        const circle = new Circle();
        circle.setColor('pink')
        expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="pink"/>');
     });
});

describe('circle', () => {
    it("should be a new instance of Circle", () => {
        const circle = new Circle();
        expect(circle).toBeInstanceOf(Circle);
    });
});