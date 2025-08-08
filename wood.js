function woodQuantity ( chairQuality , tableQuality , bedQuality) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuality * perChairWood;
    const tableTotalWood = tableQuality * perTableWood;
    const bedTotalWood = bedQuality * perBedWood;

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood ;
     return totalWood;
}

const wood = woodQuantity(0 , 0 , 2);  //Output:100
console.log(wood);
