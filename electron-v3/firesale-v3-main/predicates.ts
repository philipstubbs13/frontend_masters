export type Circle = { kind: 'circle'; radius: number };

export type Square = { kind: 'square'; sideLength: number };

export type Triangle = { kind: 'triangle'; base: number; height: number };

// Type predicate to check if an object is a Circle
export const isCircle = (shape: any): shape is Circle => {
  return shape && shape.kind === 'circle' && typeof shape.radius === 'number';
}

// Type predicate to check if an object is a Square
export const isSquare = (shape: any): shape is Square => {
    return shape && shape.kind === 'square' && typeof shape.sideLength === 'number';
  }
  
// Type predicate to check if an object is a Triangle
export const isTriangle = (shape: any): shape is Triangle => {
    return shape && shape.kind === 'triangle' && typeof shape.base === 'number' && typeof shape.height === 'number';
  }

const myShape: any = { kind: 'circle', radius: 5 };

if (isCircle(myShape)) {
  // TypeScript knows it's a Circle!
  console.log(`Area of the circle: ${Math.PI * myShape.radius ** 2}`);
} else if (isSquare(myShape)) {
  // TypeScript knows it's a Square!
  console.log(`Area of the square: ${myShape.sideLength ** 2}`);
} else if (isTriangle(myShape)) {
  // TypeScript knows it's a Triangle!
  console.log(`Area of the triangle: ${(myShape.base * myShape.height) / 2}`);
} else {
  console.log(`Unknown shape!`);
}