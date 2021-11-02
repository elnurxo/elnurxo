let word = prompt("Enter the Word");
let result = notRepeatChar(word);
console.log(result);
function notRepeatChar(word)
{
    let answer = '';
    let count = 0;

    for (let i = 0; i < word.length; i++) 
    {
       count=0;

       for (let j = 0; j < word.length; j++) 
       {
           if (word[i]==word[j]) 
           {
               count += 1;
           }          
       }
     if (count<2) 
     {
        answer = word[i];
        break;
     } 

    }
    return answer;
    
}