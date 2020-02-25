
function existencia(){
if (getCookie()){
    document.getElementById("final").style.display="block";
    document.getElementById("registrarse").style.display="none";
    document.getElementById("logearse").style.display="none";
    document.getElementById("inicial").style.display="none";
}
else {
    return false;
}
}





function mostrarContra(){
    var mostrar = document.getElementById("ContLog");

    if (mostrar.type =="password"){
        mostrar.type ="text";
    }
    else{
        mostrar.type ="password";
    }

}

document.getElementById("logear").addEventListener("click",function(){
    document.getElementById("logearse").style.display="block";
    document.getElementById("registrarse").style.display="none";
    document.getElementById("inicial").style.display="none";
    document.getElementById("final").style.display="none";
});

document.getElementById("alta").addEventListener("click",function(){
    document.getElementById("registrarse").style.display="block";
    document.getElementById("logearse").style.display="none";
    document.getElementById("inicial").style.display="none";
    document.getElementById("final").style.display="none";
});
document.getElementById("final").addEventListener("click",function(){
    document.getElementById("final").style.display="block";
    document.getElementById("registrarse").style.display="none";
    document.getElementById("logearse").style.display="none";
    document.getElementById("inicial").style.display="none";
});

document.getElementById("enviar1").addEventListener("click",validar)

function validarPass(){
    var p1 = document.getElementById("contraseña").value;
    var expresion=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
    
    if(!expresion.test(p1)){
        document.getElementById("p").innerHTML="Formato de contraseña incorrecto";
        return false;
    }
    setCookie("Contraseña",p1,1);
    return true;
}


function validarPass2(){
    var p1 = document.getElementById("contraseña").value;
    var p2 = document.getElementById("repetir").value;
    
    if (p1 != p2) {   
        document.getElementById("p").innerHTML="Contraseñas no coinciden";
        return false;
    }
  
    return true;
}

function validarMail(){
    var correo=document.getElementById("email").value;
    var expresion=/\w+@\w+\.+[a-z]/;
    var expresion2= /^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/;
    
    if(expresion.test(correo)||expresion2.test(correo)){
          setCookie("Correo",correo,1);
    
        return true;
    }
  
    document.getElementById("p").innerHTML="Formato de email incorrecto";
    return false;
    
}



function validar(e){
    if(validarMail() && validarPass() && validarPass2()){
        //Esto es para activar un mensaje de SE HA REGISTRADO CORRECTAMENTE
        document.getElementById("logearse").style.display="block";
        document.getElementById("p").style.display="none";
        document.getElementById("registrarse").style.display="none";
        document.getElementById("d").innerHTML="Se ha registrado correctamente";
        return true;    
    }
    else{
        e.preventDefault();
        
        return false;
    }
    
}


function validarMailito(){
    var correo=document.getElementById("email2").value;
    var expresion=/\w+@\w+\.+[a-z]/;
    var expresion2= /^[9|6]{1}([\d]{2}[-]*){3}[\d]{2}$/;
    
    if(expresion.test(correo)||expresion2.test(correo)){
          setCookie("Correo",correo,1);
        return true;
    }
    
    document.getElementById("p").innerHTML="Email no valido";
    return false;
}
function validarPassito(){
    var p1 = document.getElementById("ContLog").value;
    var expresion=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
    
    if(!expresion.test(p1)){
        document.getElementById("p").innerHTML="Contraseña no valida";
        return false;
    }
        setCookie("Contraseña",p1,1);
        return true;
    
}

function conectar(){
    if(validarMailito() && validarPassito()){
        document.getElementById("final").style.display="block";
        document.getElementById("registrarse").style.display="none";
        document.getElementById("inicial").style.display="none";
        document.getElementById("logearse").style.display="none";
        return true;
}
else{
    document.getElementById("p").innerHTML="Email o contraseña no validos";
    return false;
}
}

document.getElementById("enviar2").addEventListener("click", conectarse);

function conectarse(){
    document.getElementById("d").style.display="none";
    var c1=document.getElementById("email2").value;
    var c2=document.getElementById("email").value;
    var p1 = document.getElementById("contraseña").value;
    var p2=document.getElementById("ContLog").value;

    if (c1==c2&&p1==p2){
        document.getElementById("p").style.display="none";
        document.getElementById("final").style.display="block";
        document.getElementById("registrarse").style.display="none";
        document.getElementById("inicial").style.display="none";
        document.getElementById("logearse").style.display="none";
    }

    else if (c1==c2&&p1!=p2) {
        document.getElementById("p").style.display="block";
        document.getElementById("p").innerHTML="Contraseña erronea";
        return false;
    }
    else if (c1!=c2&&p1==p2) {
        document.getElementById("p").style.display="block";
        document.getElementById("p").innerHTML="Email erroneo";
        return false;
    }
    else {
        document.getElementById("p").style.display="block";
        document.getElementById("p").innerHTML="Email y contraseña erroneos";
        return false;
    }

}

document.getElementById("paradesconectarse").addEventListener("click",desconectar)

function desconectar(){
    
    deleteCookie("Correo");
    deleteCookie("Contraseña");
    /*document.getElementById("f1").reset();
    document.getElementById("f2").reset();
    document.getElementById("f3").reset();
    document.getElementById("log").style.display="block";
    document.getElementById("conect").style.display="none";
    document.getElementById("c").innerHTML="Se ha desconectado con éxito";
    document.getElementById("c").className="confirm";
    document.getElementById("mensajeError").style.display="none";*/
    
}

    

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function deleteCookie(cname){
      return document.cookie = cname + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }


  
