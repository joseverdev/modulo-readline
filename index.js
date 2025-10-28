const { askQuestion, closeQuestion } = require('./question');

const main = async () => {
  const name = await askQuestion('Cual es tu nombre? ');
  console.log(`Hola ${name} tu nombre es horrible!`);

  const age = await askQuestion('Cuantos anios tienes? ');
  console.log(`Wow, ${age} anios! Eres muy viejo ! Maniana te enterramos `);

  closeQuestion();
};

main();
