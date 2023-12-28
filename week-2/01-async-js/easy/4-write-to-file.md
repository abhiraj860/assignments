## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

<!-- const fs = require('fs')

function readFile() {
    return new Promise((resolve, reject)=>{
        let p = "AbAditya hello world and this is the best"
        fs.writeFile("./abhi.txt", p, (err)=>{
            if(err) throw err
        })
    })
}

async function reader() {
    const b = await readFile()
    console.log(b)
}

reader()
console.log("Abhiraj Aditya")
console.log("Abhiraj Aditya1")
console.log("Abhiraj Aditya2") -->
