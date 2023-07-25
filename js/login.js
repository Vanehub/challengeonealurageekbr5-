/*var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
   

    var datos = new FormData(formulario)
    console.log(datos)
    console.log(datos.get('email'))
    console.log(datos.get('pass'))

    /*fetch('post.php'{
        method: POST,
        body: datos
    })
        .then(res => res.json())
        .then( data => {
            console.log(data)
        })*/



  function validateEmail(){
                
                // Get our input reference.
                var emailField = document.getElementById('user-email');
                
                // Define our regular expression.
                var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

                // Using test we can check if the text match the pattern
                if( validEmail.test(emailField.value) ){
                    alert('El correo electrónico es válido, continúe con el envío del formulario');
                    return true;
                }else{
                    alert('El correo electrónico no es válido, omita el envío del formulario');
                    return false;
                }
            }