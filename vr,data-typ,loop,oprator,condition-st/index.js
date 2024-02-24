//1. **Write a function that takes two numbers as arguments and returns their sum.**

const twoNumber =(sum1,sum2)=>{
sum=sum1+sum2;
return sum;
}

console.log(twoNumber(2,8));

//Write a function that takes a string as an argument and returns its length.

const numLength=(strLenght)=>{
    num=strLenght.length;
    return num;
}

console.log(numLength("hello"));

//Write a program that takes two numbers and displays their sum, difference, product, and quotient.

const a=10;
const b=2;

sum=a+b;
diff=a-b;
prod=a*b;
quat=a/b;

console.log("sum here="+sum);
console.log("minus here="+diff);
console.log("mult here="+prod);
console.log(`divid here= ${quat}`);

//Write a function that takes two numbers as arguments and returns the larger number.


const rtn=(one,two)=>{

    if(one>two){
        console.log(one);
    }
    else{
        console.log(two);
    }

}

console.log(rtn(7,5));

//Write a program that displays a string in reverse order.

//the split() method is used to convert the string into an array of characters. 
//The reverse() method is then called on the array to reverse the order of the elements.
// Finally, the join() method is used to join the array back into a string.


const nameR="priyanka  kumsri";

const rvsstr=(str)=>{
    let rvsstr=str.split("").reverse("").join("");
    return rvsstr;
}

console.log(rvsstr(nameR));


//Write a program that takes a number and checks whether it is positive, negative, or zero.

//---Inside the function, we use an if-else statement to check whether the number is positive, negative, or zero.

const checknum=(numbe)=>{
     if(numbe>0){
        console.log(`${numbe} =is positive number`);
     }
     else if(numbe<0){
        console.log(`${numbe} =is negative number`);
     }
    
     else{
        console.log(`${numbe} =is zero number`)
     }      
}

checknum(20);
checknum(-9);
checknum(189);
checknum(0)
checknum(-98);