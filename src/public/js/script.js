//arreglo que contiene las repuestas correctas
let correctas=[3,1,2,2,3]

//arreglo donde se guardan las repuestas del usuario 
let opcion_elegida=[];

let cantidad_correctas=0

//fincion que toma el numero de pregunta y el imput elegido de esa pregunta
function repuestas(num_pregunta, seleccionada){
    //guardado la repuesta elegida
    opcion_elegida[num_pregunta]= seleccionada. value;

    ud="p" + num_pregunta;

    labels = document.getElementById(id).childNodes;
    labels [3].style.backgroundColor = "white";
    labels [5].style.backgroundColor = "white";
    labels [7].style.backgroundColor = "white";

    seleccionada.parentNode.style.backgroundColor = "#cec0fc";

}
function corregir(){
    cantidad_correctas = 0;
    for(i=0; i<correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }

    }
    document.getElementById("resultado").innerHTML = cantidad_correctas;
}