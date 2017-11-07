//1 задание

//Если переменная a равна нулю, то выведите 'Верно!', иначе выведите 'Неверно!'. Проверьте работу скрипта при a, равном 1, 0, -3.

var a = +prompt("Number");
if (a === 0 ) {
    alert("Верно!")
} else{
    alert ("Неверно!")
};

//2 задание

//Если переменная a равна 'test', то выведите 'Верно!', иначе выведите 'Неверно!'. Проверьте работу скрипта при a, равном 'test', 'тест', 3.

var a = prompt("Enter test");
if (a === "test"){
    alert ("Верно!")
} else  {
    alert("Неверно!")
};

//3 задание

//Если переменная test равна true, то выведите 'Верно!', иначе выведите 'Неверно!'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.

//1 variant

var test = prompt("Enter true");
if (test = "true") {
    alert ("Верно!")
}else {
    alert ("Neverno!")
};

//2 variant
var a = true;
a === true ? console.log('Верно!') : console.log('Неверно!');


//4 задание

//Создайте переменные a и b. Просуммируйте их, а результат запишите в переменную result. Если result больше 5, то присвойте переменной result значение 5. Если же она меньше 5-ти - то умножьте ее на 10. Выведите на экран значение переменной result. Проверьте работу скрипта при a и b, равных 2 и 5, 3 и 1.

var a =2;                         //+prompt("enter 1st number");
var b =5;                          //+prompt("enter 2d number");

var result = a+b;
if (result >5){
    result=5
} else if (result <5){
    result *= 10
};
alert (result);

//5 задание
//Если переменная a равна нулю или равна двум, то поделите ее на 10, иначе прибавьте к ней 7 и выведите ее на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
var a = +prompt("enter number");

if (a === 2 || a === 0){
   a/=10
} else {
    a+=7
};
alert (a);

//6 задание
//Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите 'Неверно!'. Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

var a = +prompt ("Enter number ");
var b = +prompt ("Enter another number);

if (a<=1 && b>=3){
    alert (a+b);
}else {
    alert ("Neverno!")
};

//7 задание
// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-х и меньше 14-ти, то увеличьте a на 2,
// иначе прибавьте к a число 5. Выведите новое значение перенной на экран. Проверьте работу скрипта самостоятельно.

var a = +prompt ("Enter number ");
var b = +prompt ("Enter another");

if (a>2 && a<11||b>=6 && b<14){
    alert (a+=2)
}else {
    alert (a+=5)
};

//8 задание
// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1',
// то в переменную result запишем 'зима', если имеет значение '2' – 'лето' и так далее. Решите задачу через switch-case.

var num = prompt("Enter number");
switch (num){
    case 1:
        alert ("Зима");
    break
    case 2:
        alert ("Лето");
    break
    case 3:
        alert ("Osen");
    break
    case 4:
        alert ("Vesna");
    default:
        alert ('Wrong');
};

//9 задание
//Переменная lang может принимать три значения: 'ru', 'en', 'de'. Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке,
//если имеет значение 'en' – то на английском, если 'de' – на немецком. Решите задачу через 3 if, через switch-case и через многомерный массив

//1
var lang = prompt ("Enter ru, en or de");
var arr = [];

if (lang  === "ru"){
    arr.unshift("Ponedelnik","Vtornik","Sreda");
} else if (lang === "en"){
    arr.push("Monday","Tuesday","Wednesday");
} else if (lang === "de"){
    arr.push("Montag","Duenstag","Mittwoch");
}else
    alert ("Wrong!");
alert(arr);

//2
var lang = prompt ("Enter ru, en or de");
var arr = [
    ["Ponedelnik","Vtornik","Sreda"],
    ["Monday","Tuesday","Wednesday"],
    ["Montag","Duenstag","Mittwoch"]
];

switch (lang){
    case "ru":
        alert (arr[0]);
        break;
    case "en":
        alert (arr[1]);
        break;
    case "de":
        alert (arr[2]);
        break;
    default:
        alert ("wrong!!");
};