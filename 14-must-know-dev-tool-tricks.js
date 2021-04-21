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

// 2. Interpolate values into console.log but depracted and better to use back ticks ``
console.log('Hello I am a %s string!', 'testing')
// 'Hello I am a testing string!'

// 3. Include ad hoc styles directly in console.log;
console.log('%c I am some great text', 'font-size: 50px; background:red, text-shadow: 10px 10px aqua')

// 4. Print a WARNING
console.warn('OH NOOO!')
// Gives the stack trace (where in the file the warning is being called) of where it got called
