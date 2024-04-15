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
    
    let nums = ["0","1","2","3","4","5","6","7","8","9"];
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

function calculateTax(){
    // If parsing will give NaN then take value 0 simple
    let annualIncome = parseInt(document.getElementById("annualIncome").value) || 0;
    let extraIncome = parseInt(document.getElementById("extraIncome").value) || 0;
    let deductions = parseInt(document.getElementById("deductions").value) || 0;
    let age = document.getElementById("selectAge").value;

    if(age === ''){
        valid();
        return;
    }
    else{
        document.getElementById("error3").style.display = "none";
    }

    let overallIncome = annualIncome+extraIncome-deductions;
    let taxableIncome = overallIncome-800000;
    let tax;
    let netIncome;

    if(taxableIncome>0){
        if(age === "less-than-40"){
            tax = 0.3;
        }
        else if(age === "greater-equal-than-40-&-less-than-60"){
            tax = 0.4;
        }
        else if(age === "greater-equal-than-60"){
            tax = 0.1;
        }

        netIncome = (1-tax)*taxableIncome + 800000;
    }
    else{
        netIncome = overallIncome;  // No tax reduction
    }

    // Format netIncome with commas according to Indian currency system 
    netIncome = "₹" + netIncome.toLocaleString('en-IN');

    // If error in any of the field is still there it will not show the result
    if (document.getElementById("error1").style.display === "block" || document.getElementById("error2").style.display === "block" || document.getElementById("error4").style.display === "block"){
        return;
    }

    document.getElementById("netIncome").innerHTML = netIncome;
    showResult();
}
