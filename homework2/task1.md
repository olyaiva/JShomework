## 1

```javascript
var t = {
    y: 9
};
var number = t.y; // 9
number += 5; //14 (number=number+5)
console.log(t.y, number); // 9,14
```

## 2

```javascript
var t = {
    y: [1, 3, 5, 7]
};
var number = t.y[2];//5 (0,1,2..)

for(var i = 0, len = t.y.length; i < len; i++) {
    t.y[i]++;
}
console.log(number); // 5
```

## 3

    ```javascript
var t = 9;
var obj = {
    number: t
}; //obj.number=9
obj.number++;//9+1=10
console.log(obj.number, t);//10,9
```

## 4

```javascript
var object1 = {
    str: {
        name: "L"
    }
};

var obj = {
    number: 67
};

object1.str.number = obj.number;// 67
obj.number++;//68 

var str = object1.str;//{name:'L',number:67}

object1.str.name = "Kolya"; //name=Kolya

console.log(str, object1.str.number); // {name: "Kolya", number: 67}, 67
```

## 5

```javascript
var object1 = {
    obj: {
        number: 0
    }
};

var object2 = {
    str: "Kolya"
};

object2.str.number = object2.str.number;//undefined

object2.str.number++;

console.log(object2.str.number);//undefined
```
