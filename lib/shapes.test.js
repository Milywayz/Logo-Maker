// Importing Classes
const { Circle, Square, Triangle } = require('./shapes.js')

// Test for Circle
test('Should set shape color to green if we set it to green', () => {
    let shape = new Circle()
    shape.setColor("green")
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />')
    
});

test('If we do not pass a value for shape color, then use blue as the default color', () => {
    let shape = new Circle()
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />')
    
});

// Test for Square
test('Should set shape color to green if we set it to green', () => {
    let shape = new Square()
    shape.setColor("green")
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />')
    
});

test('If we do not pass a value for shape color, then use blue as the default color', () => {
    let shape = new Square()
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />')
    
});

// Test for Triangle
test('Should set shape color to green if we set it to green', () => {
    let shape = new Triangle()
    shape.setColor("green")
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />')
    
});

test('If we do not pass a value for shape color, then use blue as the default color', () => {
    let shape = new Triangle()
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />')
    
});