const mobiles = [
    {
        name : "Samsung",
        price : 2000000,
        camera : "120mp",
        color : "black",
    },

    {
        name : "Apple",
        price : 23000000,
        camera : "120mp",
        color : "black",
    },

    {
        name : "Walton",
        price : 31000,
        camera : "120mp",
        color : "black",
    },
    {
        name : "Oppo",
        price : 40000,
        camera : "120mp",
        color : "black",
    },
];

function getCheapesPhones(phones){
    let min = phones[0];
    for(const phone of phones) {
        if (phone.price < min.price) {
            min = phone
        }
    }
    return min
}
const cheapest  = getCheapesPhones(mobiles);
console.log(cheapest );
