// let first = prompt("First Word");
// let word1 = prompt("Word");
// let last = prompt("Last Word");
// let result = alphabeticalOrder(first,word1,last);
// console.log(result);
// function alphabeticalOrder(first,word1,last){




    // let count=0;
    // if (first.length>last.length) 
    // {
    //     for (let index = 0; index < first.length; index++) {
    //         if ((first[index]).charCodeAt()<=(word1[index]).charCodeAt()>=(last[index]).charCodeAt())
    //         {
    //             count++;
    //         }         
    //     }
    //     if (count==word1.length) {
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }

    // if (first.length < last.length && first.length < word1.length)
    // {
    //     var count=0;
    //     for (let i = 0; i < first.length; i++)
    //     {
        
    //         if ((first[i]).charCodeAt() <= (word1[i]).charCodeAt() >= (last[i]).charCodeAt()) 
    //         {
    //             count++;
    //         } 
    //     }
    //     if (count==first.length) 
    //     {
    //         return true;
    //     }
    //     else
    //     {
    //         return false;
    //     }
    // }


    // for (let index = 0; index < word1.length; index++) {
    //     var symbword1 =  word1[index];
    //     var symbword2 =  first[index];
    //     var symbword3 =  last[index];
    //     var count=0;
    //     if (symbword2.charCodeAt()>=symbword1.charCodeAt()<=symbword3.charCodeAt()) 
    //     {
    //         count++;
    //     }       
    // }
    // if (count==word1.length) {
    //     return true;
    // }
    // else{
    //     return false;
    // }


//}



let first = prompt("First Word");
let word = prompt("Last Word");
let last = prompt("Word");
let result = alphabeticalOrder(first,last,word);
console.log(result);

function alphabeticalOrder(first,last,word){
    sumfirst=0;
    sumlast=0;
    sumword=0;
     for(i=0;i<first.length;i++)
     {
       sumfirst+=first.charCodeAt(i);
     }
     console.log(sumfirst);
     for(i=0;i<last.length;i++)
     {
       sumlast+=last.charCodeAt(i);
     }
     console.log(sumlast)
     for(i=0;i<word.length;i++)
     {
       sumword+=word.charCodeAt(i);
     }
     console.log(sumword)
     if (sumword>sumfirst && sumword<sumlast)
     {
       console.log(true);
     }
     else{
       console.log(false);
     }
   }