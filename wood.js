//Noton khat,chair , table lagle amader chair er koto tk, koto poriman egula lagle koita chair table lagbe oitar hisab korbo

function woodQuantity ( chairQuantity , tableQuantity , bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood ;
     return totalWood;
}

const wood = woodQuantity(0 , 0 , 2); //Koto ta chair , table, bed lagbe tar songkha  //Output:100
console.log(wood);


// তিনটা পণ্যের ইউনিট প্রাইস এবং কতোটা quantity লাগবে, সেটা দিয়ে মোট দাম বের কর।=============

function fasionQuantity(shirtQuantity , pantQuantity , shoesQuantity){
    const perShirtPrice = 400;
    const perPantPrice = 500;
    const perShoesPrice = 700;

    const shirtTotalPrice = perShirtPrice * shirtQuantity; //shirt er price * koita shirt lagbe|
    const pantTotalPrice = perPantPrice * pantQuantity;
    const shoesTotalPrice = perShoesPrice * shoesQuantity;

    const totalPrice = shirtTotalPrice + pantTotalPrice + shoesTotalPrice ;
    return totalPrice ;
}

const price = fasionQuantity(2 , 2, 1);
console.log(price);


// More Example===============

// ১. মার্কেটের মোট বিল হিসাব করা

function groceryBill(riceKg, oilLitre, eggsDozen) {
    const ricePrice = 70;
    const oilPrice = 160;
    const eggsPrice = 120;

    const riceTotalPrice = ricePrice * riceKg;
    const oilTotalPrice = oilPrice * oilLitre;
    const eggTotalprice = eggsPrice * eggsDozen;

    const shopTotalprice = riceTotalPrice + oilTotalPrice + eggTotalprice ;
    return shopTotalprice;

    // const total = (riceKg * ricePrice) + (oilLitre * oilPrice) + (eggsDozen * eggsPrice);
    // return total;
}
// console.log(groceryBill(5, 2, 1)); // Output: 790

const totalBill = groceryBill(5, 2, 1);
console.log(totalBill);  //output;790


// ২. ফ্রিল্যান্সার সার্ভিস প্যাকেজ ক্যালকুলেটর==============

function serviceCost(websites, logos, banners) {
    const websitePrice = 5000;
    const logoPrice = 1500;
    const bannerPrice = 800;

    return (websites * websitePrice) + (logos * logoPrice) + (banners * bannerPrice);
}
console.log(serviceCost(1, 2, 3)); // Output: 14600


// ৩. ক্লাস/কোর্সের মোট ফি হিসাব============

function courseFees(html, css, js) {
    const htmlFee = 1000;
    const cssFee = 1200;
    const jsFee = 2000;

    return (html * htmlFee) + (css * cssFee) + (js * jsFee);
}
console.log(courseFees(1, 1, 1)); // Output: 4200
