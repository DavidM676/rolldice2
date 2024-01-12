let data = [];
let dataTotal = {};

function generateTable(data) {  
    let table = '<table>';  
    table += '<tr><th>Name</th><th>Age</th><th>Email</th></tr>';  
    data.forEach(item => {  
    table += `<tr><td>${item.name}</td><td>${item.age}</td><td>${item.email}</td></tr>`;  
    });  
    table += '</table>';  
    return table;  
}

function getFreq(numbers) {
    let freq_freq = [0,0,0,0,0,0];
    let freqs = [];
    for (let i = 0; i<numbers.length; i++) {
        freqs.push([0,0,0,0,0,0]);
        for (let j=0; j<numbers[i].length; j++) {
            freqs[i][numbers[i][j]-1]+=1;
            freq_freq[numbers[i][j]-1]+=1;
        }
    }
    return [freqs, freq_freq];
}

function getModeTotal(freq_freq) {
    console.log("FF", freq_freq)
    let c = freq_freq[0];
    for (let i = 0; i<freq_freq.length; i++) {
        if (freq_freq[i]>c) {
            c=freq_freq[i];
        }
    }
    
    return [freq_freq.indexOf(c), c];
     
}

function getDoubles(numbers) {
    let c = 0;
    for (let i = 0; i<numbers.length; i++) {
        let c2 = 0;
        if (numbers[i][0]==numbers[i][1] || numbers[i][0]==numbers[i][2] || numbers[i][2]==numbers[i][3]) {
            c+=1;            
        }

    }
    return c;
}

function getTriples(numbers) {
    let c = 0;
    for (let i = 0; i<numbers.length; i++) {
        if (numbers[i][0]==numbers[i][1]==numbers[i][2]) {
            c+=1;
        }
    }
    return c;
}

function getMean(totals, total_total, numbers) {
    let mean_mean = 0;
    let means = [];

    for (let i = 0; i < totals.length; i++) {
        means.push(totals[i]/numbers[i].length);
    }

    xy = numbers[0].length*numbers.length;
    mean_mean = total_total/xy;

    return [means, mean_mean];
}

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

    return [totals, total_total];
}

function getSpecs(numbers) {
    for (let i = 0; i<numbers.length; i++) {
        data.push({});
    }
    
    a = getTotal(numbers);
    dataTotal["total"]=a[1];

    for (i = 0; i<a[0].length; i++) {
        data[i]["total"] = a[0][i];
    }

    b = getMean(a[0], a[1], numbers);
    dataTotal["mean"] = b[1];

    for (i = 0; i<b[0].length; i++) {
        data[i]["mean"] = b[0][i];
    }

    c = getFreq(numbers);
    dataTotal["frequency"] = c[1];

    for (i = 0; i<c[0].length; i++) {
        data[i]["frequency"] = c[0][i];
    }

    d = getDoubles(numbers)
    dataTotal["doubles"] = d;

    e = getTriples(numbers);
    dataTotal["triples"] = e;

    f = getModeTotal(c[1])
    console.log("this is f: ", f);
    dataTotal["Mode"] = f[0]

    console.log(data);
    console.log(dataTotal);

    const tableContainer = document.getElementById('table_container');  
    tableContainer.innerHTML = displayTotal(dataTotal);

    const tableContainer2 = document.getElementById('table_container2');  
    tableContainer2.innerHTML = displayRolls(data);
}

function displayTotal(dataTotal) {
    let table = '<table>';  
    table += '<tr><th>Total</th><th>Mean</th><th>Frequency</th><th>Doubles</th><th>Triples</th></tr>';  
    table += `<tr><td>${dataTotal["total"]}</td><td>${dataTotal["mean"].toFixed(2)}</td><td>${dataTotal["frequency"]}</td><td>${dataTotal["doubles"]}</td><td>${dataTotal["triples"]}</td></tr>`;  
    
    table += '</table>';  
    return table;  
}


function displayRolls(data) {
    let table = '<table>';  
    table += '<tr>><th>Roll #</th><th>Total</th><th>Mean</th><th>Frequency</th><th>Doubles</th><th>Triples</th></tr>';  
    for (let i = 0; i<data.length; i++) {
        roll = data[i]
        table += `<tr><td>${i+1}</td><td>${roll["total"]}</td><td>${roll["mean"].toFixed(2)}</td><td>${roll["frequency"]}</td><td>${roll["doubles"]}</td><td>${roll["triples"]}</td></tr>`;  
    }
    
    table += '</table>';  
    return table;  
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
    getSpecs(numbers);
    // getTotal(numbers);

}
function check() {
    var x = document.getElementById("x");
    var y = document.getElementById("y");
    if (x.value!="" && y.value!="") {
        genNums(parseInt(x.value),parseInt(y.value));

        // const tableContainer = document.getElementById('table_container');  
        // tableContainer.innerHTML = generateTable(data);  
    }
    
}
