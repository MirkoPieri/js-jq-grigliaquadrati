// Creare una griglia formata da 8x8 quadratini tutti bianchi.
// 15 di questi quadratini (scelti a caso all’inizio) se cliccati diventano rossi, gli altri diventano verdi

$( document ).ready(function() {

  // definizione per click su quadrati con sfondo verde
  $("div .green").click(function() {
    $(this).css("background", "green");
  });

  // definizione per click quadrati sfondo rosso
  $("div .red").click(function() {
    $(this).css("background", "red");
  });


});
