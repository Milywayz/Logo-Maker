const { Circle, Square, Triangle, Shape } = require('./lib/shapes.js')
const inquirer = require("inquirer");
const fs = require("fs/promises")
const Svg = require("./lib/svg.js");
const { writeFile } = require('fs');

const startPrompt = async () => {

    try {
        const initialPrompt = await inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'shape',
                    message: 'What shape would you like to use?',
                    choices: ['circle', 'square', 'triangle'],

                },
                {
                    type: 'input',
                    name: 'text',
                    message: 'What text would you like to in your shape?(up to 3 Characters only)',
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'what text color you would like to use',
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'what shape color you would like to use',
                },
            ])

        let shape;
        // console.log(initialPrompt.shapeColor)
        switch (initialPrompt.shape) {

            case "circle":
                console.log(initialPrompt)
                shape = new Circle()

                break;
            case "square":
                shape = new Square()

                break;
            case "triangle":
                shape = new Triangle()

                break;

            default:
                throw Error("Error creating the SVG Shape")
        }
        shape.setColor(initialPrompt.shapeColor)
        console.log(shape)
        const svg = new Svg()
        svg.setShape(shape)
        svg.setText(initialPrompt.text,initialPrompt.textColor)
        console.log(svg.render())

        
        // fs.writeFile("shape.svg", svg.render())


    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}



function main() {

    startPrompt()

}

main();