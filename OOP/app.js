class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    throw new Error('Method not implemented.');
  }
}

class Rectangle extends Shape {
  displayFormula() {
    console.log(`Width x Height = Area of a Rectangle`);
  }
  calculateArea() {
    return `Area of Rectangle: ${this.width} x ${this.height} = ${
      this.width * this.height
    }`;
  }
}

const shape1 = new Rectangle(5, 10);
console.log(shape1.displayFormula());
console.log(shape1.calculateArea());
