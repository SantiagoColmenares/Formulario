// caputura de la variable
const ficha = document.getElementById("ficha");
const boderR = document.getElementsByClassName("border--red")


const borderG


const validar = function () {
  let reg = /^[a-zA-z]{3}_[0-9]{5}$/;
  reg.test(ficha.value) ? alert("Entramos") : alert("Esta mal")
}



ficha.addEventListener("blur", validar);