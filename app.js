<<<<<<< HEAD
/*const parkingLots = document.querySelectorAll('.lot')
=======
const parkingLots = document.querySelectorAll('.lot')
const timer = [null, null, null, null]
const prevState = [0, 0, 0, 0]

let data = [
  {
    id: 1,
    status: 0,
    time: null,
  },
  {
    id: 2,
    status: 0,
    time: null,
  },
  {
    id: 3,
    status: 1,
    time: null,
  },
  {
    id: 4,
    status: 1,
    time: null,
  },
]
>>>>>>> 6686a4a0c5b269953dc01665dad86a474ddef9a9

function countTime(lot) {
  const timer = lot.querySelector('.timer')
  timer.style.display = 'block'
  const timeText = timer.children[0]
  let second = 0
  return setInterval(() => {
    second++
    timeText.innerText = getTime(second)
  }, 1000)
}

function getTime(second) {
  return (
    Math.floor(second / 60) + ':' + ('0' + Math.floor(second % 60)).slice(-2)
  )
}

function fetchParkingData() {
  return
}

function start() {
  data.forEach((lotData) => {
    if (lotData.status === 1 && prevState[lotData.id - 1] === 0) {
      prevState[lotData.id - 1] = 1
      const activeLot = parkingLots[lotData.id - 1]
      activeLot.classList.add('active')
      timer[lotData.id - 1] = countTime(activeLot)
    } else if (lotData.status === 0 && prevState[lotData.id - 1] === 1) {
      const activeLot = parkingLots[lotData.id - 1]
      prevState[lotData.id - 1] = 0
      activeLot.classList.remove('active')
      clearInterval(timer[lotData.id - 1])
      setTimeout(() => {
        return
      }, 2000)
    }
  })
}

setTimeout(() => {
  data = [
    {
      id: 1,
      status: 0,
      time: null,
    },
    {
      id: 2,
      status: 0,
      time: null,
    },
    {
      id: 3,
      status: 0,
      time: null,
    },
    {
      id: 4,
      status: 1,
      time: null,
    },
  ]
  console.log(data[2])
}, 5000)

// countTime(parkingLots[2])
// countTime(parkingLots[3])
setInterval(() => {
  fetchParkingData()
  start()
}, 1000)
countTime(parkingLots[2])
countTime(parkingLots[3])
<<<<<<< HEAD
*/
//graph 


var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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

=======

//graph
var Chart = require('chart.js')
var ctx = document.getElementById('myChart').getContext('2d')
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
})
>>>>>>> 6686a4a0c5b269953dc01665dad86a474ddef9a9
