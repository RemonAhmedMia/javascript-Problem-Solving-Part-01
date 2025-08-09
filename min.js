const values = [20000 , 320000, 1000000, 16500, 25000, 7000, 6500];
function getMin(value) {
    let min = value[0];
    for(const num of value) {
        if(num < min){
            min = num;
        }
    }
    return min
}
const cheap = getMin(values);
console.log(cheap);
