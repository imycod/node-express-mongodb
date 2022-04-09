////////////////////////////////////////
// FILE
////////////////////////////////////////
// const fs = require('fs');
// const  readStr = fs.readFileSync('./.gitignore', 'utf8');
// console.log(readStr);
// const outputStr=`this is what we know about the avocado: \n${readStr} \nCreated by: ${process.env.USER} on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', outputStr);
// console.log('file written!');

// Non-blocking , asynchronous way 1.
// fs.readFile('./txt/start.txt', 'utf8', (err, data) => start(err, data));
//
// let fileNameList = [];
//
// function start(err, data1) {
//   if (err) {
//     console.log(err);
//   } else {
//     fileNameList = data1.split(',');
//     console.log("fileNameList", fileNameList);
//     fileNameList.forEach(fileName => {
//       fs.readFile(`./txt/${fileName.trim()}.txt`, 'utf8', (err, data2) => read2(err, data2));
//     });
//   }
// }
//
// let readData2 = "";
//
// function read2(err, data2) {
//   if (err) {
//     console.log(err);
//   } else {
//     readData2 = data2;
//     fs.readFile(`./txt/${data2.trim()}.txt`, 'utf8', (err, data3) => read3(err, data3));
//   }
// }
//
// function read3(err, data3) {
//   if (err) return;
//   fs.writeFile('./txt/final.txt', `${fileNameList}\n${readData2}\n${data3}`, (err) => {
//     if (err) {
//       console.log('writeFile', err);
//     }
//     console.log('your file has been written');
//   });
//   console.log("data3", data3);
// }

////////////////////////////////////////
// SERVER
////////////////////////////////////////
const http = require('http');
const url = require('url');
http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the overview');
  } else if (pathName === '/product') {
    res.end('This is the product');
  } else {
    // 如果不是overview 也不是 product 边界判断
    res.end('Page Not found');
  }
  // const parsedUrl = url.parse(req.url, true);
  //
  // res.writeHead(200, {'Content-Type': 'text/html'});
  // res.write('<h1>Hello World</h1>');
  // res.end();
}).listen(8080, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:8080/');
});

