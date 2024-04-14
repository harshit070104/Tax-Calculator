function show(id){     
    document.getElementById(id).style.display = "block";    
}
function hide(id){    
    document.getElementById(id).style.display = "none";    
}

function showError(id){    
    document.getElementById(id).style.display = "block";
}
function hideError(id){
    document.getElementById(id).style.display = "none";
}

function showResult(){    
    document.getElementsByClassName("result")[0].style.display = "block"; // Showing result box
    document.getElementsByClassName("container")[0].style.display = "none";
}
function hideResult(){
    document.getElementsByClassName("result")[0].style.display = "none";   // hiding result box
    document.getElementsByClassName("container")[0].style.display = "block";     
}

function check(id , errorId){ // Checking the input field so that it shouldnot contain characters other than numbers
    let income = document.getElementById(id).value;
    let size = income.length;
    
    let nums = ["0","1","2","3","4","5","6","7","8","9","."];
    let ele = document.getElementById(id);
    for(let i=size-1 ; i>=0 ; i--)  // Untill the input contains char other than numbers show error
    {

        if(!nums.includes(income[i])){
            document.getElementById(errorId).style.display = "block";   // Displaying error
            ele.style.outline = "solid 2px rgba(255, 0, 0, 0.598)"; // Giving warning
            ele.style.borderStyle = "none"; // Removing border
            return;    
        }
    }
    document.getElementById(errorId).style.display = "none";    // Remove error
    ele.style.outlineStyle = "none";    // Removing red warning outline    
    ele.style.borderStyle = "solid";    // Adding back border   
}

function valid(){
    let age = document.getElementById("selectAge");    
    if(age.value == ''){        
        document.getElementById("error3").style.display = "block";
        age.style.outline = "solid 2px rgba(255, 0, 0, 0.598)"; 
        age.style.borderStyle = "none";                     
    }    
    else{
        document.getElementById("error3").style.display = "none";
        age.style.outlineStyle = "none";    
        age.style.borderStyle = "solid";   
    }
}

function calculateTax(){    // Function for calculating result     
    let annualIncome = document.getElementById("annualIncome").value;
    let size = annualIncome.length
    if(annualIncome.length == 0){
        annualIncome = 0;
    }
    else{
        annualIncome = parseInt(annualIncome);
    }

    let extraIncome = document.getElementById("extraIncome").value;
    if(extraIncome.length == 0){
        extraIncome = 0;
    }
    else{
        extraIncome = parseInt(extraIncome);
    }

    let deductions = document.getElementById("deductions").value;
    if(deductions.length == 0){
        extraIncome = 0;
    }
    else{        
        deductions = parseInt(deductions);
    }

    let age = document.getElementById("selectAge").value;
    if(age == ''){        
        return valid();        
    } 
    else{
        document.getElementById("error3").style.display = "none";
    }   
    
    let overallIncome = annualIncome+extraIncome-deductions;
    let taxableIncome = overallIncome-800000;
    let netIncome;    
    if(taxableIncome>0){
        if(age == "less-than-40"){
            tax = 0.3;
        }
        else if(age == "greater-equal-than-40-&-less-than-60"){
            tax = 0.4;
        }
        else if(age == "greater-equal-than-60"){
            tax = 0.1;
        }

        netIncome = (1-tax)*taxableIncome + 800000;
    }
    else{
        netIncome = overallIncome;
    }    
    
    
    netIncome = netIncome.toPrecision(size+2);
    let i=size-1;
    let threeCount = 2;
    let twoCount = 1;
    let onlyOnce = 1;
    while(i>0){        
        if(onlyOnce == 1){
            while(i>0 && threeCount--){
                i--;
            }
            if(i>0){
                netIncome = netIncome.slice(0, i) + "," + netIncome.slice(i);
            }
            onlyOnce = 0;
            i--;    // As we dont wanna consider comma so thats why
        }


        while(i>0 && twoCount--){
            i--;
        }
        if(i>0){
            console.log(i);
            netIncome = netIncome.slice(0, i) + "," + netIncome.slice(i);
        }
        i--;
        twoCount = 1;
    }
    netIncome = "₹" + netIncome


    document.getElementById("netIncome").innerHTML = netIncome;
    showResult();
}