class Svg {

    constructor(){

        this.shapeRender = ''
        this.textSet = ''

    }
    render(){

        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        ${this.shapeRender}

        ${this.textSet}

        </svg>`

    }
setShape(shape){

    this.shapeRender = shape.render()

}
setText(text,textColor){

    this.textSet = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>`
}
} 


module.exports = Svg;