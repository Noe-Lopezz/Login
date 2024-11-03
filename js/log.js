function login(){

    let email=document.getElementById('idusua').value;
    let password=document.getElementById('idcon').value;

 
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {


    window.open("main.html", "_self");

  })
  .catch((error) => {
 alert("Error al iniciar sesión:"+error);
  });

}

function logout(){

}