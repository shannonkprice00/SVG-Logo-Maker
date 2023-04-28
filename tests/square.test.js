const Square = require('../lib/square');

describe('square', () => {
    it("should insert blue as the square's fill color", () => {
        const square = new Square();
        square.setColor('blue')
        expect(square.render()).toEqual('<rect x="45" y="15" width="200" height="200" fill="blue"/>');
    });
    it("should insert green as the square's fill color", () => {
        const square = new Square();
        square.setColor('green')
        expect(square.render()).toEqual('<rect x="45" y="15" width="200" height="200" fill="green"/>');
        });
    it("should insert pink as the square's fill color", () => {
        const square = new Square();
        square.setColor('pink')
        expect(square.render()).toEqual('<rect x="45" y="15" width="200" height="200" fill="pink"/>');
        });
});

describe('square', () => {
    it("should be a new instance of Square", () => {
        const square = new Square();
        expect(square).toBeInstanceOf(Square);
    });
});