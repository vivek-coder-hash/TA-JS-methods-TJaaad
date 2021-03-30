let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end
fruits.push("papaya")

// Remove the last element from fruits array
fruits.pop()

// Log the current length of fruits array
console.log(fruits)

// Remove the first element from fruits and log the value of fruits (use delete arr[0])
delete fruits[0]

// Log the element on index 0 and 1
console.log(fruits[0] , fruits[1])

// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)
fruits.shift()


// Add a new element to the start ('Guava') and shift the index of all other to one higher value
fruits.unshift("Guava")
// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value
fruits.unshift("Dragon fruit")

// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not
fruits.includes("Dragon fruit" , 0)
fruits.includes("Guava" , 0)


// Update the value of index 1 to `Pears`

fruits[1] ="Pears"

// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)
fruits.splice(1,0 , "Kiwi" , "Lemon")

// Remove (slice) all the element from index 5
fruits.slice(5)

// Create another array named moreFruits with values ['Berries', 'Melons']
let moreFruits = ['Berries', 'Melons']

// Concat moreFruits into fruits array (re-assign so the value gets updated)
console.log(fruits.concat(moreFruits))

// Log the name of all fruit in console
for (i=0 ; i<fruits.concat(moreFruits).length ;i++)  {
    console.log(fruits.concat(moreFruits)[i])
}

// Convert each fruit name to lowercase and log it
for (i=0 ; i<fruits.concat(moreFruits).length ;i++)  {
    console.log(fruits.concat(moreFruits)[i].toLowerCase())
}

// Convert all fruits name into lowercase and store in new array named lowercaseFruits

let lowercaseFruits = fruits.concat(moreFruits).map(function(el) {
    return el.toLowerCase()
})

// Convert all fruits name into uppercase and store in new array named uppercaseFruits
let uppercaseFruits = fruits.concat(moreFruits).map(function(el) {
    return el.toUpperCase()
})

let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them
numbers.flat([Infinity])

// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)
numbersTwo.flat([Infinity])

// Convert the numbersThree array to one level element.
numbersThree=numbersThree.flat([Infinity])
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.

// Use forEach to log all the elements of numberThree array

numbersThree.forEach(function(el){
   console.log(el)
})

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map
let  doubleNumbers = numbersThree.map(function(el){
    return el*2
})

// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map
 
let  tripleNumbers = numbersThree.map(function(el){
    return el*3
})
// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map

let halfNumbers = numbersThree.map(function(el){
    return el*0.5
})

// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array

let oddNumbers = numbersThree.filter(function(el) {
    return (el %2 >0)
})

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array

let evenNumbers  = numbersThree.filter(function(el) {
    return (el %2 ==0)
})

// Find the index of 10 in numbersThree array

numbersThree.indexOf(10)

// Reverse the values of numbersThree array
numbersThree.reverse() ;

// Reverse the values of numbersTwo array
numbersTwo.reverse()

// Join all fruits with '-', convert to uppercase and log it
let joinfruits  = fruits.reduce(function(acc,el) {
    return acc+el+"-"
},"")

// Join all fruits with '&', convert to lowercase and log it
let lowfruits = fruits.map(function(el){
    return el.toLowerCase()
})

let join = lowfruits.reduce(function(acc,el) {
    return acc + el+ "&"
}, "")