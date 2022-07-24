const fs = require('fs');

// fs.writeFile('demo1.txt',"My name is Samiul Islam",function(err){
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successful");
//     }
// })

// fs.appendFile('demo1.txt',"I am 23 years old",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successful");
//     }
// })

// fs.readFile('demo1.txt', 'utf-8', (err, data) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// fs.rename('demo1.txt',"demo2.txt", (err) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successful");
//     }
// })

// fs.unlink('demo2.txt', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("successful");
//     }
// })

// fs.exists('demo2.txt', (result)=>{
//     if(result){
//         console.log("found");
//     }else{
//         console.log("not found");
//     }
// })

fs.existsSync('demo2.txt')


(result)=>{
    if(result){
        console.log("found");
    }else{
        console.log("not found");
    }
}