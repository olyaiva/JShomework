##1 задание

Что будет в результате следующих операций:

```javascript
var one = "1" + 2 + 3; // 123
var two = 4 + false + "5" + 6;//"456"
var three = 7 + true + 6 + "8";//148
var four = false + true;//1
```

## 2 задание

Каким будет результат следующих выражений:

```javascript
var t = 0;
var h = 8;

t && h && console.log(9);//0 (первое фолс)
```

## 3 задание

Каким будет результат следующих выражений:

```javascript
var pr = 9;
var g = 0;

(g || pr || 10 || false) && console.log(9);//9
```

## 4 задание

Каким будет результат следующих выражений:

```javascript
var i = '1';
var j = 8;
var m = 7;

(m - j) == j; //false
(m - j) === j;//false

(m - 6) && j && console.log('Hi');//"hi"
```

## 5 задание

Каким будет результат следующих выражений:

```javascript
var obj = {
    h: 0,
    i: 'hello'
}

var phrase = obj.i;//hello
delete obj.i;

console.log(phrase);//hello
```

## 6 задание

Каким будет результат следующих выражений:

```javascript
var obj = {
    h: [1,2,3],
    i: {
     y: 9
    }
}

var num = obj.i.y;//9

obj.i.y = obj.i.y + 1;//10

console.log(num, obj.i.y);//9,10
```

## 7 задание

Каким будет результат следующих выражений:

```javascript
var obj = {
    h: [1,2,3],
    i: {
     y: 9
    }
}

var arr = obj.h;//[123]

obj.h[1] = 9;[193]

console.log(arr[1], obj.h[1]);9,9
```
