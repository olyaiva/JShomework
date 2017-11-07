// //1.
// var age = prompt ("Enter age");
// if (age > 30){
//     console.log ("You are older than 30");
// } else {
//     console.log ("You are younger");
// }
//
// //2.
// var month = 10;
// switch (month) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("Зима");
//         break;
//
//     case 4:
//     case 5:
//     case 6:
//         console.log ("Весна");
//     break;
// };
//
//
// //3.While
// var number = 0;
//    while(number <= 100){
//        console.log(number);
//        number++
//    };

//4. Do/While

//5.!!!!!!!!!!!!!!!!


//6. For
// for(var number = 0;count < 100; count++; count+=2) {
//        if (count % 2 === 0){
//            console.log(number)
//        }
// };

??? фотка
   var array = [];
   for (var number = 0;  number <=100; number++ ) {
       if (number % 2 !== 0){
           array[number]=number;
       };
   };
console.log (array);


7.For/in

    var obj = {a:3, b: 4};
for (var prop in obj) {
    console.log (prop, obj[prop]);
};

8. break
continue

Функции
function Hello() {
    alert ("Hello world!");
}
Hello();

/////function ShowName(name){
/    console.log ("Hello", name);!!!!!!!!!!!!!!

/    ShowName()




function double (number) {
        var res = number * 2;
        console.log (res);
    }
var result = double(2);