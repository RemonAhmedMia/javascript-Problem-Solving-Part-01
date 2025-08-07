//  01:Math.round
 
//  Math.round(x) কী করে?
// এটি যেকোনো দশমিক সংখ্যা (float) কে কাছাকাছি পূর্ণসংখ্যায় রাউন্ড করে দেয়।

// Rules:
// যদি দশমিকের পরের সংখ্যা 0.5 বা তার বেশি হয়, তাহলে উপরের পূর্ণসংখ্যা নেয়।
// যদি 0.5-এর কম হয়, তাহলে নিচের পূর্ণসংখ্যা নেয়।

// Example=============

console.log(Math.round(4.3)); // Output: 4 [4.3 = নিচের দিকে রাউন্ড হয় = 4]
console.log(Math.round(4.6)); // Output: 5 [4.6 = উপরের দিকে রাউন্ড হয় = 5]
console.log(Math.round(7.5)); // Output: 8 [7.5 = ঠিক মাঝখানে = উপরে রাউন্ড হয় = 8]
console.log(Math.round(9.49)); // Output: 9
console.log(Math.round(9.5)); // Output: 10



// 02:Math.floor========

// Math.floor(x) কী?
// Math.floor() হলো JavaScript-এর একটি built-in ফাংশন
// এটি কোনো দশমিক সংখ্যা (float) কে নিচের দিকে (floor মানে নিচে) পূর্ণসংখ্যায় রাউন্ড করে দেয়

// **দশমিক যাই থাকুক না কেন (0.1, 0.9, 0.00001), সবসময় নিচের পূর্ণসংখ্যা নেয়

// Example===
// যত বড় দশমিকই থাকুক, সে কেবল নিচের পূর্ণসংখ্যা টাকেই নিবে।

console.log(Math.floor(4.9)); // Output: 4
console.log(Math.floor(4.1)); // Output: 4
console.log(Math.floor(4.0)); // Output: 4
console.log(Math.floor(7.99)); // Output: 7
console.log(Math.floor(12.3)); // Output: 12


// 03:Math.ceil(x)===========

// Math.ceil() হলো JavaScript-এর built-in function
// এটা যেকোনো দশমিক সংখ্যা কে উপরের দিকের (ceiling = ছাদ) পূর্ণসংখ্যায় রাউন্ড করে দেয়।

// Rules:দশমিকের পর যত ছোট সংখ্যাই থাকুক না কেন (0.0001 হোক বা 0.9), এটা সবসময় উপরের পরের পূর্ণসংখ্যায় রাউন্ড করবে।

// Example========

console.log(Math.ceil(4.1));  // Output: 5
console.log(Math.ceil(4.9));  // Output: 5
console.log(Math.ceil(7.01)); // Output: 8
console.log(Math.ceil(12.0001)); // Output: 13


// 04:Math.random()============

// Math.random() হলো JavaScript-এর একটি built-in function
// এটা 0 আর 1-এর মাঝখানের যেকোনো র‍্যান্ডম দশমিক সংখ্যা রিটার্ন করে।
// রেঞ্জ: 0 ≤ result < 1

// Example++==========

console.log(Math.random());
// Output হতে পারে: 0.7345325627 (প্রতি বার ভিন্ন হবে)
// প্রতিবার Math.random() চালালে আলাদা সংখ্যা পাবে — কারণ এটা র‍্যান্ডম।

// **যদি তুমি চাও 1 থেকে 10 এর মধ্যে র‍্যান্ডম সংখ্যা?
const randomNum = Math.random() * 10;
console.log(randomNum);
// Output হতে পারে: 7.23423 (1 থেকে 10 এর মাঝামাঝি দশমিক সংখ্যা)


// 05:Math.pow(base, power)============

// **এটি কোনো সংখ্যার power (ঘাত) বের করে।

// Math.pow(2, 3) = মানে হলো 2^3 => 2 × 2 × 2 = 8


// Example============

console.log(Math.pow(2, 3));  // Output: 8
console.log(Math.pow(5, 2));  // Output: 25
console.log(Math.pow(10, 0)); // Output: 1


// 06:Math.sqrt(x)============

// এটি square root (বর্গমূল) বের করে।
// Math.sqrt(25) = 5
// Math.sqrt(81) = 9


// Example===============

console.log(Math.sqrt(25));  // Output: 5
console.log(Math.sqrt(64));  // Output: 8
console.log(Math.sqrt(1));   // Output: 1
console.log(Math.sqrt(2));   // Output: 1.4142135...
