
var dataset = []
var labelset = []

for(i = 0; i < 10; i++){
    labelset.push("point"+ i)
    dataset.push(i);    
}
//parkA
var ctx = document.getElementById('myChart1');
var myChart1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labelset,
        datasets: [{
            label: '# of Votes',
            data: dataset,
            backgroundColor: [

            ],
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
//parkb
var ctx2 = document.getElementById('myChart2');
var myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: labelset,
        datasets: [{
            label: '# of Votes',
            data: dataset,
            backgroundColor: [
                
            ],
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
//parkC
var ctx3 = document.getElementById('myChart3');
var myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: labelset,
        datasets: [{
            label: '# of Votes',
            data: dataset,
            backgroundColor: [
                
            ],
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
//Parkd
var ctx4 = document.getElementById('myChart4');
var myChart4 = new Chart(ctx4, {
    type: 'line',
    data: {
        labels: labelset,
        datasets: [{
            label: '# of Votes',
            data: dataset,
            backgroundColor: [
                
            ],
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
