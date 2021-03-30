Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
parameters :None
return :The toUpperCase() method converts a string to uppercase letters.

Example 
``` js
let name ="vivek"
console.log(name.toUppercase())

```

The toUpperCase() method converts a string to uppercase letters.

   
3. `toLowerCase`
parameters :None
retrun : The toLowerCase() method converts a string to lowercase letters.

Example
``` js
var str = "Hello World!";
var res = str.toLowerCase();

```

The toLowerCase() method converts a string to lowercase letters.

4. `trim`

Parameters : None
return :  The trim() method removes whitespace from both sides of a string.

Example 
``` js
var str = "       Hello World!        ";
alert(str.trim());

```
The trim() method removes whitespace from both sides of a string.

5. `trimEnd`

parameters :None
return  : The trimEnd() method removes whitespace from the end of a string. 

Example
``` js
const greeting = '   Hello world!   ';
console.log(greeting.trimEnd());
```
 The trimEnd() method removes whitespace from the end of a string. 
6. `trimStart`

parameters :None
return : The trimStart() method removes whitespace from the beginning of a string.

Example 
``` js
const greeting = '   Hello world!   ';
console.log(greeting.trimStart());
```
7. `concat`
parameters : It take two parameters which has to be concate with given string
return :  The concat() method concatenates the string arguments to the calling string and returns a new string.

Example
``` js
const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"
```

The concat() method concatenates the string arguments to the calling string and returns a new string.


8. `endsWith`

syntax: string.endsWith(searchvalue, length)

return : The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

example
``` js

var str = "Hello world, welcome to the universe.";
var n = str.endsWith("universe.");
```


9. `includes`

syntax :  string.includes(searchvalue, start)
return : This method returns true if the string contains the characters, and false if not.

Example
 ``` js
 var str = "Hello world, welcome to the universe.";
var n = str.includes("world");
```

The includes() method determines whether a string contains the characters of a specified string.
10. `indexOf`

parameter : searchvalue	Required. The string to search for
start	Optional. Default 0. At which position to start the search

return : The indexOf() method returns the position of the first occurrence of a specified value in a string.

This method returns -1 if the value to search for never occurs.


example
``` js
var str = "Hello world, welcome to the universe.";
var n = str.indexOf("e");
console.log(n)  //  1

var n = str.indexOf("e" ,5);
console.log(n) //14


```


11. `lastIndexOf`
The lastIndexOf() method returns the position of the last occurrence of a specified value in a string.

synthax :  string.lastIndexOf(searchvalue, start)

A Number, representing the position where the specified searchvalue occurs for the last time, or -1 if it never occurs

example 
``` js
var str = "Hello planet earth, you are a great planet.";
  var n = str.lastIndexOf("planet");
```
12. `padEnd`

In JavaScript, padEnd() is a string method that is used to pad the end of a string with a specific string to a certain length. 

``` js
const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.'));
// expected output: "Breaded Mushrooms........"
```
13. `padStart`

The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.

example
``` js
abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
```
14. `repeat`

syntax : string.repeat(count)
parameter :  Required. The number of times the original string value should be repeated in the new string
``` js
var str = "Hello world!";
str.repeat(2);
```
15. `replace`

The replace() method searches a string for a specified value, or a regular expression, and returns a new string where the specified values are replaced.

``` js
var str = "Visit Microsoft!";
var res = str.replace("Microsoft", "W3Schools");
```
16. `slice`
syntax : str.slice(beginIndex[, endIndex])

The slice() method extracts parts of a string and returns the extracted parts in a new string.

''' js
let str1 = 'The morning is upon us.', // the length of str1 is 23.
    str2 = str1.slice(1, 8),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);
console.log(str2)  // OUTPUT: he morn
console.log(str3)  // OUTPUT: morning is upon u
console.log(str4)  // OUTPUT: is upon us.
console.log(str5)  // OUTPUT: ""

'''
17. `split`
The split() method is used to split a string into an array of substrings, and returns the new array.
If an empty string ("") is used as the separator, the string is split between each character.

``` js
var str = "How are you doing today?";
var res = str.split(" ");
```
18. `substring`


``` js
const str = 'Mozilla';

console.log(str.substring(1, 3));
// expected output: "oz"

console.log(str.substring(2));
// expected output: "zilla"
```
