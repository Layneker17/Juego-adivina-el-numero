/*
//titulo del juego
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del Numero Secreto';

//parrafo
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Ingrese un numero del 1 al 10'
*/

let numsecreto = 0;
let contador = 0;
let numeromax = 10;
let listanumero = [];



console.log(numsecreto)

function asignartextojuego(elemento,texto){
    let textohtml = document.querySelector(elemento);
    textohtml.innerHTML =  texto;
}

function generarnumerosecreto(){
    

    let numerogenerado = Math.floor(Math.random()*numeromax)+1;
    console.log(numerogenerado);
    console.log(listanumero);

    //si ya sorteamos todos los numeros
    if (listanumero.length == numeromax){
        asignartextojuego ('p','Ya se sortearon todos los numeros posibles');
    }else{
        // generar numero he incluirlo a la lista
        if(listanumero.includes(numerogenerado)){
            return generarnumerosecreto();
        }else{
            listanumero.push(numerogenerado);
            return numerogenerado;
        }
}
    }

    

function IntentoDeUsuario(){
    let numerousuario = parseInt(document.getElementById('numusu').value);
    //verificamos el tipo de dato de la variable numerousuario
    //console.log(typeof(numerousuario));
    //console.log(numerousuario);
    //verificamos el tipo de dato de la variable numsecreto
    //console.log(typeof(numsecreto));
    //console.log(numsecreto);
       // console.log(contador);
        if(numerousuario === numsecreto){
            asignartextojuego('p', `Acertaste el Numero en ${contador} ${(contador===1) ? ' Intento ':' Intentos '}!GANASTES!`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else{
            if(numerousuario < numsecreto){ 
                asignartextojuego('p', 'El Numero Secreto es Mayor');
            }else{
                asignartextojuego('p', 'El Numero Secreto es Menor');
            }
            contador++;
            limpiarcaja(); // llamamos a la funcion para que limpie el imput si no acertamos
            
        }
    return
}

function limpiarcaja(){
    document.querySelector('#numusu').value = ''; //limpar el imput utilizando el id
}

function condicionesiniciales(){
    asignartextojuego ('h1','Juego del numero secreto');
    asignartextojuego ('p','Ingrese un numero del 1 al 10'); 
    numsecreto = generarnumerosecreto();
    contador = 1;
}

function reiniciarjuego(){
    //limpiar caja
    limpiarcaja();
    //indicar mensaje de intervalo de numeros
    //gererar el juego aleatoreo
    //iniciar el numero de intentos
    condicionesiniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesiniciales();

