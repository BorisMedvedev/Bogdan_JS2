"use strict";
//************************Объект это ссылочный тип данных **************
const mySity = {
	city: "Lezhnevo",
	popular: true,
	country: "RU",
	info: {
		ispopular: true,
		country: "USA",
	},
};

//Мутируем объект
mySity.age = 44;
mySity.popular = false;
console.log(mySity);
mySity.popular = true;
console.log(mySity.info.country);

//Если свойство переменная, то только так
const getName = "name";
mySity[getName] = "Boris";

//Удаление свойства бъекта
delete mySity.age;

console.log(mySity);

//===============
const newName = "Boris";
const postQty = 23;

const userProfile = {
	postQty,
	name: newName,
	hasSigedAgreement: false,
};

console.log(userProfile.name);
//===============================

//Глобальные объекты
//Пример ширина и высота экрана
const width = window.innerWidth;
const height = window.innerHeight;
const newglobal = globalThis; //общий

console.log(width);
console.log(height);
console.log(newglobal);

//Методы объектов  это свойство объекта, заначение которого функция
const myObj = {
	city: "Moscov",
	cityGgreeting: function () {
		console.log("Hello");
	},
};
// Сокращение=====
// const myObj = {
// 	city: "Moscov",
// 	cityGgreeting () {
// 		console.log("Hello");
// 	},
// };

myObj.cityGgreeting();

//********************JSON конвертация в объект и обратно ****************************
const myJson = {
	titel: "Title",
	userid: 1,
	id: 100,
};

// в JSON
let res = JSON.stringify(myJson);
console.log(res);
console.log(typeof res);
// из JSON
let res2 = JSON.parse(res);
console.log(res2);
console.log(typeof res2);

// ********************Мутация в JS ****************************************************

const a = 10;
let b = a;
b = 30;

console.log(a); //10
console.log(b); //30

const person = {
	age: 44,
	name: "Boris",
};

person.age = 22;
person.isAdult = true;

console.log(person);
console.log(person.age);
console.log(person.isAdult);

const person2 = person;
person2.age = 50;
console.log(person.age);

//Избежать мутации объека
//1 Если нет вложенных свойств
const person3 = Object.assign({}, person); //Это уже новый объект
person3.age = 55;
console.log(person.age);

//2 Если нет вложенных свойств
const person4 = { ...person }; //Это уже новый объект
console.log(person.name); //Не изменится

//3 Поможет и со вложенных свойств
const person5 = JSON.parse(JSON.stringify(person));
person5.age = 60;
person5.name = "Micha";
console.log(person);
console.log(person5);

//******************************** ФУНКЦИИ ***************************************

let a1 = 5;
let b1 = 10;
function sum(a, b) {
	const c = a + b;
	console.log(c);
	return c;
}
a1 = 20;
sum(a1, b1);

function myFn(a, b) {
	let c;
	a = a + 1;
	c = a + b;
	console.log(c);
	return c;
}

myFn(2, 2);
myFn(10, 10);

//передача значений по ссылке
const personOne = {
	name: "Bob",
	age: 10,
};
function increasePersonAge(pers) {
	pers.age += 1; //В нутрифункции не рекомендуется мутировать внешний объект
	pers.name = "Boris";
	return pers;
}
increasePersonAge(personOne);
console.log(personOne.age);
console.log(personOne.name);

//создание копии объекта
const personOne2 = {
	name: "Bob2",
	age: 25,
};

function increasePersonAge(pers) {
	const updatedPerson = { ...pers }; //Копия объекта personOne не изменится
	updatedPerson.age += 20;
	return updatedPerson;
}
const newIncreasePersonAge = increasePersonAge(personOne2);

console.log(personOne.age);
console.log(newIncreasePersonAge.age);

//********************************КОЛБЭК ФУНКЦИИ ***************************************

function printName() {
	console.log("Boris");
}
// setTimeout(printName, 2000); //*printName вызовется сама внутри другой функции

//Стрелочные функции
// setTimeout(() => {
// 	console.log("Отложенное сообщение");
// }, 3000);

//Сокращение если только один параметр*****************
(a) => {
	//Тело функции
};

(a, b) => a + b; //если только одно выражение, онам не явно возвращает значение

//Значение функции по умолчанию
function multByFactor(value, multiplier = 1) {
	return value * multiplier;
}
console.log(multByFactor(10, 2));
console.log(multByFactor(5));

//Пример 2
const newPosts = (post, addedAt = Date()) => ({
	//новый объект
	...post,
	addedAt,
});

const firstPost = {
	id: 1,
	autor: "Boris",
};
let resault = newPosts(firstPost);
console.log(resault);

//******************************** Обработка ошибок *************************************/

const fnWithError = () => {
	throw new Error("Some error");
};
// fnWithError();
console.log("Continue...");

// TRY / CATCH

try {
	// Выполнение блока кода
	// fnWithError();
} catch (error) {
	// Этот блок выполняется в случае возникновения ошибок в блоке try
	console.error(error);
	console.log(error.message);
}
console.log("Continue...");

/*********************************** Инструкции ****************************************/
// Выражение всегда возвращает значение
// Инструкция выполняет определенные действия

//Инструкции ПРИМЕРЫ
let z = 3; //1
const x = 6; //2
if (x > 5) {
	console.log("a is larger"); //3
}

for (let i = 0; i < 5; i++) {
	//4
	console.log(i);
}

// Выражение - Инструкции ****** ПРИМЕР
// a7 = a7 + 3;
// c7 = a7 + b7;
// d7 = "lplp" + "ljoijojoi";
// myFunction(c7, d7);
// console.log("Hey");

/*********************************** Массивы ****************************************/

const myArray = [1, 2, 3, 4, 5];
const myArray2 = new Array(1, 2, 3, 4, 5);

console.log(myArray === myArray2); //false // Эти массисы не равны, так как массив это объект а объект это ссылочный тип и они ссылаются на разные объекты в разных местах памяти
myArray[1] = false;

console.log(myArray2);
console.log(myArray[1]);

myArray.push(22, 33, 100); // добавляет в конец массива
myArray.unshift("1000"); // добавляет в начало массива
myArray.pop(); //Удаляет последний эл массива
myArray.shift(); // Удаляет первый эл массива

const myArray3 = myArray;
myArray3 === myArray; //true //ссылаются на один и тот же объект
console.log(myArray);
console.log(myArray.length);

// **** Методы массива == push, pop, shift, unshift, forEach, map == ****
const res66 = myArray.forEach((el) => {
	console.log(el + " str");
});
console.log(res66);
console.log(myArray);

// map
const myArray8 = [1, 2, 3];
console.log(myArray8);

// const newArray8 = myArray8.map((el) => el * 100);
// const newArray8 = myArray8.map((el) => {
// 	return el * 100;
// });
const newArray8 = myArray8.map(function (el) {
	return el * 100;
});

console.log(newArray8);
console.log(myArray8);

/******************************** Деструктуризация объектов ******************/
const userProfile2 = {
	name: "Boris",
	age: 23,
	pop: true,
};

const { name, age, pop } = userProfile2;
console.log(pop);

/******************************** Деструктуризация Массивово ******************/

const fruits = ["Apple", "Banana"];
const [fruitOne, fruitTwo] = fruits;
console.log(fruitOne);
console.log(fruitTwo);

/******************************** Деструктуризация в Функциях ******************/
const myObj8 = {
	name: "Boris",
	age: 44,
	profi: "ого себе",
};
const user = function ({ name, age, profi }) {
	if (age < 18) {
		return `User ${name}, тебе нет 18 лет`;
	}
	return `User ${name}, тебе уже ${age}, ${profi}`;
};
console.log(user(myObj8));

// ******************************** IF ***********************************************
const person6 = {
	age: 20,
};
if (!person6.name) {
	console.log("Имя не указано");
}
//IF в функциях
const sumPositiveNumber = (a, b) => {
	if (typeof a !== "number" || typeof b !== "number") {
		return "One of the arguments is not a number";
	}
	if (a <= 0 || b <= 0) {
		return "Numbers are not positive";
	}
	return a + b;
};
console.log(sumPositiveNumber("jbjhj", 20));

// ******************************** SWITCH ******************************************************
const month = 7;
switch (month) {
	case 12:
		console.log("Декабрь");
		break;
	case 2:
		console.log("Февраль");
		break;
	case 5:
		console.log("Май");
		break;
	case 7:
		console.log("Июль");
		break;
	case 1:
		console.log("Январь");
		break;

	default:
		console.log("нет такого месяца");
}

// ******************************** Тернарный оператор ******************************************************
// У тернарного оператора три операнда, и это выражение а выражение всегда возвращает значение

const value4 = 10;

value4 ? console.log("true") : console.log("false");

// пример два
function myFunction(value5, value6) {
	console.log("value5, value6");
}
function myFunction2() {
	console.log("myFunction2");
}
const value5 = 0;
const value6 = 25;
value5 && value6 ? myFunction(5, 6) : myFunction2();

// пример три
let value7 = 11;
console.log(value7 >= 0 ? value7 : -value7);

let value8 = -5;
let resault8 = value8 >= 0 ? value8 : -value8;
console.log(resault8);

// ******************************** Циклы *******************************************
// for
const myArray9 = [1, 2, 3, 4, 5, 6, 7];

const newArray10 = myArray9.map(function (el) {
	let res2 = el * 100;
	console.log(res2);
	return res2;
});

// forEach
myArray9.forEach((el, index) => {
	console.log(el, index);
});

// while
let i1 = 0;
while (i1 < 5) {
	console.log(i1);
	i1++;
}

// do while
do {
	console.log(i1);
	i1++;
} while (i1 < 5);

// for in для объекта
const myObj3 = {
	x: 10,
	y: true,
	z: "abc",
};

for (const key in myObj3) {
	console.log(key, myObj3[key]);
}
// x 10
// y true
// z abc

// forEach для объектов
Object.keys(myObj3).forEach((key) => {
	console.log(key, myObj3[key]);
});

Object.values(myObj3).forEach((value) => {
	console.log(value);
});

// for in для массива
for (const key in myArray9) {
	console.log(myArray9[key]);
}

// for off не для объектов
for (const iterator of myArray9) {
	console.log(iterator + " - s");
}

// ******************************** Модули *******************************************
// node js создаем папку cd Desktop команда mkdir modules
