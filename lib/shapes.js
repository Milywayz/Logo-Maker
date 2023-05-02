// Shape Class that connects with Circle, Square, and Triangle classes
class Shape {
    constructor() {

       
        this.colorShape = "blue"

    }
    setColor(colorShape) {
        this.colorShape = colorShape
    }

}
// Circle class connected to shape and creates the shape
class Circle extends Shape {

    render(){

        return `<circle cx="150" cy="100" r="80" fill="${this.colorShape}" />`
    }
}
// Square class connected to shape and creates the shape
class Square extends Shape {

    render(){

        return `<rect width="100%" height="100%" fill="${this.colorShape}" />`
    }
}
// Triangle class connected to shape and creates the shape
class Triangle extends Shape {

    render(){

        return `<polygon points="150,10 50,150 250,150" fill="${this.colorShape}" />`
    }
    
}
// Exporting the Classes
module.exports = { Circle, Square, Triangle }