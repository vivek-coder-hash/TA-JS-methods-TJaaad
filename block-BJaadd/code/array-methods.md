Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

parameters :  Specifies a string to separate each pair of adjacent elements of the array. The separator is converted to a string if necessary.

Return  : The join() method creates and returns a new string by concatenating all of the elements in an array .

Example 
``` js
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
```

- No mutation done
3. `flat`

The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
Parameter : The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

Return  : A new array with the sub-array elements concatenated into it.

example 
``` js
const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());
// expected output: [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];

console.log(arr2.flat(2));
// expected output: [0, 1, 2, [3, 4]]
```

No mutation

4. `push`

The push() method adds one or more elements to the end of an array and returns the new length of the array.

parameter : The element(s) to add to the end of the array.
return  :  The new length property of the object upon which the method was called.

example
``` js
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
```

Mutation done 


5. `indexOf`

The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present

parameter : Element to locate in the array.

example
``` js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
```

no mutation done

6. `lastIndexOf`

The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.



parameter :Element to locate in the array.

return  : The last index of the element in the array; -1 if not found.

example
``` js
const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

console.log(animals.lastIndexOf('Dodo'));
```

no mutation done


7. `includes`

The includes() method determines whether an array includes a certain element, returning true or false as appropriate.

parameter or syntax :  arr.includes(searchElement)
arr.includes(searchElement, fromIndex)

example 
``` js
[1, 2, 3].includes(2)      // true
[1, 2, 3].includes(4)      // false
[1, 2, 3].includes(3, 3)   // false
[1, 2, 3].includes(3, -1)  // true
[1, 2, NaN].includes(NaN)  // true
```

no mutation done
8. `reverse`

 The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

 parameter : none

 example
 ``` js
 const array1 = ['one', 'two', 'three'];
console.log('array1:', array1);
// expected output: "array1:" Array ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]
 ```

 yes mutate
9. `every`
The every() method tests whether all elements in the array pass the test implemented by the provided function.
parameter :  callback , element
return  : It returns a Boolean value.

example
``` js
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
```
no mutation

10. `shift`

return  : The shift() method removes the first element from an array and returns that element. 
parameter :none

``` js
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
```

yes it mutates 
11. `splice`

The splice() method changes the content of an array by removing existing elements and/or adding new elements.
parameter : start , number of delete elements


yes mutates
12. `find`

return  :  The find() method returns a value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.

parameters : callback , element
``` js
var array1 = [5, 12, 8, 130, 44];

var found = array1.find(function(element) {
  return element > 10;
});

console.log(found);
// expected output: 12
```

no mutation
13. `unshift`

The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

Array.prototype.unshift ( [ item1 [ , item2 [ , … ] ] ] )

var array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// expected output: 5

console.log(array1);
// expected output: Array [4, 5, 1, 2, 3]
14. `findIndex`

var array1 = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
  return element > 13;
}

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
15. `filter`

The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// Filte function return boolean statement . If true , added to output array  .If false , not added to output aaray 

example
``` js
var number =[1,2,3,4,5]
var items  =["rice" , "potato" ,"oil"]

var f_num=number.filter(function(el){
    return (el % 2 ==0)
})
console.log(f_num)

```
16. `flat`


17. `forEach`

The forEach() method executes a provided function once per array element.

Array.prototype.forEach ( callbackfn [ , thisArg ] )

```js
var number =[1,2,3,4,5]
number.forEach(function(element ,i ,e)       //for each element of array this function will be called once
{ 
   //console.log(element)

   console.log(element)
     
}
```
18. `map`

 Map function act as Foreach but it return an array

var number =["1","2","3","4","5"]
var items  =["rice" , "potato" ,"oil"]

var numbers =number.map(function(el){
    return el
    
})

console.log(numbers)

var long=items.map(function(l){
    return l.length
})

console.log(long)
19. `pop`

The pop() method removes the last element from an array and returns that element. This method changes the length of the array.

``` js
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"

console.log(plants);
// expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
```

mutates
20. `reduce`

//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

var number =[1,2,3,4,5]
var items  =["rice" , "potato" ,"oil"]

var red =number.reduce(function(acc,el){
    
    return acc+el

},10)
console.log(red)

var blue = items.reduce(function(acc,e){
    return acc+e+","
}, "")
console.log(blue)
21. `slice`

he slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified.

Array.prototype.slice (start, end)
22. `some`

The some() method tests whether some element in the array passes the test implemented by the provided function.

Array.prototype.some ( callbackfn [ , thisArg ] )

var array = [1, 2, 3, 4, 5];

var even = function(element) {
  // checks whether an element is even
  return element % 2 === 0;
};

console.log(array.some(even));
// expected output: true


no mutation
