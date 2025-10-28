const readline = require('readline');
// import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

const closeQuestion = () => {
  rl.close();
};

// export { askQuestion, closeQuestion };
module.exports = { askQuestion, closeQuestion };
