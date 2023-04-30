const { Circle, Square, Triangle } = require('./shapes.js')

test('If we do not pass a value for color shape, then use green as the default color', () => {
    const shape = new Circle()
    shape.setColor();
    expect(shape.render()).toEqual()
    
});