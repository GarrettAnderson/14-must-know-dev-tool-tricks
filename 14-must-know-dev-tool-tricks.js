// I
// JS running on the page but i dont know what is causing it???

/*

Click 'inspect element' or corresponding choice per web beowser in order to access the DOM and find the relevant element node. Right Click and select 'break on' then select attribute modification. This will show the specific JS

*/

// II
// Misc. Options

function makeGreen() {
  const p = document.querySelector('p')
  p.style.color = '#BADA55'
  p.style.fontSize = '50px'
}



// 1. Regular
console.log('hello')

/*
==========================
==========================
*/

// 2. Interpolate values into console.log but depracted and better to use back ticks ``
console.log('Hello I am a %s string!', 'testing')
// 'Hello I am a testing string!'

/*
==========================
==========================
*/

// 3. Include ad hoc styles directly in console.log;
console.log('%c I am some great text', 'font-size: 50px; background:red, text-shadow: 10px 10px aqua')

/*
==========================
==========================
*/

// 4. Print a WARNING
console.warn('OH NOOO!')
// Gives the stack trace (where in the file the warning is being called) of where it got called

/*
==========================
==========================
*/

// 5. Error :|
console.error('SHIT')
// Gives the stack trace (where in the file the warning is being called) of where it got called

/*
==========================
==========================
*/

// 6. Info
console.info('Crocodiles eat 3 to 4 people per year!')

/*
==========================
==========================
*/

// 7. Assertions
console.assert( 1 === 1, 'This is wrong')
// Will only fire if the assertion is false. If the assertion is true, nothing will happen.

/*
==========================
==========================
*/

// 8. Clearing
console.clear()
// Will clear your console

/*
==========================
==========================
*/

// 9. Viewing DOM Elements
// console.log(p)

// VS.

// console.dir(p) => allows you to access a list of methods and properties that lives on that specific element

/*
==========================
==========================
*/

// 10. Grouping together
// 'dogs' is an object of dog objects

dogs.forEach(dog => {
  console.group(`${dog.name}`)
  // OR console.groupCollapsed(`{dog.name}`) to consolidate space in the console

    console.log(`This is ${dog.name}`)
    console.log(`${dog.name} is ${dog.age} years young.`)
    console.log(`${dog.name} is well-mannered.`)

  console.groupEnd(`${dog.name}`)
})

// 11. Counting
console.count('Garrett')
console.count('William')
console.count('Garrett')
console.count('Garrett')
console.count('William')
console.count('William')
console.count('Garrett')

// Will tell you how many times you have run that specific console statement.

/*
OUTPUT in the console:

Garrett: 1
William: 1
Garrett: 2
Garrett: 3
William: 2
William: 3
Garrett: 4

*/

// 12. Timing
// To count how long it takes to complete an action such as a function to fetch data from an API. Start a timer:

console.time('fetching data')

fetch('https://some-url.com')
  .then(data = > data.json())
  .then(data => {
    console.log(timeEnd('fetching data'))
    console.log(data)
  })



// 13. Display data in a table
console.table()
