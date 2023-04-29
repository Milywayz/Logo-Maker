class Shape {
    constructor(colorShape = "green") {

        this.colorShape = colorShape;
        this.pushUp = ""

    }
    setColor(colorShape) {
        this.pushUp = this.pushUp.replace(/fill="[^"]*"/, `fill="${colorShape}"`)
    }

}

class Circle extends Shape {

    constructor(colorShape = "green") {

        super()
        this.pushUp = `<circle cx="150" cy="100" r="80" fill="${colorShape}" />`
    }

    render(){

        return this.pushUp
    }



}
class Square extends Shape {

    constructor(colorShape = "green") {

        super()
        this.pushUp = `<rect width="100%" height="100%" fill="${colorShape}" />`
      
    }

    render(){

        return this.pushUp
    }

}
class Triangle extends Shape {

    constructor(colorShape = "green") {

        super()
        this.pushUp = `<polygon points="50 150 100 50 150 150" fill="${colorShape}" />`
    }


    render(){

        return this.pushUp
    }


}

module.exports = { Circle, Square, Triangle }