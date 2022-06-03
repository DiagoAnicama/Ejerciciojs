document.write('Empresa de telefonia CERTUS=======\n');

let llamfijo=0.20;
let llamclaro=0.40;
let llammovistar=0.60;
let llamentel=1.00;

let operador=prompt(`¿A que operador quieres llamar?\n1.-Fijo\n2.-Claro\n3.-Movistar\n4.-Entel`);

let minhablado=parseInt(prompt(`¿Cuantos minutos quieres calcular en la llamada?`));


let cfijo=parseFloat(minhablado*llamfijo);
let cclaro=parseFloat(minhablado*llamclaro);
let cmovistar=parseFloat(minhablado*llammovistar);
let centel=parseFloat(minhablado*llamentel);
if(operador==1){
    document.write(`El costo total de la llamada para Fijo es de S/ ${cfijo} x ${minhablado} minutos.`);
}else if(operador==2){
    document.write(`El costo total de la llamada para claro es de S/ ${cclaro} x ${minhablado} minutos.`);
}else if(operador==3){
   document.write(`El costo total de la llamada para movistar es de S/ ${cmovistar} x ${minhablado} minutos.`);
}else if(operador==4){
    document.write(`El costo total de la llamada para entel es de S/ ${centel} x ${minhablado} minutos.`);
}else {
    alert("No se identifico la operadora")
}