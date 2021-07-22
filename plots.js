const graphDiv = document.getElementById('plot');

var trace = [{
    x: [],
    type: 'histogram'
}]


Plotly.react(graphDiv, trace);



function handleCSV(csv_text) {
    let table = d3.csvParse(csv_text);

    var x = table.map((d) => +d["Оплачено картой"]);

    var trace = {
        x: x,
        type: 'histogram',
    };
    var data = [trace];
    Plotly.react(graphDiv, data);
}