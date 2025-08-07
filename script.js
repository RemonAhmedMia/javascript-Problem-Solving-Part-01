// Problem-01==============
//Suppose teacher bollo tumader moddhe j beshi mark pabe tare ami Apple khawabo;

const rimon = 80;
const faruk = 79;

if (rimon > faruk) {
    console.log("Rimon Will Get The Apple");
} else {
    console.log("Faruk Will Get The Apple");
}

// Same Problem ta amra function e chalaile===========

function maxGift(num1 , num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
 const max = maxGift (80 , 79);
 console.log(max); // The Final Output Is 80