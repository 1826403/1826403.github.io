// 折れ線グラフ

var lineLabels = ['January', 'February', 'March', 'April', 'May', 'June'];

var lineData = {
    labels: lineLabels,
    datasets: [{
        Label: '初めてのグラフ',
        borderColor: 'rgb(255, 100, 130)',
        backgroundColor: 'rgb(150, 50, 60)',
        data: [0, 10, 15, 3, 20, 60, 10],
    }]
};

var lineConfig = {
    type: 'line',
    lineData,
    options: {},
};

var lineChart = new Chart(
    document.getElementById('lineChart'),
    lineConfig,
);