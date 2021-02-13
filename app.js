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

const countTime = (lot) => {
  const timer = lot.querySelector('.timer')
  timer.style.opacity = 1
  const timeText = timer.children[0]
  let second = 0
  return setInterval(() => {
    second++
    timeText.innerText = getTime(second)
  }, 1000)
}

const removeTimeText = (lot) => {
  const timer = lot.querySelector('.timer')
  const timeText = timer.children[0]
  timer.style.opacity = 0
  timer.addEventListener('transitionend', () => {
    timeText.innerText = '0:00'
  })
}

const getTime = (second) => {
  return (
    Math.floor(second / 60) + ':' + ('0' + Math.floor(second % 60)).slice(-2)
  )
}

const getRandomCarIndex = () => {
  return Math.floor(Math.random() * 3) + 1
}

const fetchParkingData = () => {
  return
}

const start = () => {
  data.forEach((lotData) => {
    if (lotData.status === 1 && prevState[lotData.id - 1] === 0) {
      prevState[lotData.id - 1] = 1
      const activeLot = parkingLots[lotData.id - 1]

      const car = activeLot.querySelector('.car')
      const carImage = car.children[0]
      const randomCarIndex = getRandomCarIndex()

      carImage.src = `./images/car${randomCarIndex}.png`
      carImage.style.display = 'block'
      car.style.animation = 'car-in 1s ease-in-out forwards'
      car.addEventListener('animationend', () => {
        activeLot.classList.add('active')
        timer[lotData.id - 1] = countTime(activeLot)
      })
    } else if (lotData.status === 0 && prevState[lotData.id - 1] === 1) {
      const activeLot = parkingLots[lotData.id - 1]
      const car = activeLot.querySelector('.car')
      const carImage = car.children[0]

      clearInterval(timer[lotData.id - 1])

      if (car.style.animation) {
        car.style.animation = 'car-out 1s ease-in-out forwards'
        car.addEventListener('animationend', () => {
          activeLot.classList.remove('active')
          carImage.style.display = 'none'
          car.style.animation = null
        })
      }

      setTimeout(() => {
        prevState[lotData.id - 1] = 0
        removeTimeText(activeLot)
        return
      }, 3000)
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
}, 5000)

setInterval(() => {
  fetchParkingData()
  start()
}, 1000)
