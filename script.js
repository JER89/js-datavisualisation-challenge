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

// ARRAY CHART 2
let belgium = [];
let bulgaria = [];
let repCheq = [];
let danemark = [];
let allemagne = [];
let estonie = [];
let irlande = [];
let grèce = [];
let espagne = [];
let france = [];
let croatie = [];
let italie = [];
let chypre = [];
let lettonie = [];
let lituanie = [];
let luxembourg =[];
let hongrie =[];
let malte =[];
let paysBas =[];
let autriche =[];
let pologne =[];
let portugal =[];
let roumanie =[];
let slovenie =[];
let slovaquie =[];
let finlande =[];
let suede =[];
let islande =[];
let liechtenstein =[];
let norvege =[];
let suisse =[];
let montenegro =[];
let macedoine =[];
let serbie =[];
let turquie =[];

// ARRAY CHART 3
let belgium2 = [];
let bulgaria2 = [];
let repCheq2 = [];
let danemark2 = [];
let allemagne2 = [];
let estonie2 = [];
let irlande2 = [];
let grèce2 = [];
let espagne2 = [];
let france2 = [];
let croatie2 = [];
let italie2 = [];
let chypre2 = [];
let lettonie2 = [];
let lituanie2 = [];
let luxembourg2 =[];
let hongrie2 =[];
let malte2 =[];
let paysBas2 =[];
let autriche2 =[];
let pologne2 =[];
let portugal2 =[];
let roumanie2 =[];
let slovenie2 =[];
let slovaquie2 =[];
let finlande2 =[];
let suede2 =[];
let irlandeN = [];
let ecosse = [];
let pdg = [];


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
const table1 = document.getElementById("table1")
function loopData(ctx1){
    const labels = [];
    let stats = [];
    for(let z =0; z < table1.rows.length ; z++){
        let countries = {
            label : 0,
            stats : table1.rows[z]
            
        };
        //console.log(table1.rows[z].cells[1].innerHTML)
        // console.log(table1.rows[z].cells[2])
    }
}
loopData()

// DATAS LOCATOR CHART 2
for(let x = 1 ; x < datas.length; x++){
    if(x<12){
        belgium.push(parseFloat(datas[x].innerHTML))
    } else if (x > 12 && x < 24){
        bulgaria.push(parseFloat(datas[x].innerHTML))
    } else if (x > 24 && x < 36){
        repCheq.push(parseFloat(datas[x].innerHTML))
    } else if (x > 36 && x < 48){
        danemark.push(parseFloat(datas[x].innerHTML))
    } else if (x > 48 && x < 60){
        allemagne.push(parseFloat(datas[x].innerHTML))
    } else if (x > 60 && x < 72){
        estonie.push(parseFloat(datas[x].innerHTML))
    } else if (x > 72 && x < 84){
        irlande.push(parseFloat(datas[x].innerHTML))
    } else if (x > 84 && x < 96){
        grèce.push(parseFloat(datas[x].innerHTML))
    } else if (x > 96 && x < 108){
        espagne.push(parseFloat(datas[x].innerHTML))
    } else if (x > 108 && x < 120){
        france.push(parseFloat(datas[x].innerHTML))
    } else if (x > 120 && x < 132){
        croatie.push(parseFloat(datas[x].innerHTML))
    } else if (x > 132 && x < 144){
        italie.push(parseFloat(datas[x].innerHTML))
    } else if (x > 144 && x < 156){
        chypre.push(parseFloat(datas[x].innerHTML))
    } else if (x > 156 && x < 168){
        lettonie.push(parseFloat(datas[x].innerHTML))
    } else if (x > 168 && x < 180){
        lituanie.push(parseFloat(datas[x].innerHTML))
    } else if (x > 180 && x < 192){
        luxembourg.push(parseFloat(datas[x].innerHTML))
    } else if (x > 192 && x < 204){
        hongrie.push(parseFloat(datas[x].innerHTML))
    } else if (x > 204 && x < 216){
        malte.push(parseFloat(datas[x].innerHTML))
    } else if (x > 216 && x < 228){
        paysBas.push(parseFloat(datas[x].innerHTML))
    } else if (x > 228 && x < 240){
        autriche.push(parseFloat(datas[x].innerHTML))
    } else if (x > 240 && x < 252){
        pologne.push(parseFloat(datas[x].innerHTML))
    } else if (x > 252 && x < 264){
        portugal.push(parseFloat(datas[x].innerHTML))
    } else if (x > 264 && x < 276){
        roumanie.push(parseFloat(datas[x].innerHTML))
    } else if (x > 276 && x < 288){
        slovenie.push(parseFloat(datas[x].innerHTML))
    } else if (x > 288 && x < 300){
        slovaquie.push(parseFloat(datas[x].innerHTML))
    } else if (x > 300 && x < 312){
        finlande.push(parseFloat(datas[x].innerHTML))
    } else if (x > 312 && x < 324){
        suede.push(parseFloat(datas[x].innerHTML))
    } else if (x > 324 && x < 336){
        islande.push(parseFloat(datas[x].innerHTML))
    } else if (x > 336 && x < 348){
        liechtenstein.push(parseFloat(datas[x].innerHTML))
    } else if (x > 348 && x < 360){
        norvege.push(parseFloat(datas[x].innerHTML))
    } else if (x > 360 && x < 372){
        suisse.push(parseFloat(datas[x].innerHTML))
    } else if (x > 372 && x < 384){
        montenegro.push(parseFloat(datas[x].innerHTML))
    } else if (x > 384 && x < 396){
        macedoine.push(parseFloat(datas[x].innerHTML))
    } else if (x > 396 && x < 408){
        serbie.push(parseFloat(datas[x].innerHTML))
    } else if (x > 408 && x < 420){
        turquie.push(parseFloat(datas[x].innerHTML))
    } else {
    }
}
// DATA LOCATOR CHART 3
for(let x = 421 ; x < datas.length; x++){
    if(x<423){
        lettonie2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 423 && x < 426){
        lituanie2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 426 && x < 429){
        estonie2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 429 && x < 432){
        repCheq2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 432 && x < 435){
        pologne2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 435 && x < 438){
        slovaquie2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 438 && x < 441){
        hongrie2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 441 && x < 444){
        pdg.push(parseFloat(datas[x].innerHTML))
    } else if (x > 444 && x < 447){
        ecosse.push(parseFloat(datas[x].innerHTML))
    } else if (x > 447 && x < 450){
        espagne2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 450 && x < 453){
        roumanie2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 453 && x < 456){
        malte2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 456 && x < 459){
        bulgaria2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 459 && x < 462){
        luxembourg2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 462 && x < 465){
        portugal2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 465 && x < 468){
        croatie2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 468 && x < 471){
        italie2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 471 && x < 474){
        grèce2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 474 && x < 477){
        france2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 477 && x < 480){
        autriche2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 480 && x < 483){
        belgium2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 483 && x < 486){
        irlandeN.push(parseFloat(datas[x].innerHTML))
    } else if (x > 486 && x < 489){
        paysBas2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 489 && x < 492){
        allemagne2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 492 && x < 495){
        irlande2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 495 && x < 498){
        chypre2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 498 && x < 501){
        danemark2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 501 && x < 504){
        suede2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 504 && x < 507){
        slovenie2.push(parseFloat(datas[x].innerHTML))
    } else if (x > 507 && x < 510){
        finlande2.push(parseFloat(datas[x].innerHTML))
    }
}
// CHART 1
let ctx1 = document.getElementById('chart1');
let myChart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: xData,
        datasets: [{
            label: 'Cake',
            data: yData,
            backgroundColor: rgb()
        }],
    }
});
// CHART 2
let ctx2 = document.getElementById('chart2');
let myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['2002', '2003', '2004', '2005', '2006',"2007","2008","2009","2010","2011","2012"],
        datasets: [{
            label: 'Belgium',
            data: belgium,
            backgroundColor: rgb()
        },{
            label: 'Bulgaria',
            data: bulgaria,
            backgroundColor: rgb()
        },{
            label: 'Czech Republic',
            data: repCheq,
            backgroundColor: rgb()
        },{
            label: 'Denmark',
            data: danemark,
            backgroundColor: rgb()
        },{
            label: 'Germany',
            data: allemagne,
            backgroundColor: rgb()
        },{
            label: 'Estonia',
            data: estonie,
            backgroundColor: rgb()
        },{
            label: 'Ireland',
            data: irlande,
            backgroundColor: rgb()
        },
        {
            label: 'Greece',
            data: grèce,
            backgroundColor: rgb()
        },{
            label: 'Spain',
            data: espagne,
            backgroundColor: rgb()
        },{
            label: 'France',
            data: france,
            backgroundColor: rgb()
        },{
            label: 'Croatia',
            data: croatie,
            backgroundColor: rgb()
        },{
            label: 'Italy',
            data: italie,
            backgroundColor: rgb()
        },{
            label: 'Cyprus',
            data: chypre,
            backgroundColor: rgb()
        },{
            label: 'Latvia',
            data: lettonie,
            backgroundColor: rgb()
        },{
            label: 'Lithuania',
            data: lituanie,
            backgroundColor: rgb()
        },{
            label: 'Luxembourg',
            data: luxembourg,
            backgroundColor: rgb()
        },{
            label: 'Hungary',
            data: hongrie,
            backgroundColor: rgb()
        },{
            label: 'Malta',
            data: malte,
            backgroundColor: rgb()
        },{
            label: 'The Netherlands',
            data: paysBas,
            backgroundColor: rgb()
        },{
            label: 'Austria',
            data: autriche,
            backgroundColor: rgb()
        },{
            label: 'Poland',
            data: pologne,
            backgroundColor: rgb()
        },{
            label: 'Portugal',
            data: portugal,
            backgroundColor: rgb()
        },{
            label: 'Romania',
            data: roumanie,
            backgroundColor: rgb()
        },{
            label: 'Slovenia',
            data: slovenie,
            backgroundColor: rgb()
        },{
            label: 'Slovakia',
            data: slovaquie,
            backgroundColor: rgb()
        },{
            label: 'Finland',
            data: finlande,
            backgroundColor: rgb()
        },{
            label: 'Sweden',
            data: suede,
            backgroundColor: rgb()
        },{
            label: 'Iceland',
            data: islande,
            backgroundColor: rgb()
        },{
            label: 'Liechtenstein',
            data: liechtenstein,
            backgroundColor: rgb()
        },{
            label: 'Norway',
            data: norvege,
            backgroundColor: rgb()
        },{
            label: 'Switzerland',
            data: suisse,
            backgroundColor: rgb()
        },{
            label: 'Montenegro',
            data: montenegro,
            backgroundColor: rgb()
        },{
            label: 'Macedonia',
            data: macedoine,
            backgroundColor: rgb()
        },{
            label: 'Serbia',
            data: serbie,
            backgroundColor: rgb()
        },{
            label: 'Turkey',
            data: turquie,
            backgroundColor: rgb()
        }],
    }
});

// CHART 3
let ctx3 = document.getElementById('chart3');
let myChart3 = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ['2007-2009', '2010-2012'],
        datasets: [{
            label: 'Latvia',
            data: lettonie2,
            backgroundColor: rgb()
        },{
            label: 'Lituania',
            data: lituanie2,
            backgroundColor: rgb()
        },{
            label: 'Estonia',
            data: estonie2,
            backgroundColor: rgb()
        },{
            label: 'Czech Republic',
            data: repCheq2,
            backgroundColor: rgb()
        },{
            label: 'Poland',
            data: pologne2,
            backgroundColor: rgb()
        },{
            label: 'Slovakia',
            data: slovaquie2,
            backgroundColor: rgb()
        },{
            label: 'Hungary',
            data: hongrie2,
            backgroundColor: rgb()
        },
        {
            label: 'England end Wales',
            data: pdg,
            backgroundColor: rgb()
        },{
            label: 'Scotland',
            data: ecosse,
            backgroundColor: rgb()
        },{
            label: 'Spain',
            data: espagne2,
            backgroundColor: rgb()
        },{
            label: 'Romania',
            data: roumanie2,
            backgroundColor: rgb()
        },{
            label: 'Malta',
            data: malte2,
            backgroundColor: rgb()
        },{
            label: 'Bulgaria',
            data: bulgaria2,
            backgroundColor: rgb()
        },{
            label: 'Luxembourg',
            data: luxembourg2,
            backgroundColor: rgb()
        },{
            label: 'Portugal',
            data: portugal2,
            backgroundColor: rgb()
        },{
            label: 'Croatia',
            data: croatie2,
            backgroundColor: rgb()
        },{
            label: 'Italy',
            data: italie2,
            backgroundColor: rgb()
        },{
            label: 'Greece',
            data: grèce2,
            backgroundColor: rgb()
        },{
            label: 'France',
            data: france2,
            backgroundColor: rgb()
        },{
            label: 'Austria',
            data: autriche2,
            backgroundColor: rgb()
        },{
            label: 'Belgium',
            data: belgium2,
            backgroundColor: rgb()
        },{
            label: 'Northern Ireland',
            data: irlandeN,
            backgroundColor: rgb()
        },{
            label: 'The Netherlands',
            data: paysBas2,
            backgroundColor: rgb()
        },{
            label: 'Germany',
            data: allemagne2,
            backgroundColor: rgb()
        },{
            label: 'Ireland',
            data: irlande2,
            backgroundColor: rgb()
        },{
            label: 'Cyprus',
            data: chypre2,
            backgroundColor: rgb()
        },{
            label: 'Denmark',
            data: danemark2,
            backgroundColor: rgb()
        },{
            label: 'Sweden',
            data: suede2,
            backgroundColor: rgb()
        },{
            label: 'Slovenia',
            data: slovenie2,
            backgroundColor: rgb()
        },{
            label: 'Finland',
            data: finlande2,
            backgroundColor: rgb()
        }],
    }
});