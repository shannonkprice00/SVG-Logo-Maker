const Shape = require('./shapes');
// inherits from class Shape
class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor);
    }
    render() {
        return `<polygon points="150,20 270,160 30,160" fill="${this.shapeColor}"/>`
    };
}

module.exports = Triangle;