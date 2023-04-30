// Svg Class for grabbing the inputs and replacing them into svg
class Svg {

    constructor(textColor = "green", text = "SVG") {

        this.shapeRender = ''
        this.textSet = ''
        this.textColor = textColor
        this.text = text

    }
    render() {

        return `<svg version="1.1"
        width="300" height="200"
        xmlns="http://www.w3.org/2000/svg">

        ${this.shapeRender}

        ${this.textSet}

        </svg>`

    }
    setShape(shape) {

        this.shapeRender = shape.render()

    }
    setText() {

        this.textSet = `<text x="150" y="125" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }


}


// exporting the Svg class
module.exports = Svg;