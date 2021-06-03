
function limpiarFormulario(){
    document.getElementById('apellidos').value="";
    document.getElementById('nombres').value="";
    document.getElementById('talla').value="";
    document.getElementById('peso').value="";
}

function obtenerBmi(){
    var apellidos=document.getElementById('apellidos').value;
    var nombres=document.getElementById('nombres').value;
    var talla=parseFloat(document.getElementById('talla').value);
    var peso=parseFloat(document.getElementById('peso').value);

    var tallaM=talla/100;
    var bmi=peso/(tallaM*tallaM);
    var pesoMinIdeal=tallaM*tallaM*18.5;
    var pesoMaxIdeal=tallaM*tallaM*24.9;
    var categoria=calcularCategoriaPeso(bmi);
    var riesgo=calcularRiesgo(categoria);
    bmi=bmi.toFixed(2);
    pesoMinIdeal=pesoMinIdeal.toFixed(1);
    pesoMaxIdeal=pesoMaxIdeal.toFixed(1);
    imprimir(bmi,apellidos,nombres,talla,peso,categoria,pesoMinIdeal,pesoMaxIdeal,riesgo);
    limpiarFormulario();
}

function calcularCategoriaPeso(bmi){
    var categoria="";
    if(bmi<18.5){
        categoria="Bajo peso";
    }else if(bmi>=18.5&&bmi<=24.9){
        categoria="Normal";
    }else if(bmi>=25&&bmi<=29.9){
        categoria="Sobrepeso";
    }else if(bmi>=30&&bmi<=34.9){
        categoria="Obesidad grado I";
    }else if(bmi>=35&&bmi<=39.9){
        categoria="Obesidad grado II";
    }else if(bmi>=40){
        categoria="Obesidad grado III";
    }
    return categoria;
}

function calcularRiesgo(categoria){
    var riesgo="";
    if(categoria=="Bajo peso"){
        riesgo="Por debajo";
    }else if(categoria=="Normal"){
        riesgo="Promedio";
    }else if(categoria=="Sobrepeso"){
        riesgo="Aumentado";
    }else if(categoria=="Obesidad grado I"){
        riesgo="Moderado";
    }else if(categoria=="Obesidad grado II"){
        riesgo="Severo";
    }else if(categoria=="Obesidad grado III"){
        riesgo="Muy Severo";
    }
    return riesgo;
}

function imprimir(bmi,apellidos,nombres,talla,peso,categoria,pesoMinIdeal,pesoMaxIdeal,riesgo){
    document.getElementById('resultado1').value="Saludos "+nombres+" "+apellidos+", para la información que ud. ha ingresado: ";
    document.getElementById('resultado2').value="Estatura: "+talla+" centímetros";
    document.getElementById('resultado3').value="Peso: "+peso+" kilos";
    document.getElementById('resultado4').value="Su índice de masa corporal (BMI) es: "+bmi+", indicando que su peso se encuentra en la categoría "+categoria+" para adultos de su altura. Así mismo presenta un riesgo de categoría "+riesgo+" de sufrir complicaciones por COVID-19.";
    document.getElementById('resultado5').value="Para su estatura, el rango de peso saludable va desde "+pesoMinIdeal+" kg hasta "+pesoMaxIdeal+" kg.";
    document.getElementById('resultado6').value="Las personas con sobrepeso u obesidad tienen un mayor riesgo de padecer enfermedades crónicas como hipertensión arterial, diabetes y colesterol alto. Además, son más propensas a presentar un cuadro crítico de COVID-19.";
}