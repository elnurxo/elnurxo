let resultt = syllablesWithDash();
console.log(resultt);
function syllablesWithDash()
{
    let word = prompt("Enter word with Syllables(by using dash)")
    let result = word.split("-");
    return result.length;
}