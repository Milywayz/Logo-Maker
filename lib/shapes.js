class Shape{



}

class Circle extends Shape{

    render(){


        return `<circle cx="150" cy="100" r="80" fill="green" />`
    }

}
class Square extends Shape{


    render(){


        return `<rect width="100%" height="100%" fill="red" />`
    }
    
}
class Triangle  extends Shape{


    render(){


        return `<polygon points="50 150 100 50 150 150" />`
    }
    
    
}