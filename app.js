const parkingLots = document.querySelectorAll('.lot')

function countTime(lot) {
  const timer = lot.querySelector('.timer')
  timer.style.display = 'block'
  const timeText = timer.children[0]
  let second = 0
  setInterval(() => {
    timeText.innerText = getTime(second)
    second++
  }, 1000)
}

function getTime(second) {
  return (
    Math.floor(second / 60) + ':' + ('0' + Math.floor(second % 60)).slice(-2)
  )
}

countTime(parkingLots[2])
countTime(parkingLots[3])
