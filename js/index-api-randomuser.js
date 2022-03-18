//Declaración de variables
let src ="";
const imageClienteRandomUser = document.getElementById("imageClienteRandomUser");
const nombreClienteRandomUser = document.getElementById("nombreClienteRandomUser");

//consumir api randomuser para representar un cliente.
$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
    src = data.results[0].picture.large;
    imageClienteRandomUser.setAttribute("src",src);
    nombreClienteRandomUser.textContent = data.results[0].name.first;
  }
});