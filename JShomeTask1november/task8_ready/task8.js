let number = prompt("Enter the Number that you want to find Factorial of");
let result = firstFactorial(number);
console.log(result);
function firstFactorial(number)
{
    let factorial=1;
    for (let index=number; index>1; index--) {
        
        factorial*= index;
    }
    return factorial;
}