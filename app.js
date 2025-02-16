// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Se define el arreglo listaAmigosAgregados que almacenará los nombres de los amigos que se vayan agregando.
let listaAmigosAgregados = [];

//Se define la función agregarAmigo que se encargará de agregar un amigo a la lista de amigos.
function agregarAmigo() {

    //Se obtiene el valor ingresado en el input con id amigo.
    let Amigo = document.getElementById('amigo').value;

    //Se valida que el valor ingresado no sea vacío.
    if (Amigo == "" || Amigo == " ") {
        alert("Por favor, inserte un nombre.");
    } else {
        //Se agrega el valor ingresado al arreglo listaAmigosAgregados.
        listaAmigosAgregados.push(Amigo);
    }

    //Se llama a la función limpiarCaja para limpiar el input.
    limpiarCaja();
    //Se llama a la función mostrarAmigos para mostrar la lista con los amigos que se vayan agreagndo.
    mostrarAmigos();
}

//Se define la función mostrarAmigos que se encargará de mostrar la lista de amigos que se vayan agregando.
function mostrarAmigos() {

    //Se obtiene el elemento con id listaAmigos.
    let lista = document.getElementById('listaAmigos');
    //Se limpia el contenido del elemento lista.
    lista.innerHTML = '';

    //Se recorre el arreglo listaAmigosAgregados y se agregan los elementos a la lista.
    for (let i = 0; i < listaAmigosAgregados.length; i++) {
        lista.innerHTML += `<li>${listaAmigosAgregados[i]}</li>`;
    }
}

//Se define la función sortearAmigo que se encargará de sortear un amigo de la lista de amigos.
function sortearAmigo() {

    //Se valida que la lista de amigos no esté vacía.
    if (listaAmigosAgregados.length == 0) {
        alert("Por favor, agregue al menos un amigo.");
        return;
    }

    //Se obtiene un amigo aleatorio de la lista de amigos, definida por el indice del arreglo.
    let amigoSorteado = listaAmigosAgregados[Math.floor(Math.random()*listaAmigosAgregados.length)];
    //Se muestra el amigo sorteado en el elemento con id resultado.
    document.getElementById('resultado').innerHTML = amigoSorteado;
}

//Se define la función limpiarCaja que se encargará de limpiar el input con id amigo.
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}
