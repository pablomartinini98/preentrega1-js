// tallas con las que trabajamos 
let tallasDisponibles = ["XS", "S", "M", "L", "XL"];

function simuladorLenceria() {
    // solicitamos al usuario que ingrtese su talla
    let tallaUsuario = prompt("Por favor, ingrese su talla de lencería (XS, S, M, L, XL):");

    // Aca se puede verificar si la talla ingresada está en la lista de tallas disponibles
    let tallaValida = false;

    for (let i = 0; i < tallasDisponibles.length; i++) {
        if (tallasDisponibles[i] === tallaUsuario) {
            tallaValida = true;
            break;
        }
    }

    if (tallaValida) {
        switch (tallaUsuario) {
            case "XS":
                console.log("Excelente elección, tenemos lencería en talla XS.");
                break;
            case "S":
                console.log("Perfecto, tenemos lencería en talla S.");
                break;
            case "M":
                console.log("Genial, tenemos lencería en talla M.");
                break;
            case "L":
                console.log("Estupendo, tenemos lencería en talla L.");
                break;
            case "XL":
                console.log("Buenísimo, tenemos lencería en talla XL.");
                break;
            default:
                console.log("¡Algo salió mal! No se reconoció la talla.");
        }
    } else {
        console.log("Lo sentimos, la talla ingresada no está disponible en este momento.");
    }
}

// aca llamamos a la funcion para iniciar el simulador de lenbceria 
simuladorLenceria();