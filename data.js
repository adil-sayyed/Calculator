const display = document .querySelector(".display");
const button = document .querySelectorAll("button");
const specialchars = ["%","*","/","-","+","="];
let output = "";

const calculate = (btnValue) =>{
    display.focus();
    if(btnValue == "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    }
    else if (btnValue == "AC"){
        output = "";
    }
    else if(btnValue == "DEL"){
        output =output.toString().slice(0, -1);
    }
    else{
        if(output == "" && specialchars.includes(btnValue))
        return;
        output += btnValue;
    }
    display.value = output;
};

button.forEach(( button)=>{
    button.addEventListener("click",
    (e)=> calculate(e.target.dataset.value));
})