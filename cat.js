const fs = require('fs');

module.exports = process.stdin.on('data', (data) => {
  var inputArr = data.toString().trim().split(" ");
  if (inputArr[0] === 'cat'){
    fs.readFile(`./${inputArr[1]}`, (err, text) => {
      if (err){
        throw err;
      }else{
        process.stdout.write(text)
        process.stdout.write('\nprompt > ');
      }
    })


  }

})
