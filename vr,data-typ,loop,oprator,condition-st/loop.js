//Write a program that takes a number and prints the multiplication table for that number.
const mulTable=(number)=>{
    for(let i=1; i<=10; i++){
        let result=number*i;
        console.log(`${number} x ${i} = ${result}`)
    }
}

mulTable(5);



//Write a program that takes a number and calculates the sum of all numbers from 1 to that number.

//- When we call the function with 10, the expected output is 55, which is the sum of all numbers from 1 to 10.
//- When we call the function with 1, the expected output is 1, which is the sum of all numbers from 1 to 1 (i.e., just 1).
//- When we call the function with 5, the expected output is 15, which is the sum of all numbers from 1 to 5.
//- When we call the function with 0, the expected output is 0, since there are no numbers to sum.
//- When we call the function with -5, the expected output is 0, since we only consider positive numbers when summing.

const cal=(number)=>{
    let sum=0;
    for(let i=1; i<=number; i++){
        sum=sum+i;//sum=+i
    }
    console.log(sum);
}

cal(4);//1+2+3+4=10