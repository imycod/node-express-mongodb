const fs = require('fs');
// const  readStr = fs.readFileSync('./.gitignore', 'utf8');
// console.log(readStr);
// const outputStr=`this is what we know about the avocado: \n${readStr} \nCreated by: ${process.env.USER} on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', outputStr);
// console.log('file written!');

// Non-blocking , asynchronous way 1.
fs.readFile('./txt/start.txt', 'utf8', (err, data1) => { // nodejs 先读文件 然后立即执行 2.的代码, 当文件彻底读完后才执行 callback函数
  if (err) {
    console.log(err);
  } else {
    const fileNameList = data1.split(',');
    console.log("fileNameList", fileNameList);
    fileNameList.forEach(fileName => {
      fs.readFile(`./txt/${fileName.trim()}.txt`, 'utf8', (err, data2) => {
        if (err) {
          console.log(err);
        } else {
          fs.readFile(`./txt/${data2.trim()}.txt`, 'utf8', (err, data3) => {
            if (err) return;
            fs.writeFile('./txt/final.txt', `${data1}\n${data2}\n${data3}`, (err) => {
              if (err) {
                console.log('writeFile', err);
              }
              console.log('your file has been written');
            });
            console.log("data3", data3);
          });
        }
      });
    });
  }
});
// 2.
console.log("will read file!");
