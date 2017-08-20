'use strict'


function mnozenie(tablicaLiczb) {
    var iloczyn = 1;
    tablicaLiczb.forEach(function (element, index){
        iloczyn *= element; //iloczyn = iloczyn * element 
        }
    );
    // element - dany element w tablicy, na ktorym obecnie znajduje sie petla (dla pierwszego obiegu jest to pierwszy element, lda drugiego obiegu drugi element tablicy itd)

    // index - indeks danego elementu w tablicy, na ktorym obecnie znajduje sie petla (dla pierwszego elementu jest to indeks 0, dla drugiego obiegu jest to indeks 1 
    return iloczyn;
}

var tablica = [4, 5, 10, 8];
console.log(mnozenie(tablica));