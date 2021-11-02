let result = asciiValue();
console.log(result);
function asciiValue(){
    let character = prompt("Enter Character to know its ASCII value");
    let asciivalue = character.charCodeAt();
    return asciivalue;
}
