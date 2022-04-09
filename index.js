const fs = require('fs');
// const  readStr = fs.readFileSync('./.gitignore', 'utf8');
// console.log(readStr);
// const outputStr=`this is what we know about the avocado: \n${readStr} \nCreated by: ${process.env.USER} on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', outputStr);
// console.log('file written!');

// Non-blocking , asynchronous way 1.
fs.readFile('./txt/start.txt', 'utf8', (err, data) => { // nodejs 先读文件 然后立即执行 2.的代码, 当文件彻底读完后才执行 callback函数
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});
// 2.
console.log("will read file!");
