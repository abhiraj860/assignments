## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```

<!-- const fs = require('fs')

function readAndWrite() {
    return new Promise((resolve)=>{
        fs.readFile("./abhi.txt", "utf-8", (err, data)=>{
            let getData = data
            let arr = getData.split(" ")
            let ans = arr[0]
            for(let i = 1; i < arr.length; i++) {
                if(arr[i] == "") continue
                ans += " "
                ans += arr[i]
            } 
            resolve(ans)
        }) 
    })
}

async function writeFun() {
    let b = await readAndWrite()
    fs.writeFile("./abhi.txt", b,(err)=>{if(err) console.log(err)})
}

writeFun() -->