// Dhori amader kache 3 jon ache amra check korbo kar number beshi

const rim = 40;
const jim = 90;
const tim = 80;

if (rim > jim && rim > tim) {
    console.log("Rim is The Ultimate Boss");
} else if (jim > rim && jim > tim){
    console.log("Jim Is The Ultimate Boss");
} else {
    console.log("Tim is The Final Boss");
}

// আউটপুট : রিম ইস দ্যা আনলিমিডেট বস, প্রথমে আমরা চেক করবো রিম, জিম আর টিম থেকে বড় কিনা,যদি বড় হয় তাহলে এখানেই থেমে যাবে, আর যদি বড় না হয় আমরা চেক করবো জিম, রিম আর টিম থেকে বড় কিনা, যদি সেটাও বড় না হয় তাহলে টিম সবার থেকে বড় হবে


// Ekhn eita k Function e chalabo

function maxThree(name1 , name2, name3) {
    if (name1 > name2 && name1 > name3) {
        return name1;
    } else if (name2 > name1 && name2 > name3) {
        return name2;
    } else {
        return name3
    }
}
const maxwin = maxThree(90, 70, 80);  //কিন্তু function এর ভিতরে যা কাজ হচ্ছে, সেটা number compare করার logic।
 console.log(maxwin);


//  Shortcut:চাইলে এটা আরো ছোট করে লিখতে পারো JavaScript এর Math.max() দিয়ে:

const maxwins = Math.max(90, 70, 80);  //এখানে যতবেশি সংখ্যা দাও না কেনো যেটা বেশি সেটাই দেখাবে
console.log(maxwins); // Output: 90
