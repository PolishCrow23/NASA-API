document.getElementById('candy').onclick = candyFrog

document.getElementById('lavender').onclick = lavenderFrog
document.getElementById('oceanBreeze').onclick = oceanBreezeFrog
document.getElementById('reefGreen').onclick = reefGreenFrog
document.getElementById('orangePeel').onclick = orangePeelFrog


let frogDisplay = document.getElementById('frogPrincessDisplay')
let candyImage = document.getElementById('candyFrogPrincessImage')
let lavenderImage = document.getElementById('lavenderFrogPrincessImage')
let oceanBreezeImage = document.getElementById('oceanBreezeFrogPrincessImage')
let reefGreenImage = document.getElementById('reefGreenFrogPrincessImage')
let orangePeelImage = document.getElementById('orangePeelFrogPrincessImage')

function candyFrog(){
  frogDisplay.src = candyImage.src
}
function lavenderFrog(){
  frogDisplay.src = lavenderImage.src
}
function oceanBreezeFrog(){
  frogDisplay.src = oceanBreezeImage.src
}
function reefGreenFrog(){
  frogDisplay.src = reefGreenImage.src
}
function orangePeelFrog(){
  frogDisplay.src = orangePeelImage.src
}

