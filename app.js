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
