// 1 - Sopra alla griglia deve esserci un contatore che conta quanti rossi e quanti verdi sono stati scoperti;
// 2 - generazione dinamica,  random,  della griglia (anche qui potrei scomporre in 2 problemi,
//     prima mi preoccupo di come generala da js e poi in caso, come rendere random la distribuzione dei rettangoli rossi).

$( document ).ready(function() {

  var creazioneDiv;
  var classiQuadrati = [];
  var noRipetizione = [];
  var z = [];
  var x;
  var quadratiRossi = 0;
  var quadratiVerdi = 0;

  // creazione funzione per creare 49 div in html per poi riusare in seguito
  function myfunction(n, t) {
    x = n - t;
    for (var i = 0; i < x; i++) {
      var verdi = $(document.createElement("div")).appendTo("#general");
      classiQuadrati.push(verdi);
    }
  }

  console.log(classiQuadrati);

  // chiamata della funzione
   myfunction(64, 15);

  // creazione funzione per creare 15 div
  function myfunctionRed(n) {
    for (var i = 0; i < n; i++) {

      var rossi = $(document.createElement("div")).appendTo("#general");
      classiQuadrati.push(rossi);
    }
  }

  // chiamata della funzione
  myfunctionRed(15);

  // for per creare array con numeri casuali all'interno
  for (var i = 0; i < classiQuadrati.length; i++) {
    var randomClass = Math.floor(Math.random() * (classiQuadrati.length));

    while (noRipetizione.includes(randomClass)) {
      randomClass = Math.floor(Math.random() * (classiQuadrati.length));
    }
      noRipetizione.push(randomClass);


  }
  console.log(noRipetizione);

  // for per inserire a 49 div la classe green
  for (var l = 0; l < 49; l++) {
    var y = noRipetizione[l];
    $(classiQuadrati[y]).addClass("green");
    z.push(y);
  }
 console.log(z);

 // for per inserire a 15 div la classe red
  for (var h = 0; h < noRipetizione.length; h++) {
    var t = noRipetizione[h];

    if (!z.includes(t)) {
      $(classiQuadrati[t]).addClass("red");
    }
  }

  // bacground al click del singolo elemento
  $("div .green").click(function() {
    $(this).css("background", "green");
    quadratiVerdi = quadratiVerdi + 1;
    $(".pointsGreen").text("Quadrati verdi = " + quadratiVerdi);
  });


  $("div .red").click(function() {
    $(this).css("background", "red");
    quadratiRossi = quadratiRossi + 1;
    $(".pointsRed").text("Quadrati rossi = " + quadratiRossi);
  });

});
