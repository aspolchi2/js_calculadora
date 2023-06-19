
function calcular() {
    // recuperar los valores de la página
    // sumarlos
    // agregarlos en la página en el lugar adecuado
    var op1=document.getElementById("op1").value;
    var op2=document.getElementById("op2").value;
    var operador= document.getElementById("select").value;


    switch (operador){
        case "+": 
            var resultado = parseInt(op1)+parseInt(op2);
            break;
        case "-":  
            var resultado = parseInt(op1)-parseInt(op2);
            break;
        case "*": 
            var resultado = parseInt(op1)*parseInt(op2);
            break;
        case "/":
            var resultado = parseInt(op1)/parseInt(op2);
            break;
        default:
            var resultado = "No es posible";
            document.getElementById("resultado").innerHTML= resultado;
            
    }
    document.getElementById("resultado").innerHTML=resultado;
    
}