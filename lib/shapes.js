class Shape {
    constructor() {

       
        this.colorShape = ""

    }
    setColor(colorShape) {
        this.colorShape = colorShape
    }

}

class Circle extends Shape {

    

    render(){

        return `<circle cx="150" cy="100" r="80" fill="${this.colorShape}" />`
    }




}
class Square extends Shape {


    
    render(){

        return `<rect width="100%" height="100%" fill="${this.colorShape}" />`
    }

    
}
class Triangle extends Shape {

    render(){

        return `<polygon points="50 150 100 50 150 150" fill="${this.colorShape}" />`
    }

    


}

module.exports = { Circle, Square, Triangle }