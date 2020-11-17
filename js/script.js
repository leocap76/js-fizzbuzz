//Scrivi un programma che stampi i numeri da 1 a 100,
//ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
//Prima di partire a scrivere codice poniamoci qualche domanda:
//Come faccio a sapere se un numero è divisibile per?
//Abbiamo visto qualcosa di particolare che possiamo usare?


for(var i = 0; i < 100; i++) {
//numeri che siano sia "modulo" di tre e di cinque; ex: 15-30
  if ((i % 3 == 0) && (i % 5 == 0)) {
     console.log('FIZZBUZZ');
     document.getElementById('numeri').innerHTML += '<li>' + FIZZBUZZ + '</li>';
   }
//numeri moduli di tre
   else if(i % 3 == 0) {
     console.log('FIZZ');
     document.getElementById('numeri').innerHTML += '<li>' + FIZZ + '</li>';
   }
//numeri moduli di cinque
   else if(i % 5 == 0) {
     console.log('BUZZ');
     document.getElementById('numeri').innerHTML += '<li>' + BUZZ + '</li>';
   }

   else {
     console.log(i);
     document.getElementById('numeri').innerHTML += '<li>' + i + '</li>';
   }
