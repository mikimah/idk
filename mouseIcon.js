const bodyE = document.querySelector("body");
const myP = document.getElementById("myP");

//const h1Text = "Whenever i look at the sky";
//const h2Text = "I always hope that you are there";

const timeId = null;
const timeId2 = null;
let num = 0;
let num2 = 0;
let num3 = 1;

const textHs = [
`kinda cool to think how 
someone somewhere`,
    
`is having the best day 
of their life today...`,

`someone's hearing "i love you" 
for the first time today`,

 `someone's gonna meet the love of 
 their life today`,

 `and someone's gonna get the job of 
 their dreams today too`,

 "it's just someone's best day today",

 "and guess what?",

 "tomorrow could be your best day... :)"   
];


/*bodyE.addEventListener("mousemove",(event) =>{
    const xP = event.offsetX;
    const yP = event.offsetY;
    const spanE = document.createElement("span");
    const sizeE = Math.floor((Math.random()*50)+1);
    
    spanE.classList.add("starIcon");
    spanE.style.height = `${sizeE}px`;
    spanE.style.width = `${sizeE}px`;
    spanE.style.left = `${xP}px`;
    spanE.style.top = `${yP}px`;
    bodyE.appendChild(spanE);
    setInterval(()=>spanE.remove(),3000);
})*/

setInterval(()=>{
const xP = Math.floor((Math.random()*1500));
const yP = 100;
const spanE = document.createElement("span");
const sizeE = Math.floor((Math.random()*50)+1);
spanE.classList.add("starIcon");
spanE.style.height = `${sizeE}px`;
spanE.style.width = `${sizeE}px`;
spanE.style.left = `${xP}px`;
spanE.style.top = `${yP}vh`;
bodyE.appendChild(spanE);
setInterval(()=>spanE.remove(),3000);
},100)

//textChange();

/*function textChange(){
    if(num2==0){
    const max = h1Text.length;
    myP.textContent = h1Text.slice(0,num) + "_";
    num++;
    if(num > max){
        num=0;
        num2 = 1;
    }
    
    }else{
        const max = h2Text.length;  
        myP.textContent = h2Text.slice(0,num) + "_";
        num++;
        if(num > max){
        num=0;
        num2 = 0;
        }
    }
    setTimeout(textChange,200);
}*/


function textChangeNEW(){
    const max = textHs[num2].length;
    myP.textContent= textHs[num2].slice(0,num) + "_";
    num++;
    if(num > max){
        num=0;
        num2++;
        if(num2==textHs.length){
            num2=0;
        }
    }
    setTimeout(textChangeNEW,200);
}


//textChangeNEW();

const waitText = document.createElement("p");
waitText.classList.add("myP");
waitText.textContent="_";

setInterval(()=>{
    const max = textHs[num2].length;
    myP.textContent= textHs[num2].slice(0,num) + "_";
    num++;
    if(num > max){
        if(num3<=8){
            if(num3%2==0){
                myP.textContent= textHs[num2].slice(0,num) + " ";
             
            }else{
                myP.textContent= textHs[num2].slice(0,num) + "_";
               
            }
            num3++;
        }else{num=0;
            num3=0;
            num2++;
            if(num2==textHs.length){
                num2=0;
            }}
        
    }
},200)


