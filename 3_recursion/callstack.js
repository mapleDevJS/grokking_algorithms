const printGreetings = (name) => console.log(`how are you, ${name}?`);

const printBye = () => console.log('ok bye!');

const greet = (name) => {
  console.log(`hello, ${name}!`);
  printGreetings(name);
  console.log('getting ready to say bye...');
  printBye();
};

greet('adit');