let boton = document.getElementById("boton")

boton.addEventListener("click" , recibirDatos)

function recibirDatos(event){
    event.preventDefault()

    let selector = document.getElementById("selector").value 
    let edad = document.getElementById("edad").value
    let cantidad = document.getElementById("cantidad").value

    if (edad >= 18) {

        if (selector == "1") {
        let total = 820000 * cantidad
        alert("Su compra sera de un total de $" + total)

        }
        else if (selector == "2") {
        let total = 950000 * cantidad
        alert("Su compra sera de un total de $" + total)

        }
        else if (selector == "3") {
        let total = 200000 * cantidad
        alert("Su compra sera de un total de $" + total)

        }
        else {
        let total = 1500000 * cantidad
        alert("Su compra sera de un total de $" + total)

        }


    }

    else{
        alert("Eres menor de edad, no puedes comprar")
    }
}