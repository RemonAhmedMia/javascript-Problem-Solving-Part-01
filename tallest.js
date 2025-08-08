const heightOne = [30, 60, 90, 45, 78, 91, 20, 71];

function getmax(numbers) {
    let max = numbers[0];
    for (const num of numbers) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}

const maxHeight = getmax(heightOne);
console.log(maxHeight); // Output: 91



const height = [30, 60, 90, 45, 78, 91, 20, 71];

function getmin(numbers) {
    let min = numbers[0]; // শুরুতে ধরে নিচ্ছি প্রথম সংখ্যাটাই সবচেয়ে ছোট
    for (const num of numbers) {
        if (num < min) {  // যদি কোনো সংখ্যা min-এর চেয়ে ছোট হয়
            min = num;    // তাহলে সেটাকেই নতুন min ধরি
        }
    }
    return min; // সব চেয়ে ছোট সংখ্যাটা return করি
}

const minHeight = getmin(height);
console.log(minHeight); // Output: 20
