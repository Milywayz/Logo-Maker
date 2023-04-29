const { Circle, Square, Triangle, Shape } = require('./lib/shapes.js')
const inquirer = require("inquirer");
const fs = require("fs/promises")

const startPrompt = async () => {
    let result;
    try {
      const initialPrompt =  await inquirer
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
                    // validate:()=>
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
        

            console.log(initialPrompt.shapeColor)
            switch (initialPrompt.shape) {
                case "circle":
                    result = new Circle(initialPrompt.shapeColor, 100)
                    
                    break;
                case "square":
                    result = new Square(initialPrompt.shapeColor, 50, 50)

                    break;
                case "triangle":
                    result = new Triangle(initialPrompt.shapeColor, 50, 50)

                    break;
            
                default:
                    throw Error("Error creating the SVG Shape")
            }
        
    } catch (err) {
       console.log(err) 
       process.exit(1)
    }
}



function main(){

    startPrompt()

}

main();