let resultt = hyphensNumber();
console.log(resultt);
function hyphensNumber()
{
    let number = prompt ("Enter Number between 1-60")
    if (1<=number && number<=60) 
    {
        let result=" ";
        for (let index = 0; index < number; index++) {  
            result+="-";
        }
        return result;
    }
    else{
        return ("Enter Number between 1-60");
    }
}