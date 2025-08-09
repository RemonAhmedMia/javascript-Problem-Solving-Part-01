const products = [ 
    {name : "Shamp00" , price : 550,},
    {name : "makeUp" , price : 5550,},
    {name : "Shoes" , price : 3550,},
    {name : "watch" , price : 1550,},
    {name : "Sunglases" , price : 950,},
    {name : "Churuni" , price : 250,},
    {name : "Dress" , price : 9750,},
];

function getProductsPrice(products) {
    let sum = 0;
    for(const product of products) {
        sum = sum + product.price
    };
    return sum;
}
const getTotal = getProductsPrice(products);
console.log(getTotal);
