class Shape{
    constructor(fill = "green"){

        this.fill = fill;

    }


}

class Circle extends Shape{

    constructor(fill, radius){

        super(fill)
        this.radius = radius
        this.pushUp = `<circle cx="150" cy="100" r="${this.radius}" fill="${this.fill}" />`

    }

    render(){


        return this.pushUp
    }

}
class Square extends Shape{

    constructor(fill,width,height){

        super(fill)
        this.width = width
        this.height = height
        this.pushUp = `<rect width="${this.width}%" height="${this.height}%" fill="${this.fill}" />`
    }

    render(){


        return this.pushUp
    }
    
}
class Triangle  extends Shape{

    constructor(fill){

        super(fill)
        this.pushUp = `<polygon points="50 150 100 50 150 150" fill="${this.fill}" />`
    }


    render(){


        return this.pushUp
    }
    
    
}

module.exports = [Shape,Circle,Square,Triangle]