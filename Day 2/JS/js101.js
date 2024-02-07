// How to print in js?
console.log("Web Bootcamp")
// How to define a variable in js?
let number = 50;
let name = "Ali";
let condition = true;
console.log(number)
console.log(condition);
// What are the types of variable declaration in JS?

// How to update a variable value in JS?
number = 30;
console.log(number)

// How to know the type of a variable in JS?
console.log(typeof(number))
/* 
   Data Types in javaScript:
   String : we use it for characters and strings.
   Number : we use it for integers and float and double.
   Boolean : we use it for true or false. 
   null : this for no value.
   undefined : this tell us that the variable is not defined.
*/

// undefined data type appears when you define a variable and do not assigne a value for it.
// if you do not assigne a value for a variable its value will be undefined but for more readability programers assing null inested.
let x = null;
console.log(x)
//--------------------------------------------------------------------------------------------------------------------------------------------

/* 
   you can use `` (Template Literals) insted of qutes with strings and the benifit of them is that:
   it helps you to format the string.
   you can put variables inside it using ${varibaleName}.
*/

console.log(`the number we decided equals ${number}


done`)

/* 
   here we will discuss things with strings:
   you cab use .length with a string to get its length.
   you can use [] to get a string element using the index which is simillar to python :).
   you can update string element using its index F.E Name[0] = "a" .
   you can add to strings using + or a string and any variable.
   you can use += short cut in javaScript.
   javaScript have escape characters which you can use with strings like t\, n\.
   if you want to use single or double qutes in strings you need to put \ before them.
   and you can also use double qutes to put inside them single qutes and the opposite also right.
   and if you want to use \ inside string you should write \\.
*/

let name1 = "Abdullah"
console.log(name1.length)
console.log(name +" "+name1)
console.log(name1[0])

//--------------------------------------------------------------------------------------------------------

// How to define an Array in JS?
let y = [1,2,3,4,5,6]
console.log(y)
console.log(y[4])
// How to get an element from an array in JS?

/* you can update an array element using its index.
   you can use .length with arrays to know their length.
   you can use .includes("element name") to know whether the array have this element or not.
   to add an element to an array use .push("element name") it will add it to the end of the array.
   to remove last element in an array use .pop(). it return the value that is deleted also. 
   to add an element to the start of an array use .unshift(element name)
   to remove an element from the begining of an array use .shift() it also return the element value.
   to determine that data type is an array use Array.isArray(name).
   2d Arrys exists in javaScript :).
   you can use .split(splitting condition F.E " ") to siplit string and convert it to an array.
   you can use .join(join condition " ") to join a string array and make as one string.
*/

console.log(y.length)
console.log(y.includes(2))

//-----------------------------------------------------------------------------------------------------------

// How to write conditions in JS?
let x1 = 5
let x2 = -8
if(x1 == x2){
   console.log("They are equal")
}
else if (x2 < 0){
   console.log("The second number is negative")
}
else{
   console.log("They are not equal")
}

// How to write for loop in JS?

for(let x=0;x<10; x++){
   console.log(x)
}

for(i in y){
   console.log(i)
}

for(i of y){
   console.log(i)
}


//-----------------------------------------------------------------------------------------------------------

// How to define a function in JS?

function add(x1, x2){
   return x1+x2;
}

console.log(add(10,5))

// Congrats you finished js101
