const {readFileSync,writeFileSync} = require("fs")
console.log('start');
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync('./content/result.txt','there we go result')
writeFileSync('./content/rename.js',`const app=() =>{}`)
console.log('done');
console.log('start the next one');