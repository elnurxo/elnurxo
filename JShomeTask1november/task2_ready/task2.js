let result = UpperLower();
console.log(result);
function UpperLower()
{
      let word1 = prompt("Enter First Word");
      let word2 = prompt("Enter Second Word");
    if (word1.length==word2.length) {
        if (word1.toUpperCase==word2.toUpperCase) {
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}