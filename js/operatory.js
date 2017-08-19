'use strict';

var liczba1 = 13, liczba2 = 5;

var wynik;

wynik = liczba1 % liczba2;

console.log("krok 1: " + wynik); //3
console.log("krok 2: " +  ++wynik); //3
console.log("krok 3: " + wynik); //4

console.log("krok 1: " + wynik); //3
console.log("krok 2: " + wynik++); //3
console.log("krok 3: " + wynik); //4


liczba1 += 8; /*liczba1 = liczba1 + 8;*/

var tekst = "Wojtek";
tekst += " Potocki";
console.log(tekst);

console.log("************************");

var liczba = 10;
var tekst = "10";

console.log(liczba1 ==liczba2);
console.log(liczba === tekst);

console.log(13 == 5 || liczba == tekst);

(2<5) ? console.log("tak") : console.log("nie");


