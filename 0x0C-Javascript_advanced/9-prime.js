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
countPrimeNumbers();
const t1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`);
