let word = prompt("Enter the Word");
let result = wordinAlphabeticalOrder(word);
console.log(result);
function wordinAlphabeticalOrder(word)
{
   let wordcontainer = word.split('');
   let sortedwords = wordcontainer.sort();
   let answer = sortedwords.join('');

   return answer;

}