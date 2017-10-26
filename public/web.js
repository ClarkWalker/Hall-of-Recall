$(document).ready(function(){
  $('.collapsible').collapsible();
});

 //selecting the form by id
var fact = document.getElementById('generateQuote');
  //add event listener for the button click
fact.addEventListener('click', function(event) {
  //prevent reset
  event.preventDefault();
  //establish URL formula
  var url = "https://galvanize-cors-proxy.herokuapp.com/https://api.tronalddump.io/random/quote";
  //fetch the API and return json
  fetch(url)
  .then(function(response) {
    return response.json()
    .then(function(allData) {
      var quoteTrump = allData.value;
    console.log(quoteTrump);
      alert(quoteTrump);
    });
  });
});
