const parkingLots = document.querySelectorAll('.lot')
const timer = [null, null, null, null]
const parkingTime = [0, 0, 0, 0]
const prevState = [0, 0, 0, 0]
const money = document.querySelector('.money span')
const isAvailable = [false, false, false, false]

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
    status: 0,
    time: null,
  },
]

const countTime = (lot, index) => {
  const timer = lot.querySelector('.timer')
  timer.style.opacity = 1
  const timeText = timer.children[0]
  let second = 0
  return setInterval(() => {
    second++
    parkingTime[index] = second
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
  //   fetch('https://exceed11.cpsk-club.xyz/get_data')
  //     .then((response) => response.json)
  //     .then((jsonData) => console.log(jsonData))
  //     .catch((err) => console.log(err))
}

const start = () => {
  data.forEach((lotData) => {
    let lotIndex = lotData.id - 1
    if (
      lotData.status === 1 &&
      prevState[lotIndex] === 0 &&
      !timer[lotIndex] &&
      !isAvailable[lotIndex]
    ) {
      const activeLot = parkingLots[lotIndex]

      const car = activeLot.querySelector('.car')
      const carImage = car.children[0]
      const randomCarIndex = getRandomCarIndex()

      carImage.src = `./images/car${randomCarIndex}.png`

      carImage.style.display = 'block'
      car.style.animation = 'car-in 1s ease-in-out forwards'
      car.addEventListener(
        'animationend',
        () => {
          activeLot.classList.add('active')
          if (!isAvailable[lotIndex]) {
            timer[lotIndex] = countTime(activeLot, lotIndex)
          }
          car.style.animation = null
        },
        { once: true }
      )
      prevState[lotIndex] = 1
    } else if (lotData.status === 0 && prevState[lotIndex] === 1) {
      const activeLot = parkingLots[lotIndex]
      isAvailable[lotIndex] = true

      const car = activeLot.querySelector('.car')
      const carImage = car.children[0]
      prevState[lotIndex] = 0
      clearInterval(timer[lotIndex])

      const second = parkingTime[lotIndex]

      car.style.animation = 'car-out 1s ease-in-out forwards'
      car.addEventListener(
        'animationend',
        () => {
          carImage.style.display = 'none'
          car.style.animation = null
        },
        { once: true }
      )

      const summary = activeLot.querySelector('.summary')

      const cost = summary.children[0]
      cost.innerHTML = `
              Total ${getTime(second)} = ${second * 20}$ <br />
              Click to pay
              `

      setTimeout(() => {
        removeTimeText(activeLot)
        summary.style.display = 'block'
      }, 1000)

      new Promise((resolve, reject) => {
        summary.addEventListener(
          'click',
          () => {
            resolve()
            summary.style.display = 'none'
            money.innerText = `${parseInt(money.innerText) + second * 20}`
            console.log(money.innerText)
            activeLot.classList.remove('active')
            prevState[lotIndex] = 0
            parkingTime[lotIndex] = 0
            timer[lotIndex] = null
            isAvailable[lotIndex] = false
          },
          { once: true }
        )
      }).then(() => {
        console.log('done')
      })
    }
  })
}

setTimeout(() => {
  data = [
    {
      id: 1,
      status: 1,
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
      status: 0,
      time: null,
    },
  ]
}, 6000)

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
      status: 1,
      time: null,
    },
    {
      id: 4,
      status: 0,
      time: null,
    },
  ]
}, 10000)

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
      status: 0,
      time: null,
    },
  ]
}, 15000)

setInterval(() => {
  fetchParkingData()
  start()
}, 1000)
