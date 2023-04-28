const Shape = require('./shapes');
// inherits from class Shape
class Ellipse extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    render() {
        return `<ellipse cx="145" cy="100" rx="80" ry="60" fill="${this.shapeColor}"/>`
    };
}

module.exports = Ellipse;