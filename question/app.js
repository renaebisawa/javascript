let name = 'ごっしー';
let age =28
let greet = '私のニックネームは' + name + 'です。年齢は'+age+'歳です。';
console.log(greet);

const languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];

const [js, , , python] = languages;

console.log(`私の好きな言語は${js}です。次は${python}を勉強してみたいです。`);

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age);

let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];

console.log(playerList[1].favorites[1]);

const totalAge = playerList.reduce((sum, player) => sum + player.age, 0);

const averageAge = totalAge / playerList.length;

console.log(averageAge);

function sayHello() {
  console.log('Hello');
}

sayHello();

let sayWorld = function() {
  console.log('World');
};

sayWorld();

let updatedUser = { ...user, birthday: '2000-09-27' };

updatedUser.sayHello = function() {
  console.log('Hello!');
};

updatedUser.sayHello();

console.log(updatedUser);

let calc = {};

calc.add = function(x, y) {
  console.log(x + y);
};

calc.subtract = function(x, y) {
  console.log(x - y);
};

calc.multiply = function(x, y) {
  console.log(x * y);
};

calc.divide = function(x, y) {
  console.log(x / y);
};

calc.add(3, 4);
calc.subtract(15, 5);
calc.multiply(7, 7);
calc.divide(25, 5);

function remainder(x, y) {
  return x % y;
}

let result = remainder(5, 3);

console.log(`${5} を ${3} で割った余りは ${result} です。`);

function foo() {
  let x = 1;
}

// 変数 x は関数 foo のスコープ内で定義されています。
// そのため、関数の外で x を参照しようとすると「x is not defined」というエラーが発生します。

console.log(Math.floor(Math.random() * 10));

setTimeout(() => {
  console.log('Hello World!');
}, 3000);

let num = -5;

// 条件に基づいてコンソールにメッセージを出力します。
if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else {
  console.log('num is 0');
}

let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers);

let mixed = [4, '2', 5, '8', '9', 0, 1];


for (let i = 0; i < mixed.length; i++) {
  let element = mixed[i];
  
  if (typeof element === 'number') {
    console.log(`Element ${element} is a number`);
  }
  
  else if (typeof element === 'string') {
    console.log(`Element "${element}" is a string`);
  }
}