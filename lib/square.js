const Shape = require('./shapes');
// inherits from class Shape
class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    render() {
        return `<rect x="45" y="15" width="200" height="200" fill="${this.shapeColor}"/>`
    };
}

module.exports = Square;