let textarea=document.getElementById("textarea");
let p=document.querySelector("p");
let h1=document.querySelector("h1");

textarea.addEventListener("input",function(){
    let text=textarea.value;
    let length=text.length;

    if(length>30){
        textarea.value=text.slice(0,30);
        length=30;
        h1.textContent="Your character should be less than 30";
    }
    p.textContent=length+"/30";
    if(length>=10&&length<=20){
        textarea.style.color="green";
    }
    else if(length===30){
        textarea.style.color="red";
    }
    else{
        textarea.style.color="black";
    }
})
