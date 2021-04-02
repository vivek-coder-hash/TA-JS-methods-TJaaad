let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
let peopleName  =  []

for (i=0 ; i < persons.length ;i++) {
  peopleName.push(persons[i].name)
}

// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = []
for (i=0 ; i < persons.length ;i++) {
  peopleGrade.push(persons[i].grade)
}

// Create an array peopleSex and store the value of sex key from persons array

let peopleSex =[]
for (i=0 ; i < persons.length ;i++) {
  peopleSex.push(persons[i].sex)
}

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

let filtername  = peopleName.filter(function(el) {
  if (el.startsWith("J") || el.startsWith("P")) {
    return el
  }
})

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
let filternamed  = peopleName.filter(function(el) {
  if (el.startsWith("A") || el.startsWith("C")) {
    return el
  }
})

// Log all the filtered male ('M') in persons array

let filtermale  = peopleSex.filter(function(el){
  if (el == "M") {
    return el
  }
})

// Log all the filtered female ('F') in persons array

let filterfemale  = peopleSex.filter(function(el){
  if (el == "M") {
    return el
  }
})

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

let filterfemales  = persons.filter(function(el) {
  if (el.sex == "F") {
    return el
  }
})

let femalename  = filterfemales.filter(function(el) {
  if (el.name.startsWith("C") || el.name.startsWith("J") ) {
    return el
  }
})

// Log all the even numbers from peopleGrade array

let evengrade  = peopleGrade.filter(function(el) {
  if (el % 2 ==0) {
    return el
  }

})

// Find the first name that starts with 'J' in persons array and log the object

let firstname  = persons.filter(function(el) {
  if (el.name[0]== "J")
  {return el}
})

// Find the first name that starts with 'P' in persons array and log the object
let firstpname  = persons.filter(function(el) {
  if (el.name[0]== "P")
  {return el}
})

// Find the first name that starts with 'J', grade is greater than 10 and is a female
let gradefemalej  =  firstname.filter(function(el) {
  if ( el.grade>10 && el.sex== "F") {
    return el
  }
})

// Filter all the female from persons array and store in femalePersons array  
let femalePersons =[]

for (i=0 ; i <persons.length ; i++) {
  if (persons[i].sex== "F") {
    femalePersons.push(persons[i])
  }
}


// Filter all the male from persons array and store in malePersons array
let malePersons =[]

for (i=0 ; i <persons.length ; i++) {
  if (persons[i].sex== "M") {
    malePersons.push(persons[i])
  }
}

// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce(function(acc, el) {
  return acc+el
},0)

// Find the average grade
let averagegrade  = gradeTotal/(peopleGrade.length)

// Find the average grade of male

let male  = persons.filter(function(el) {
  if (el.sex== "M") {
    return el
  }
})

let malegrade = []

for (i=0 ; i<male.length ; i++) {
  malegrade.push(male[i].grade)
}

let malegradesum =0

for (i=0 ; i <malegrade.length ;i++) {
      malegradesum = malegradesum + malegrade[i]
}

console.log(malegradesum/(malegrade.length))

// Find the average grade of female

let female  = persons.filter(function(el) {
  if (el.sex== "F") {
    return el
  }
})

let femalegrade = []

for (i=0 ; i<female.length ; i++) {
  femalegrade.push(female[i].grade)
}

let femalegradesum =0

for (i=0 ; i <femalegrade.length ;i++) {
      femalegradesum = femalegradesum + femalegrade[i]
}

console.log(femalegradesum/(femalegrade.length))

// Find the highest grade

let allhigh  =  peopleGrade[0]

for (i=0 ; i < peopleGrade.length ;i++) {
  if (peopleGrade[i]>allhigh) {
    allhigh = peopleGrade[i]
  }
}

// Find the highest grade in male

let highmale = malegrade[0]

for (i=0 ; i<malegrade.length ;i ++) {
  if (highmale<malegrade[i]) {
    highmale = malegrade[i]
  }
}

// Find the highest grade in female

let highfemale = femalegrade[0]

for (i=0 ; i<femalegrade.length ;i ++) {
  if (highfemale<femalegrade[i]) {
    highfemale = femalegrade[i]
  }
}

// Find the highest grade for people whose name starts with 'J' or 'P'

let firstnamewithJorP  = persons.filter(function(el) {
  if (el.name.startsWith("J") || el.name.startsWith("P")  )
  {return el}
})

let grading =[]
for (i=0 ; i < firstnamewithJorP.length ;i++) {
  grading.push(firstnamewithJorP[i].grade)
}

let highestmarks  = grading[0]

for (i=0 ; i <grading.length ;i++) {
  if (grading[i]>highestmarks) {
    highestmarks = grading[i]
  }
}
// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
let sortpeopleGrade  = [...peopleGrade].sort(function(a,b) {
  return a-b
})

// Sort the peopleGrade in descending order

let sortingpeopleGrade  = [...peopleGrade].sort(function(a,b) {
  return b-a
})


// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

let againsort = [...peopleGrade].sort(function(a,b) {
  return b-a
})



// Sort the array peopelName in ascending `ABCD..Za....z`

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
let namesort = [...peopleName].sort(function(a,b) {
  return a-b
})