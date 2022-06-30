const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

for ( let i = 0; i <= 10; i++){
  console.log(i);
}

console.log("----------------------------------------------------------")

let i = 0;
while (i <= 10){
  console.log(i)
  i++
}

console.log("----------------------------------------------------------")

let j = 0;
do {
  console.log(j)
  j++
}
while (j <= 10)

console.log("----------------------------------------------------------")

for (let i = 10; i >= 0; i--){
  console.log(i)
}

console.log("----------------------------------------------------------")

let k = 10
while (k >= 0){
  console.log(k)
  k--
}

console.log("----------------------------------------------------------")

let f = 10;
do {
  console.log(f)
  f--
}
while (f >= 0)

console.log("----------------------------------------------------------")

let n = 10;
for (let i = 0; i <= n; i ++){
  console.log(i);
}

console.log("----------------------------------------------------------")


string = '#'
for (let i = 1; i <= 7; i++){
  console.log(string);
  string += '#';
}

console.log("----------------------------------------------------------")

for (let i = 0; i <= 10; i++){
  console.log(`${i} * ${i} = ${i*i}`)
}

console.log("----------------------------------------------------------")


for (let i = 0; i <= 10; i++){
  console.log(`${i}  ${i*i}  ${i*i*i}`)
}

console.log("----------------------------------------------------------")

for (let i = 1; i <= 100; i++){
  if (i % 2 !== 0){
    continue
  }
  console.log(i);
}

console.log("----------------------------------------------------------")

for (let i = 1; i <= 100; i+=2){
  console.log(i);
}

console.log("----------------------------------------------------------")

const primes = []
for (let i = 2; i < 100; i++){

  let isPrime = true
  for(let j = 2; j < i; j++)
  {
    if (i % j == 0){
      isPrime = false;
      break;
    }
  }
  if(isPrime) primes.push(i);
}

console.log(primes)
console.log("----------------------------------------------------------")

let sum = 0;
for (let i = 0; i <= 100; i++){
  sum += i
}
console.log(sum);

console.log("----------------------------------------------------------")
let sumEvens = 0;
let sumOdds = 0;

for (let i = 0; i <= 100; i++){
  if (i % 2 === 0){
    sumEvens += i;
  }else{
    sumOdds += i;
  }
}
console.log(sumEvens, sumOdds);
console.log("----------------------------------------------------------")

const arrayEvenOdd = [];
arrayEvenOdd.push(sumEvens);
arrayEvenOdd.push(sumOdds);
console.log(arrayEvenOdd);

console.log("----------------------------------------------------------")

const arrayRandom = [];

for (let i = 1; i <= 5; i++){
  arrayRandom.push(Math.floor(Math.random() * 100) + 1);
}
console.log(arrayRandom)

console.log("----------------------------------------------------------")

const arrayRandomUnique = [];

while(arrayRandomUnique.length < 5){
  num = Math.floor(Math.random() * 100) + 1;
  if(arrayRandomUnique.indexOf(num) === -1) arrayRandomUnique.push(num);
}

console.log(arrayRandomUnique);
console.log("----------------------------------------------------------")
console.log("----------------------------------------------------------")
console.log("----------------------------------------------------------")
console.log("----------------------------------------------------------")
console.log("----------------------------------------------------------")
