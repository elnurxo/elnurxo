let result = onlyUpperLower();
console.log(result);
function onlyUpperLower()
{
    let wordenter = prompt("Enter the Word");
    if(wordenter==wordenter.toUpperCase() || wordenter==wordenter.toLowerCase())
    {
        return true;
    }
    else
    {
        return false;
    }
}