# _Getter, Setter, Property Descriptor_

## _Literature_

---

- [Property getter and setter](https://javascript.info/property-accessors)

- [Getter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
- [Setter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set)

* [Property flags and descriptors](https://javascript.info/property-descriptors)

- [Object.defineProperty()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

* [Object.getOwnPropertyDescriptor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor)

## _Tasks_

---

- Write an object with field name.

```javascript
  const obj = {
    name: [], // ['name', length][]
    set name,
    get name,
  }

  console.log(obj.name)

  obj.name = 'Hovhannes, Sona';

  console.log(obj.name) // [['Hovhannes', 9], ['Sona', 4]]
```

- The input is object, which `keys` are student's names and `values` are `array` of their scores. Find the student with the best average score.

```javascript
getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80],
});
// OUTPUT => "John"

// John's avg = 90
// Bob's avg = 83.33
```

[2nd task's solution](https://github.com/ElenGhazaryann/Getter-Setter-Date/blob/main/2.bestAverageScore.js)
