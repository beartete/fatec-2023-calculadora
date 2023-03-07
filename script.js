function somar(){
    var num1, num2, resp;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    resp = num1 + num2;

    document.getElementById("resp").value = resp;
}

function substrair(){
    var num1, num2, resp;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    resp = num1 - num2;

    document.getElementById("resp").value = resp;
}

function multiplicar(){
    var num1, num2, resp;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    resp = num1 * num2;

    document.getElementById("resp").value = resp;
}

function dividir(){
    var num1, num2, resp;

    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    resp = num1 / num2;

    document.getElementById("resp").value = resp;
}



function limpar(){

    document.getElementById("resp").value = "";

}