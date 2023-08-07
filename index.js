// ---------Arrays 1 Assignment------------//

//  1-create an array of three items, stored inside a variable called myArray

const currency = ['Dollar', 'Pounds', 'Euro'];
console.log(currency);

// 2-modify the first two items in the array using simple bracket notation and assignment.

currency[0] = 'Naira'
console.log(currency)

currency[1] = 'cedis'
console.log(currency)

//Then add a new item to the beginning of the array.
 
currency.unshift('Canadian-dollar')
console.log(currency)

// ----------Arrays 1 Assingment-----------//




// ----------Arrays 2 Assingment-----------//

let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

//Convert the string into an array, removing the + characters in the process. Save the result in a variable called myArray.//


let myArray = myString.split('+')
console.log(myArray)
 
//Store the length of the array in a variable called arrayLength.

const arrayLength =(myArray.length)
console.log(arrayLength)

//Store the last item in the array in a variable called lastItem

const lastItem = (myArray.pop())
console.log(lastItem)
// ----------Arrays 2 Assingment-----------//


// ----------Arrays 3 Assingment-----------//
let myArray3 = [ "Ryu", "Ken", "Chun-Li", "Cammy", "Guile", "Sakura", "Sagat", "Juri" ];

//Remove the last item in the array
myArray3.pop() 
console.log(myArray3)

//Add two new names to the end of the array.
myArray3.push('Aws','ses')
console.log(myArray3)

//Go over each item in the array and add its index number after the name inside parentheses, for example Ryu (0). Note that we don't teach how to do this in the Arrays article, so you'll have to do some research.






//Finally, join the array items together in a single string called myString, with a separator of "-".





// ----------Arrays 4Assingment-----------//

//Find the index of the "Eagles" item, and use that to remove the "Eagles" item.

const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];
let indexOf = birds.indexOf('Eagles')
console.log(indexOf)





///Make a new array from this one, called eBirds, that contains only birds from the original array whose names begin with the letter "E". Note that startsWith() is a great way to check whether a string starts with a given character

//let eBirds = birds.startsWith()

//console.log(eBirds)
