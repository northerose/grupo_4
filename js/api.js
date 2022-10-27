function getDatos () {
    var resultado = [];
    // Simple response handling
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
        return response.json();
    }).then(function(resultado) {
        // Yay, `j` is a JavaScript object
        // console.log(j); 
        let elem = document.querySelector ( '.tabla_rest' )
        for (res in resultado) {
            titulo = resultado[res].title
            elem.innerHTML = elem.innerHTML +  '<tr>'+titulo+'</tr><br>';
        }
    });
}

getDatos()