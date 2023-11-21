// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// readline.question(`Welcome to Holberton School, what is your name?\n`, name => {
//     console.log(`Your name is: ${name}`);
//     readline.close();
// });
// readline.on('close', () => {
//     console.log('This important software is now closing')
// });
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name !== null) {
    process.stdout.write(`Your name is: ${name}`);
  }
});
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
