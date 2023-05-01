// Requiring information from classes and package.json
const { Circle, Square, Triangle } = require('./lib/shapes.js')
const inquirer = require("inquirer");
const Svg = require("./lib/svg.js");
const { writeFile } = require('fs');

// Prompts inputs for creating the shapes
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

        // Rendering in what shape you picked from shapes.js classes
        let shape;
        switch (initialPrompt.shape) {

            case "circle":
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
        // Rendering in all of the other input from initialPrompt
        if (initialPrompt.shapeColor !== ""){
            shape.setColor(initialPrompt.shapeColor)
        }
        const svg = new Svg()
        svg.setShape(shape)
        svg.setText(initialPrompt.text, initialPrompt.textColor)
        console.log("Generated logo.svg")

        // Creating the file of shape.svg
        writeFile("logo.svg", svg.render(), (err) => {
            if (err)
                console.log(err)
        })

        // catching any errors
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}


// To start the functions when you type npm start
function main() {

    startPrompt()

}
main();