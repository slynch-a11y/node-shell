module.exports = process.stdin.on('data', (data) => {
  if (data.toString().trim() === 'pwd'){
    const pwd = process.cwd();
    process.stdout.write('You typed: ' + pwd);

  }
  process.stdout.write('\nprompt > ');
})

