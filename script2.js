function somar(){
    var num1,num2,result;
    
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    result = num1 + num2;
    document.getElementById("resultado").value = result;
}

function sub(){
    var num1,num2,result;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    result = num1 - num2;
    document.getElementById("resultado").value = result;
}

function multi(){
    var num1,num2,result;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    result = num1 * num2;
    document.getElementById("resultado").value = result;
}

function div(){
    var num1,num2,result;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    result = num1 / num2;
    document.getElementById("resultado").value = result;
}

var limpar = document.querySelector('#limpar');
limpar.addEventListener("click", function(){
document.getElementById("resultado").value = "";
});