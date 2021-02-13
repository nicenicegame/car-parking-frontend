
var assume1 = [1,1,1,1,1,0,0,0,0,0,1,1,1,1]
var assume2 = [1,1,1,0,0,0,1,0,0,0,1,1,1,1]
var assume3 = [1,1,1,1,1,0,0,0,1,1,1,1,1,1]
var assume4 = [1,1,1,1,1,1,0,0,0,1,1,1,1,1]

var init1= 0
    var init2= 0
    var init3= 0
    var init4= 0

    var dataset1 = []
    var dataset2 = []
    var dataset3 = []
    var dataset4 = []

    var labelset = []
    for(i in assume1){
        if(assume1[i]==1){
            init1 = init1+1;
        }
        if(assume2[i]==1){
            init2 = init2+1;
        }
        if(assume3[i]==1){
            init3 = init3+1;
        }
        if(assume4[i]==1){
            init4 = init4+1;
        }

        dataset1.push(init1)
        dataset2.push(init2)
        dataset3.push(init3)
        dataset4.push(init4)

        labelset.push(i)
    }
setInterval(()=>{
    var init1= 0
    var init2= 0
    var init3= 0
    var init4= 0

    var dataset1 = []
    var dataset2 = []
    var dataset3 = []
    var dataset4 = []

    var labelset = []
    for(i in assume1){
        if(assume1[i]==1){
            init1 = init1+1;
        }
        if(assume2[i]==1){
            init2 = init2+1;
        }
        if(assume3[i]==1){
            init3 = init3+1;
        }
        if(assume4[i]==1){
            init4 = init4+1;
        }

        dataset1.push(init1)
        dataset2.push(init2)
        dataset3.push(init3)
        dataset4.push(init4)

        labelset.push(i)
    }

},60000)


// for(i = 0; i < 10; i++){
//     labelset.push("point"+ i)
//     dataset.push(i);    
// }
//parkA
    var ctx = document.getElementById('myChart1');
    var myChart1 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labelset,
            datasets: [{
                label: '# of ParkA',
                data: dataset1,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                
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
                label: '# of ParkB',
                data: dataset2,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
                    
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
                label: '# of ParkC',
                data: dataset3,
                backgroundColor: [
                    'rgba(255, 206, 86, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 206, 86, 1)'
                
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
                label: '# of Park4',
                data: dataset4,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)'
                
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
