//let button=document.getElementsByClassName('custombutton');
let container=document.querySelector('col-6');
console.log(container);

function myFunc()
{
    let input = document.querySelector('input').value;
    
    if (input!="") 
    {
        let ul=document.querySelector('ul');
         let li = document.createElement('li');
         let content=document.createElement('p');
         content.innerText=input;
        ul.appendChild(li);
        li.appendChild(content);
    }
}