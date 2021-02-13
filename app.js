const parkingLots = document.querySelectorAll('.lot')

function countTime(lot) {
  const timer = lot.querySelectorAll('.timer p')
  let second = 0
  setInterval(() => {
    timer.innerText = second
    second++
    console.log(second)
  }, 1000)
}

console.log(parkingLots[0])

// countTime(parkingLots[0])
