const Shape = require('./shapes');
// inherits from class Shape
class Rectangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render() {
        return `<rect x="30" y="25" rx="10" ry="10" width="250" height="150" fill="${this.shapeColor}"/>`
    };
}

module.exports = Rectangle;