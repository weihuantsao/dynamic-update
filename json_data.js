var raw_data = new Array();
var line_1 = {
    name: '設備1',
    data: [
        [1458259200000, 99.6],
        [1458345600000, 105],
        [1458432000000, 99.8],
        [1458518400000, 101],
        [1458604800000, 105],
        [1458691200000, 103],
        [1458777600000, 108],
        [1458864000000, 99],
        [1458950400000, 98],
        [1459036800000, 100]
    ]
};

var line_2 = {
    name: '設備2',
    data: [
        [1462492800000, 92.72],
        [1462579200000, 92.79],
        [1462665600000, 93.42],
        [1462752000000, 92.51],
        [1462838400000, 90.34],
        [1462924800000, 90.52],
        [1463011200000, 93.88],
        [1463097600000, 93.49],
        [1463184000000, 94.56],
        [1463270400000, 94.20],
        [1463356800000, 95.22],
        [1463443200000, 96.43],
        [1463529600000, 97.90],
        [1463616000000, 99.62],
        [1463702400000, 100.41],
        [1463788800000, 100.35],
        [1463875200000, 99.86],
        [1463961600000, 98.46]
    ]
};


























var line_3 = {
    name: '設備3',
    data: [
        [1454284800000, 52.00],
        [1454371200000, 64.65],
        [1454457600000, 26.95],
        [1454544000000, 108.01],
        [1454630400000, 83.57],
        [1454716800000, 82.74],
        [1454803200000, 78.11],
        [1454889600000, 84.12],
        [1454976000000, 83.11],
        [1455062400000, 82.40],
        [1455148800000, 91.00],
        [1455235200000, 108.40],
        [1455321600000, 97.35],
        [1455408000000, 100.91],
        [1455494400000, 96.46],
        [1455580800000, 95.85],
        [1455667200000, 99.56],
        [1455753600000, 105.75],
        [1455840000000, 105.07],
        [1455926400000, 97.77],
        [1456012800000, 18.81],
        [1456099200000, 18.85],
        [1456185600000, 12.42],
        [1456272000000, 10.89],
        [1456358400000, 95.16],
        [1456444800000, 93.97],
        [1456531200000, 105.24],
        [1456617600000, 12.82],
        [1456704000000, 26.82],
        [1456790400000, 30.49],
        [1456876800000, 28.33],
        [1456963200000, 36.09],
        [1457049600000, 37.78],
        [1457136000000, 37.60],
        [1457222400000, 42.09],
        [1457308800000, 40.75],
        [1457395200000, 38.06],
        [1457481600000, 35.30],
        [1457568000000, 33.53],
        [1457654400000, 44.77],
        [1457740800000, 50.53],
        [1457827200000, 44.95],
        [1457913600000, 49.91],
        [1458000000000, 56],
        [1458086400000, 50],
        [1458172800000, 60],
        [1458259200000, 72],
        [1458345600000, 64],
        [1458432000000, 42],
        [1458518400000, 66],
        [1458604800000, 40],
        [1458691200000, 44],
        [1458777600000, 46],
        [1458864000000, 48],
        [1458950400000, 76],
        [1459036800000, 44],
        [1459123200000, 62],
        [1459209600000, 54],
        [1459296000000, 44],
        [1459382400000, 60],
        [1459468800000, 42],
        [1459555200000, 68],
        [1459641600000, 46],
        [1459728000000, 60],
        [1459814400000, 58],
        [1459900800000, 76],
        [1459987200000, 56],
        [1460073600000, 68],
        [1460160000000, 76],
        [1460246400000, 66],
        [1460332800000, 76],
        [1460419200000, 52],
        [1460505600000, 68]
    ]
};

var line_4 = {
    name: '設備4',
    data: [
        [1455753600000, 110.43],
        [1455840000000, 100.54],
        [1455926400000, 95.6],
        [1456012800000, 70],
        [1456099200000, 37],
        [1456185600000, 33],
        [1456272000000, 20],
        [1456358400000, 34],
        [1456444800000, 76.5],
        [1456531200000, 40],
        [1456617600000, 57],
        [1456704000000, 50],
        [1456790400000, 72],
        [1456876800000, 51],
        [1456963200000, 70],
        [1457049600000, 39],
        [1457136000000, 56],
        [1457222400000, 30],
        [1457308800000, 42],
        [1457395200000, 36],
        [1457481600000, 45],
        [1457568000000, 57],
        [1457654400000, 69],
        [1457740800000, 76],
        [1457827200000, 23],
        [1457913600000, 20],
        [1458000000000, 20],
        [1458086400000, 59],
        [1458172800000, 53],
        [1458259200000, 30],
        [1458345600000, 53],
        [1458432000000, 20],
        [1458518400000, 38],
        [1458604800000, 73],
        [1458691200000, 59],
        [1458777600000, 23],
        [1458864000000, 57],
        [1458950400000, 50],
        [1459036800000, 76],
        [1459123200000, 79]
    ]
};



/*
var line_total = {
    name: '總耗電',
    data: 
};
*/
raw_data.push(line_1);
raw_data.push(line_2);
raw_data.push(line_3);
raw_data.push(line_4);

var line_total_time = new Array();
var line_total_data = new Array();
var line_total_data_value = new Array();


function line_total_format(raw_data) {
    //add all time item
    for (i = 0; i < raw_data.length; i++) {
        line_total_time.push.apply(line_total_time, raw_data[i]["data"]);
    }

    var temp_time = new Array();
    for (i = 0; i < line_total_time.length; i++) {
        temp_time.push(line_total_time[i][0]);
    }
    temp_time = temp_time.sort();
    //console.log(temp_time.length);
    // remove all duplicate element
    var line_total_data_time = temp_time.filter(function(x, i, self) {
        return self.indexOf(x) === i;
    });

    for (i = 0; i < line_total_data_time.length; i++) {
        line_total_data_value.push(0);
        for (j = 0; j < raw_data.length; j++) {
            for (k = 0; k < raw_data[j]["data"].length; k++) {
                if (line_total_data_time[i] == raw_data[j]["data"][k][0]) {

                    line_total_data_value[i] += raw_data[j]["data"][k][1];
                }
            }
        }
    }

    for (i = 0; i < line_total_data_time.length; i++) {
        line_total_data[i] = new Array(2);
        line_total_data[i][0] = line_total_data_time[i];
        line_total_data[i][1] = line_total_data_value[i];
    }
    return line_total_data
}


var line_total = {
    name: '總耗電',
    data: line_total_format(raw_data)
};

//raw_data.push(line_total);

raw_data.push(line_total);



var threadhold = 180;
var over_threadhold_110 = 0;
var over_threadhold = 0;
var normal = 0;

function pie_data_format(line_total, threadhold) {
    for (i = 0; i < line_total["data"].length; i++) {
        if (line_total["data"][i][1] > threadhold * 1.1) {
            over_threadhold_110++;
        } else if (line_total["data"][i][1] > threadhold) {
            over_threadhold++;
        } else {
            normal++;
        }
    }
    var temp = new Array();
    //pie_data[0]["data"]
    temp = [{
        name: '超過 10%',
        y: over_threadhold_110,
        color: 'rgba(200, 20, 20, 0.8)',
        selected: true
    }, {
        name: '超過 10% 以內',
        y: over_threadhold,
        color: 'rgba(255,124,216, 0.8)',
        selected: true
    }, {
        name: '簽約範圍',
        y: normal,
        color: 'rgba(60, 180, 60, 0.8)',
        selected: true
    }];
    return temp;
}

var pie_data = [{
    type: 'pie',
    name: 'Use',
    data: pie_data_format(line_total, threadhold),
}];
