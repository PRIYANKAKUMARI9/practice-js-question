

//Write a function called 'greet' that takes a name parameter and logs a greeting message to the console.

const greet=(name)=>{
    console.log(`hello anurag ${name} !! keise ho pinki keisi hai`);
}
greet("me priyanka hu");

//Write a function called 'getSquare' that takes a number parameter and returns its square.

//Use the exponent operator (**) to square the number parameter
function getSquare(number){
    const s= number **2;
    return s;
}
const result=getSquare(4);
console.log(result);

//another

const square=(number)=>{
    const s=number * number ;
    return s;
}
const result1 = square(2);
console.log(result1)




/*-

3. Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.

It checks if the character is already in the `counts` object using an `if` statement.
- If the character is already in the `counts` object, it increments the count for that character by 1.
- If the character is not yet in the `counts` object, it adds it to the object with a count of 1.*/


function countLetters(str) {
    // Create an empty object to store the letter counts
    const counts = {};
  
    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      // Check if the character is already in the counts object
      if (counts[char]) {
        // If it is, increment the count by 1
        counts[char]++;
      } else {
        // If it's not, add it to the object with a count of 1
        counts[char] = 1;
      }
    }
  
    // Return the counts object
    return counts;
  }
  
  // Example usage:
  const letterCounts = countLetters("hello");
  
  console.log(letterCounts);

 
  4.//Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.

  function createCounter(){
    let count=0;

    return function(){
         count++;
         return count;
    }
  }
                                    // create a new counter function
const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());





