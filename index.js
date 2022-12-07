const MultiplicarDosNumeros = (numero1, numero2) => {
    numero1_abs = Math.abs(numero1);
    numero2_abs = Math.abs(numero2);
    let producto = 0;
    for (let i = 0; i < numero2_abs; i++) {
        producto += numero1_abs;
    }
    // resultado positivo
    if ((numero1 >= 0 && numero2 >= 0) || (numero1 <= 0 && numero2 <= 0)) {
        return producto;
    }
    // resultado negativo
    return 0-producto;
};

const ObtenerMayor = (array) => {
    let mayor = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    return mayor;
};

const EliminarValores = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (!!!array[i]) {
            array.splice(i, 1);
            i -= 1;
        }
    }
    return array;
};

const AplanarArreglo = (array) => {
    let array_aplanado = [];
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            // Recorrer array y hacer push de todos los elementos
            for (let j = 0; j < array[i].length; j++) {
                array_aplanado.push(array[i][j]);
            }
        }
        else {
            array_aplanado.push(array[i]);
        }
    }
    return array_aplanado;
};

const CantidadVecesPalabra = (string, palabra) => {
    let cantidadVeces = 0;
    let posicion = 0;
    while (true) {
        let posEncontrada = string.indexOf(palabra, posicion);
        // No la encuentra
        if (posEncontrada == -1) {
            return cantidadVeces;
        }
        // Si la encuentra
        cantidadVeces += 1;
        posicion = posEncontrada + palabra.length;
    }
};

const esPalindromo = (string) => {
    // Quitamos todos los espacios del string y convertimos a array
    let array = string.replace(/ /g, "").split("");
    const reemplazar = {
        á: "a",
        é: "e",
        í: "i",
        ó: "o",
        ú: "u"
    };
    // Quitamos tildes del string y convertimos todo a minuscula
    array = array.map(letra => reemplazar[letra.toLowerCase()] || letra.toLowerCase());
    // Invertimos arreglo para comparar
    array_reverse = [...array].reverse();
    return array.join("") == array_reverse.join("");
};

console.log(MultiplicarDosNumeros(5, -10));
console.log(ObtenerMayor([20, 40, -50, 56, 56.1]));
console.log(EliminarValores([1, undefined, 2, 5, null, 0, 0, 0]));
console.log(AplanarArreglo([[1, 2], [[[3, 4]]], [5, 6, [1, 2]]]));
console.log(CantidadVecesPalabra("Joaquin Villalon, Egresado de Ingenieria Civil en Informatica y Telecomunicaciones", "Civil"));
console.log(esPalindromo("Reconocer"));