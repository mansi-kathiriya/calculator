const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

keys.forEach(key=>{  
    key.addEventListener("click",calculate);
});
function calculate(){
    let buttonText = this.innerHTML;
    if(buttonText === "AC"){
        output.innerHTML = "";
        result.innerHTML = "0";
        result.style.animation = "";
        output.style.animation = "";
        return;
    }
    else if(buttonText === "DEL"){
        output.textContent = output.textContent.substr(0,output.textContent.length-1);
        return;
    }
    else if(buttonText === "="){
        result.innerHTML = eval(output.innerHTML);
        result.style.animation = "big 0.5s ease-in-out";
        output.style.animation = "small 0.5s ease-in-out";
    }
    else{
        output.textContent += buttonText;
        return;
    }
}
document.addEventListener("click",myfunction);
    function myfunction(){
    document.getElementById('hide').style.display='none';
}