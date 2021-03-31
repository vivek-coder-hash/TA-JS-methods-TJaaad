// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101)

// - Find the last index of `9` in numbers
numbers.indexOf(9 , 5)

// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join(" ")

// - Add two new words in the strings array "called" and "sentance"
strings.push("called")
strings.push("sentence")

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(" ")
// - Remove the first word in the array (strings)

strings.shift()

// - Find all the words that contain 'is' use string method 'includes'

strings.includes("is")

// - Find all the words that contain 'is' use string method 'indexOf'

// - Check if all the numbers in numbers array are divisible by three use array method (every)
let everyreturn = numbers.every(function(el){
  return (el % 3 ==0)
})

console.log(everyreturn)

// -  Sort Array from smallest to largest

let sorted = numbers.sort(function(a,b){
  return a-b
})
console.log(sorted)

// - Remove the last word in strings

strings.pop()

// - Find largest number in numbers

let max= numbers[0]
for (i=0 ; i < numbers.length ; i++) {
  if (numbers[i]>max) {
    max= numbers[i]
  }
}
console.log(max)

// - Find longest string in strings

let allLength  = strings.map(function(el){
  return el.length
})
//console.log(allLength)
let long =allLength[0]

for (i=0 ; i <allLength.length  ; i++) {
    if (allLength[i]>long) {
      long = allLength[i]
    }
}
console.log(long)

// - Find all the even numbers

let even = numbers.filter(function(el) {
  return (el % 2 ==0)
})
console.log(even)

// - Find all the odd numbers

let odd = numbers.filter(function(el) {
  return (el % 2 >0)
})
console.log(odd)

// - Place a new word at the start of the array use (unshift)

strings.unshift("hello")

// - Make a subset of numbers array [18,9,7,11]

let subset = numbers.filter(function(el) {
  if (el == 18 || el ==9 || el ==7 || el==11) {
    return el
  }
})
console.log(subset)

// - Make a subset of strings array ['a','collection']
let sub = strings.filter(function(el) {
  if (el =="a" || el == "collection") {
    return el
  }
})
console.log(sub)

// - Replace 12 & 18 with 1221 and 1881

numbers[1] =1221
numbers[3]=1881


// - Replace words in strings array with the length of the word



// - Find the sum of the length of words using above question

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

// - Create new array with only first name

// - Create new array with all the full names (ex: "Joe Blogs")

// - Sort the array created above alphabetically

// - Create a new array that contains only user who has at least one vowel in the firstname.
