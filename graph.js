
var dataset = []
var labelset = []

for(i = 0; i < 10; i++){
    labelset.push("point"+ i)
    dataset.push(i);    
}

var ctx = document.getElementById('myChart1');
var myChart1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labelset,
        datasets: [{
            label: '# of Votes',
            data: dataset,
            borderColor: [
                'rgba(255, 99, 132, 1)'
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


