

function getTotal(numbers) {
    let total_total = 0;
    let totals = [];

    for (let i = 0; i<numbers.length; i++) {
        let t = 0;
        for (let j=0; j<numbers[i].length; j++) {
            t += numbers[i][j];
        }
        total_total+=t;
        totals.push(t);
    }
    console.log(totals, total_total);
}

function genNums(x, y) {

    var numbers = [];
    console.log(x,y);
    for (let i = 0; i<y; i++) {
        let arr = [];
        for (let j = 0; j<x; j++) {
            arr.push(Math.floor(Math.random() * 6) + 1);
        }
        numbers.push(arr); 
}   
    console.log(numbers);
    getTotal(numbers);

}
function check() {
    var x = document.getElementById("x");
    var y = document.getElementById("y");
    if (x.value!="" && y.value!="") {
        genNums(parseInt(x.value),parseInt(y.value));
    }
    
}
