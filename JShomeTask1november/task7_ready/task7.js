numberenter = prompt("Enter the Number of 'a' character in Edabit");
let result = countAinEdabit(numberenter);
console.log(result);
function countAinEdabit(numberenter)
{
    let aletter = '';
    for (let index = 0; index < numberenter; index++) {
        aletter=aletter + "a";        
    }
    let word = `Ed${aletter}bit`;
    return word;
}