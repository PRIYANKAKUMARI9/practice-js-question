//Write a function that takes an array of numbers as an argument and returns the sum of all 
//the numbers in the array.

const sumarr=(arr)=>{
    let sum=0;
    for(let i=1; i<arr.length; i++){
        sum=sum+arr[i];
    }

  return sum;
}

const numbers1=[1,2,3,4];
console.log(sumarr(numbers1));

const numbers2=[1,2,3,30,1];
console.log(sumarr(numbers2));

