const readline = require('readline');
const fs = require('fs');

var chart = require('chart');
var clear = require('clear');
var sleep = require('sleep');

const rl = readline.createInterface({
  input: fs.createReadStream('warAndPeace.txt')
});

rl.on('line', (line) => {
  rl.pause();
  createView(line).then(() => rl.resume());
});

function createView(line) {
  return new Promise((resolve, reject) => {
    let data = [];
    for (let i = 0; i < line.length; i++) {
      data.push(line[i].charCodeAt(0));
    }

    clear();
    console.log(chart(data, {
      width: 130,
      height: 30,
      pointChar: '█',
      negativePointChar: '░'
    }));
    sleep.sleep(1);
    resolve();
  })
}