## 1 задание

Определите результат и тип переменных в следующих случаях:

```javascript
var r = '9' + 0; // 90

var r = 9 + '0'; // 90

var r = 4 + 9; // 13

var r = null + 7; // 7

var r = '6' + null; // 6null

var r = '6' + []; //6

var r = '6' + undefined; // 6undefined
```

## 2 задание

Будет ли верным  выражение:

```javascript
2/3 + 1 + 1/3 == 2 //нет, ответ не может быть целым числом т.к суммирутся переодические дроби
```

## 3 задание

Определите результат в следующих случаях:

```javascript
var r;
var t = ++2;// (Инкремент/декремент можно применить только к переменной. Код 5++ даст ошибку. https://learn.javascript.ru/operators)
var u = 1++;
var w = 2--;

r = 6 && 0 && 7;// 0, (0 первое false)

r = -9 && -8;// -8, (последнее тру)

r = 6 && 0 && 7;//0, (первое фолс)

r = "string" && 0;//0, (первое фолс)

r = [] && {} && 7;//7, (все тру, выводит последнее тру)

r = [] || 7;// [], (выводит первое тру)

r = {} || 0;//{}, (первое тру и 0 это фолс)

r = false || true;// true

r = "2" > "3"; // false

r = "ab" <= "fg";//true (a меньше f,  b меньше g, послькуку f,g находится дальше в таблице ascii)

r = "2k" <= "8l";//true (2 меньше 8 и k меньше l)

r = "2" != 2;//false, (2=2)

r = "2" !== 2;//true, (string не равно 2)

r = t + 2; // error

r = t + 2--;// error

r = u - w;// error
```