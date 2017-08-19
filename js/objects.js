/*'use strict';

var Wojtek = {
    imie: "Wojtek",
    wzrost: 181,
    przedstawOsobe: function() {
       console.log("Cześć jestem " + this.imie + ", mam " + this.wzrost + " wzrostu.");
    }
}

var Kaja = {
    imie: "Kaja",
    wzrost: 160,
    przedstawOsobe: function() {
       console.log("Cześć jestem " + this.imie + ", mam " + this.wzrost + " wzrostu.");
    }
}

console.log(Wojtek.imie);
console.log(Wojtek.wzrost);



console.log(Wojtek["imie"]);
console.log(Wojtek["wzrost"]);

Wojtek.przedstawOsobe();

console.log(Kaja.imie);
console.log(Kaja.wzrost);


console.log(Kaja["imie"]);
console.log(Kaja["wzrost"]);

Kaja.przedstawOsobe();*/

class Osoba {
     constructor(imie, nazwisko) {
         this.imie = imie;
         this.nazwisko = nazwisko;
         this.wzrost;
         this.oczy;
     }
     
    wyswietlInfo() {
           console.log("Imię: " + this.imie + "\n"
                      + "Nazwisko: " + this.nazwisko + "\n"
                       + "Wzrost: " + this.wzrost + "\n"
                       + "Oczy: " + this.oczy);
        }
}

var wojtek = new Osoba( "Wojtek", "Potocki");

wojtek.wzrost = 180;
wojtek.oczy = "niebieskie";

console.log(wojtek);


var karol = new Osoba("Karol", "Młodawski");
wojtek.wyswietlInfo();
karol.wyswietlInfo();