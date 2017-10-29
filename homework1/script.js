//task1
var str = "Have a good day!";
console.log(str);

//task2
var age = 10;
console.log(age);
age = undefined;
console.log(age);

//task3
var info= {
    name: 'Olya',
    age: 25
};
console.log(info.name);
console.log(info.age);
var name = info.name;
console.log(name);
delete info.name;
console.log(name);

//task4
var customArray = [10,20,30];
console.log(customArray);
customArray [0] = 0;
customArray [1] = 0;
customArray [2] = 0;
console.log(customArray);

//task5
var student = "Olya";
console.log(student);
student = 'Olga Ivanchenko';
console.log(student);

//task6
var complex = [];
complex [0] = 'My name is.';
complex [1] = '7';
complex [2] = null;
complex[4] = info;
console.log(complex[2]);

//task7
var complexObj ={};
complexObj.name = "Olya";
complexObj.age = 25;
complexObj.friends = ['Alex','Maks','Dima'];
complexObj.soclink = {
    facebook: "https://www.facebook.com/olya.iva.9408",
    google:"https://plus.google.com/u/0/113559860940079067110"
};
var all = `My name is ${complexObj.name}.I am ${complexObj.age} years old. I have a lot of friends, but the best one is 
${complexObj.friends[2]}.You can find me on facebook: ${complexObj.soclink.facebook} or google:${complexObj.soclink.google}`;
console.log(all);


var r;
var t = ++2;
console.log(r = t + 2--);