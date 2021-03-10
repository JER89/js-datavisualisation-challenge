// CANVAS
let canvas1 = document.createElement("canvas");
let body = document.getElementById("bodyContent");
canvas1.id = "chart1";
body.insertBefore(canvas1, body.childNodes[0]);

// CANVAS 2
let canvas2 = document.createElement("canvas");
canvas2.id = 'chart2';
let body2 = document.querySelector('#table1 > caption');
body2.insertBefore(canvas2, body2.childNodes[0]);

// CANVAS 3
let canvas3 = document.createElement('canvas');
canvas3.id = 'chart3';
canvas3.style.height = "420px"
let body3 = document.querySelector('#table2 > caption');
body3.insertBefore(canvas3, body3.childNodes[0]);

// DATAS
let datas = document.getElementsByTagName("td");

// ARRAY CHART 1
let result = 0;
let chart1data = getData()
let xData = [];
let yData = [];
chart1data.then(promise => {
    for(let i = 0; i< promise.length ; i++){
        yData.push(parseInt(promise[i][1]));
        //console.log(promise[i][1])
        // xData.push((promise[i][0]).toString());
    }
})

// FUNCTION RANDOM RGB 
function rgb() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    return 'rgb(' + r + ', ' + g +', ' + b +')';
}

// FUNCTION AJAX
async function getData() 
        {
            //await the response of the fetch call
           let response = await fetch('https://canvasjs.com/services/data/datapoints.php');
            //proceed once the first promise is resolved.
           let data = await response.json()
            //proceed only when the second promise is resolved
            return data;
        }

// DATAS LOCATOR CHART 1
//const table1 = document.getElementById("table1")
// function loopData(ctx){
    const labels = [];
    let stats = [];
    let data = [];
    for(let z =2; z < table1.rows.length ; z++){
        let countries = {
            label : table1.rows[z].cells[1].innerHTML,
            
        };
        labels.push(countries)
        for(let i =2; i < table1.rows.length ; i++){
                let stats = {
                stat : table1.rows[z].cells[i],
                
            };
            if(stats.stat != undefined){
                console.log(stats.stat.innerHTML)
            }
        }
    }
//}
//loopData()