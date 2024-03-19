const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

// Знайти суму та кількість позитивних елементів
const positiveSum = array.reduce((acc, curr) => curr > 0 ? acc + curr: acc, 0);
const positiveCount = array.filter(x => x > 0).length;

console.log("Сума позитивних елементів:", positiveSum);
console.log("Кількість позитивних елементів:", positiveCount);

//Знайти мінімальний елемент масиву та його порядковий номер
const minElement = Math.min(...array);
const minIndex = array.indexOf(minElement);

console.log("Мінімальний елемент:", minElement);
console.log("Його порядковий номер:", minIndex);

//Знайти максимальний елемент масиву та його порядковий номер
const maxElement = Math.max(...array);
const maxIndex = array.indexOf(maxElement);

console.log("Максимальний елемент:", maxElement);
console.log("Його порядковий номер:", maxIndex);

//Визначити кількість негативних елементів
const negativeCount = array.filter(x => x <0).length;

console.log("Кількість негативних елементів:", negativeCount);

// Знайти кількість непарних позитивних елементів
const oddPositiveCount = array.filter(x => x > 0 && x % 2 !== 0).length;
console.log("Кількість непарних позитивних елементів:", oddPositiveCount);

// Знайти кількість парних позитивних елементів
const evenPositiveCount = array.filter(x => 0 && x % 2 === 0).length;
console.log("Кількість парних позитивних елементів:", evenPositiveCount);

// Знайти суму парних позитивних елементів
const evenPositiveSum = array.filter(x => x > 0 && x % 2 === 0).reduce((acc, curr) => acc + curr, 0);
console.log("Сума парних позитивних елементів:", evenPositiveSum);

// Знайти суму непарних позитивних елементів
const oddPositiveSum = array.filter(x => x > 0 && x % 2 !== 0).reduce((acc, curr) => acc + curr, 0);
console.log("Сума непарних позитивних елементів:", oddPositiveSum);

// Знайти добуток позитивних елементів
const positiveProduct = array.filter(x => x > 0).reduce((acc, curr) => acc * curr, 1);
console.log("Добуток позитивних елементів:", positiveProduct);

// Знайти найбільший серед елементів масиву, а інші обнулимо
const maxElementValue = Math.max(...array);
const resultArray = array.map(x => x === maxElementValue ? x : 0);

console.log("Масив з обнуленими елементами, крім найбільшого:", resultArray);