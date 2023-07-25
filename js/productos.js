/*const producto = async() =>{

  const respuesta = await fetch('http://localhost/aluraweek/db.json');
  
  
    console.log(respuesta);

}

    productos();*/

var formularios = document.getElementById('formularios');

    formularios.addEventListener('submit', function(e){
        e.preventDefault();
       
    
        var valor = new FormData(formularios)
        console.log(valor)
        console.log(valor.get('Url'))
        console.log(valor.get('categoria'))
        console.log(valor.get('nombreProd'))
        console.log(valor.get('precioProd'))
        console.log(valor.get('comentarios'))
    
        /*fetch('post.php'{
            method: POST,
            body: datos
        })
            .then(res => res.json())
            .then( data => {
                console.log(data)
            })*/
    
    })



 