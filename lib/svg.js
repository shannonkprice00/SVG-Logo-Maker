const Circle = require("./circle");
const Square = require("./square");
const Triangle = require("./triangle");

const chooseShape = (data) => {
  const shape = data.shape;
  switch (shape) {
    case "Circle":
      const newCircle = new Circle(data.text, data.textColor, data.shape, data.shapeColor);
      return newCircle.render();

    case "Square":
      const newSquare = new Square(data.text, data.textColor, data.shape, data.shapeColor);
      return newSquare.render();

    case "Triangle":
      const newTriangle = new Triangle(data.text, data.textColor, data.shape, data.shapeColor);
      return newTriangle.render();
  }
};

const generateSVG = (data) => {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
           
    ${chooseShape(data)}
           
    <text x="150" y="120" font-size="55" text-anchor="middle" fill="${data.textColor}">${data.text.toUpperCase()}</text>
           
    </svg>`
    
}

module.exports = generateSVG;
