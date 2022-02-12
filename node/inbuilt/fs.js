var fs= require('fs');

// fs.writeFile('MyCode.txt' , '2.My code file' , (err)=>{
//     if(err) throw err;
//     console.log("file is created")
// })


// fs.appendFile('MyCode1.txt' , 'My code file \n' ,(err)=>{
//     if(err) throw err;
//     console.log('My first add')
// })


// fs.readFile("MyCode1.txt" ,'utf-8' ,(err,data)=>{
//     if(err) throw err;
//     console.log(data)
// })

// fs.rename("MyCode1.txt" , "MyTextFile.txt" ,(er)=>{
//     if(er) throw er;
//     console.log("file renamed")
// })
fs.unlink( "MyTextFile.txt" ,(er)=>{
    if(er) throw er;
    console.log("file deleted")
})