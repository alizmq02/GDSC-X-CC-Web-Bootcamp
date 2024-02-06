// Converting between data types and checking it.
/*
   To convert from string to float use parseFloat function which take the string as a parameter.
   To convert from string to integer use parsInt function which takes the string as a parameter.
   To delete the fruction from a number use Math.trunc method which takes the float as a parameter.
   To check if a number is integer use isInteger method whick takes the number as a parameter and it returns true or false.
   To check if a input is not a number use isNAN method it returns boolean.
   To add a power use ** or you can use the method Math.pow.
   To find the square root use Math.sqrt method.
   To check if a number positive or negative use method sign it will returns 1 if it is positive and -1 if its negative and 0 if it is 0 and NaN if it is not a number.
   Do not forget that there is infinty and -infinity in javaScript.
   To have a random number use Math.random method which will return a random number between 0 and 1 not including 1.
   You can use _ with numbers to make the read easiyer.
*/

//---------------------------------------------------------------------------------------------//
// Advanced arrays
/*
   .forEach method is method that you can apply to an array to do operation on its elements. ArrayName.forEach(operation ro function)
   .some function return true if one of the elements achive the condition.
   .every method return true if all of the  elements achive the condition and it is like some syntax.
   .includes method return true if the array include the element that you put and if you put number in the second parameter it will start from the index number you put.
   you can use the negative index in javaScript :).
   there are two methods to show the index of an element in an array indexOf and lastIndexOf the first one will search from the begining and the second one will search from the end and you cna put the index they start from to search and they return -1 if the element does not exist.
   .findIndex method that return the index of the element that achive the condition and we use the usuall callback function with it and it returns -1 if the element does not exist.
   .find method is the same as findIndex but it returns the element value not its indesx it returns undefind if there is no element... .
   .filter method is used to filter the array so it returns an array with elements that achive the condition and it uses the usual callBack function.
   .concat method is used to meke to array one array. firstArray.concat(secondArray) and you can add more elements as a parameters and if you do not pass a method it will reutrn the same method.
   .slice method that will return a new array with the slice you want (first index, last index not included) if you dont pass parameter it will complete tell the end like [:] in python :).
   .splice method is used to delete some elements of the array using the parameter index in the first and the number of the delete in the second parameter and you can replace using it if you put elements insted of what you delete in the prameter following it and you can add using it put you should put 0 in place of the number of elements you want to delete.
   .join method is used to join the Array element as one line in one varible strings and you can pass a parameter to it which is used to replace the split sympole vy it.
   .sort method is used to sort the Array if it is numbers it will sort it increasingly and if it strings it will sort it alphabitaclly :|.
   .reverse method is used to reverse the Array.
   .map is used to edit the elements of an Array and put them in new Array and it used the callBack function.
   .split method is used to split string to an Array it is like python split and if you want to take a some elements you should write the number of element you want in the second parameter.
   .reduce method is used to add all the element of an number array it takes call back function(accumulator,value,index,array) it starts in the values from one and the accumulator is the first element and you can put a second parameter to set a value of the accumulator rather than using the first element of the array.
*/

//------------------------------------------------------------------------------------//
//OOP
/*
  You can do object as variable see the example.
  you can use this key word.
  see the example to know how to creat a class.
  to make a varible private put # then the name of the variable.
  for the inheritance use extends ClassName.
  there is overriding in methods in javaScript.
*/