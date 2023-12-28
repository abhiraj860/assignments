## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

<!-- const fs = require('fs')

function abhiRead() {
    return new Promise((resolve, reject)=>{
        fs.readFile("./abhi.txt", "utf-8", (err, data)=>{
            // if(err) reject(err)
            resolve(data)
        })
    })
}

async function read() {
    try{
        const value = await abhiRead()
        console.log(value)
    } catch (err){
        console.log(err)
    }
}
read()
console.log("Abhiraj Aditya")
console.log("Abhiraj Aditya")
console.log("Abhiraj Aditya")
console.log("Abhiraj Aditya")
console.log("Abhiraj Aditya") -->

