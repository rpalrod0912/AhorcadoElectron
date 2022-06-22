document.addEventListener('DOMContentLoaded',function (){
    let palabras = ["conejo","saltamontes","escarabajo","patata","azul","rojo","marron"];
    let palabra = [];
    let miPalabra = [];
    let historial= [];
    let intentos=5;
    let nodoLetra=document.querySelector('#letra');
    let nodoBoton=document.querySelector('#boton');
    let nodoResultado=document.querySelector('#resultado');
    let nodoIntentos=document.querySelector('#intentos');
    let nodoHistorial=document.querySelector('#historial');

    function empezarPartida(){
        let indPalAl= _.random(palabras.length-1);
        palabra = palabras[indPalAl].split('');

        for (let letra of palabra){
            miPalabra.push('_');
        }
        dibujar();
    }

    function dibujar(){
        nodoResultado.textContent=miPalabra.join(' ');
        nodoIntentos.textContent=intentos;
        nodoHistorial.textContent=historial.join(' ');
    }

    function comprobarLetra(){
        let miLetra=nodoLetra.value;
        nodoLetra.value='';
        nodoLetra.focus();
        for (const [posicion,letraAdivinar] of palabra.entries()){    
                if (miLetra==letraAdivinar){
                    miPalabra[posicion]=letraAdivinar;
        }
        }
        if (!palabra.includes(miLetra)){
            intentos-=1;
            historial.push(miLetra);
    }else{
        historial.push(miLetra);
    }
        acabar();
        dibujar();
    }
    
    function comprobarEnter(evento){
        if (evento.code == 'Enter'){
            comprobarLetra();
        }
    }

    function acabar(){
        if (!miPalabra.includes('_')){
            alert ('Has Ganado !!!');
            location.reload(true);
        }
        if (intentos==0){
            alert("HAS PERDIDO!!!")
            location.reload(true);
        }
    }

    nodoBoton.addEventListener('click',comprobarLetra);
    nodoLetra.addEventListener('keyup',comprobarEnter);
    empezarPartida();
})



