const Ellipse = require('../lib/ellipse');

describe('ellipse', () => {
    it("should insert blue as the ellipse's fill color", () => {
        const ellipse = new Ellipse();
        ellipse.setColor('blue');
        expect(ellipse.render()).toEqual('<ellipse cx="145" cy="100" rx="80" ry="60" fill="blue"/>');
    });
    it("should insert green as the ellipse's fill color", () => {
        const ellipse = new Ellipse();
        ellipse.setColor('green');
        expect(ellipse.render()).toEqual('<ellipse cx="145" cy="100" rx="80" ry="60" fill="green"/>');
    });
    it("should insert pink as the ellipse's fill color", () => {
        const ellipse = new Ellipse();
        ellipse.setColor('pink');
        expect(ellipse.render()).toEqual('<ellipse cx="145" cy="100" rx="80" ry="60" fill="pink"/>');
    });
});

describe('ellipse', () => {
    it("should be a new instance of Ellipse", () => {
        const ellipse = new Ellipse();
        expect(ellipse).toBeInstanceOf(Ellipse);
    });
});