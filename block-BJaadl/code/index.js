let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

 function findLongestWord(array) {
   return [...array].sort((a,b) => a.length - b.length).pop()
 }


 let longstring  = [...strings].sort(function(a,b){
  return a.length-b.length
})
longstring.pop()
// - Convert the above array "words" into an array of length of word instead of word.

let wordlength  = words.map(function(el) {
  return el.length
})

// - Create a new array that only contains word with atleast one vowel.

let vowelword  = words.filter(function(el) {
   if (el.toLowerCase().includes("a") || el.toLowerCase().includes("e")|| el.toLowerCase().includes("i") || el.toLowerCase().includes("o")|| el.toLowerCase().includes("u")) {
       return el
   }   
})

// - Find the index of the word "rhythm"

words.indexOf("rhythm")

// - Create a new array that contians words not starting with vowel.

let vowelstart  = words.filter(function(el) {
  if (el.toLowerCase().startsWith("a") || el.toLowerCase().startsWith("e")|| el.toLowerCase().startsWith("i") || el.toLowerCase().startsWith("o")|| el.toLowerCase().startsWith("u")) {
      return false
  } 
  
  else {return el}
})

// - Create a new array that contianse words not ending with vowel

let vowelend  = words.filter(function(el) {
  if (el.toLowerCase().endsWith("a") || el.toLowerCase().endsWith("e")|| el.toLowerCase().endsWith("i") || el.toLowerCase().endsWith("o")|| el.toLowerCase().endsWith("u")) {
      return false
  } 
  
  else {return el}
})

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

let sumArray  = numbers.reduce(function(acc,el) {
    return acc+el
},0)

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

let multiplethree  = numbers.filter(function(el) {
    return el % 3 ==0
})

// - Create a new array that contains only even numbers
let even = numbers.filter(function(el) {
  return el %2 ==0
})

// - Create  a new array that contains only odd numbers.

let odd = numbers.filter(function(el) {
  return el %2 !=0
})

// - Create a new array that should have true for even number and false for odd numbers.

let evennumber = numbers.map(function(el) {
  if (el %2 ==0) {
    return true
  }

  else {
    return false
  }
})

// - Sort the above number in assending order.

let arrange  = [...numbers].sort(function(a,b){
  return a-b
})

// - Does sort mutate the original array?
yes

// - Find the sum of the numbers in the array.

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(input) {
  let add =0
  for (i=0 ; i < input.length ;i++) {
    add =add+input[i]
  }

  let avg  = add/(input.length)
  console.log(avg)
}
averageNumbers(numbers)



let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.


let wordlength  = words.map(function(el) {
  return el.length
})

function averageWordLength(input) {
  let add =0
  for (i=0 ; i < input.length ;i++) {
    add =add+input[i]
  }

  let avg  = add/(input.length)
  console.log(avg)

}
averageWordLength(wordlength)
