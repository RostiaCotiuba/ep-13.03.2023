const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function processArray(numbers) {
  const negativeSquares = numbers
    .filter(number => number < 0)
    .map(number => Math.pow(number, 2));

  const positives = numbers.filter(number => number >= 0);

  const result = negativeSquares.concat(positives);

  return result;
}

rl.question('Введите числа через запятую: ', (input) => {
  const numbers = input.split(',').map(Number);

   if (numbers.length < 5 || numbers.length > 100) {
    console.log('Массив должен содержать от 5 до 100 элементов.');
  } else {
    const result = processArray(numbers);
    console.log(result);
  }

  rl.close();
});
