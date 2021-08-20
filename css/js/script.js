(document.getElementById("botaoEnviar").addEventlistener("click", validaFormulario)

function validaFormulario(){
  
 if(document.getElementById("nome").value != "" &&          
    document.getElementById("email").value != "" && 
    document.getElementById("Telefone").value != "" ) {
     alert("Prontinho! você receberá as novidades por email.")
 }else{
    Alert("por favor, preencha os campos nome e email")
 }


}

 