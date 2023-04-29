class Shape {
    constructor(color = "green", width = 50, height = 50) {

        this.color = color;
        this.width = width
        this.height = height
        this.type = "shape"

    }
    render() {
        console.log(this.type)
        if (this.type === "circle") {

            return `<${this.type} cx="${this.width}" cy="${this.height}" r="${this.radius}" fill="${this.color}" />`
        }
        if (this.type === "triangle") {

            return `<polygon points="50 150 100 50 150 150" fill="${this.color}" />`
        }
        if (this.type === "square") {

            return `<rect width="${this.width}%" height="${this.height}%" fill="${this.color}" />`
        }

    }

}

class Circle extends Shape {

    constructor(color, radius) {

        super(color, width, height, type)
        this.radius = radius
        super.width = width
        super.height = height
        super.type = "circle"
        // this.pushUp = `<circle cx="150" cy="100" r="${this.radius}" fill="${this.color}" />`


    }



}
class Square extends Shape {

    constructor(color, width, height) {

        super(color, width, height, type)
        this.width = width
        this.height = height
        super.type = "square"

    }



}
class Triangle extends Shape {

    constructor(color, width, height) {

        super(color, width, height, type)
        this.color = color
        this.width = width
        this.height = height
        super.type = "triangle"
        // this.pushUp = `<polygon points="50 150 100 50 150 150" fill="${this.color}" />`
    }





}

module.exports = { Circle, Square, Triangle }