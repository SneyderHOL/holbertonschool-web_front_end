function countPrimeNumbers () {
  const number = 100;
  let isPrime = true;
  let counter = 0;
  for (let i = 2; i <= number; i++) {
    isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      counter += 1;
    }
  }
  return counter;
}
const t0 = performance.now();
setTimeout(() => {
  for (let i = 0; i < 100; i++) {
    countPrimeNumbers();
  }
}, 0);
const t1 = performance.now();
console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`);
