const { Circle, Square, Triangle } = require('./shapes.js')


test('If we do not pass a value for text color, then use green as the default color', () => {
    let shape = new Circle()
    shape.setColor("green")
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />')
    
});

test('If we do not pass a value for text color, then use green as the default color', () => {
    let shape = new Circle()
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green" />')
    
});