

// 5. Write a function called 'sumEvenNumbers' that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.

function sumEvenNumbers(numbers){
    let sum=0;

    for(let i=0; i<numbers.length; i++){
        if(numbers[i]% 2===0){
            sum=sum+numbers[i];
        }
    }
    return sum;
}

const numbers=[1,2,3,4];
console.log(sumEvenNumbers(numbers));

//sum of even numbers from 1 to 100 

let sum=0;
for(let i=1; i<=10; i++){
    if(i%2===0){
        sum=sum+i;
    }
}
console.log(sum);

// another

let nuber=[1,2,3,4,5,6,7,8,9,10 ];

const sumEven=(nuber)=>{
      let sum1=0;
      for(let i=0; i<=nuber.length; i++){
        if(nuber[i]%2===0){
            sum1=sum1+nuber[i];
        }

      }
      return sum1;
}

console.log(sumEven(nuber));