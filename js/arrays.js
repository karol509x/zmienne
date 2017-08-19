'use strict'

var imiona = ["Monika", "Krystian", "Łukasz"];
console.log(imiona);

imiona[3] = "Maria";
console.log(imiona);

imiona[2] = "Ela";
console.log(imiona);

var ileElementow  = imiona.push("Geralt");
console.log(imiona);
console.log(ileElementow);

var usunietyElement = imiona.pop();
console.log(imiona);
console.log(usunietyElement);

console.log(imiona.unshift("Robert"));

console.log(imiona.shift());
console.log(imiona);

console.log("Ilość elementów w tablicy: " + imiona.length);

var imie = "Adam";
console.log(imie[0]); /* pokazuje litera np.: pierwsza */

console.log("===================");
console.log(imiona);
console.log(imiona.join()); /*Standardowa rozdziela przecinkiem*/

console.log("===================");
console.log(imiona.reverse());

console.log("===================");
imiona.sort();
console.log(imiona);

var imionaMeskie = ['Wojtek', 'Michał', 'Andrzej'];
var zbiorImion = imionaMeskie.concat(imiona);
console.log(zbiorImion);
console.log("Tablica imion meskich: " + imionaMeskie);


console.log(zbiorImion.indexOf("Michał")); /*zwraca index pod którym sie znajduje*/

console.log(Array.isArray(zbiorImion)); /*sprawdza czy zbiór imion jest tablica - zwraca true/false*/

console.log(zbiorImion.slice(2,5)); /*wycina podane elementy w przedziale <2,5)*/
console.log(zbiorImion);

zbiorImion.splice(2, 3, "Zenek", "Grzegorz", "Ania"); /*usuwa elementy na stałe włącznie z 2/ jeden parametr usuwa wszystkp od niego do konca/ druga liczab okresla ilosc elementow do usuniecia/ funkcja dodaje rowniez nowe elementy*/
console.log(zbiorImion);

console.log(zbiorImion.toString());