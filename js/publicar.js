    const parametros = new URLSearchParams(window.location.search)

    sexo = parametros.get("sexo")
    edad = parametros.get("edad")
    nombre_mascota = parametros.get("nombre_mascota")
    tamano_final = parametros.get("tamano_final")
    responsable = parametros.get("responsable")
    telefono = parametros.get("telefono")
    ciudad = parametros.get("ciudad")
    ubicacion = parametros.get("ubicacion")
    descripcion = parametros.get("descripcion")
    desparasitado = parametros.get("desparasitado")
    vacunado = parametros.get("vacunado")
    castrado = parametros.get("castrado")

    document.getElementById("sexo").innerHTML = sexo
    document.getElementById("edad").innerHTML = getEdad(edad)
    document.getElementById("nombre_mascota").innerHTML = nombre_mascota
    document.getElementById("tamano_final").innerHTML = tamano_final
    document.getElementById("responsable").innerHTML = responsable
    document.getElementById("telefono").innerHTML = telefono
    document.getElementById("ciudad").innerHTML = ciudad
    document.getElementById("ubicacion").innerHTML = ubicacion
    document.getElementById("descripcion").innerHTML = descripcion
    document.getElementById("desparasitado").checked = Boolean(desparasitado)
    document.getElementById("vacunado").checked = Boolean(vacunado)
    document.getElementById("castrado").checked = Boolean(castrado)

   
 
    function getEdad(dateString) {
        var today = new Date();
        var fecha_nacimiento = new Date(dateString);
        var edad = today.getFullYear() - fecha_nacimiento.getFullYear();
        var m = today.getMonth() - fecha_nacimiento.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < fecha_nacimiento.getDate())) {
            edad--;
        }
        if (edad > 1) {
            edad = edad + " años"
        } else if (edad == 1) {
            edad = edad + " año"
        } else {
            edad = "Menos de un año"
        }
        return edad;
    }