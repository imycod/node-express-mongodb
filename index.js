const fs = require('fs');
const  readStr = fs.readFileSync('./.gitignore', 'utf8');

const outputStr=`this is what we know about the avocado: \n${readStr} \nCreated by: ${process.env.USER} on ${Date.now()}`;
fs.writeFileSync('./output.txt', outputStr);
console.log('file written!');

