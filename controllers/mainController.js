import { buttonPlay } from "./buttonsController.js"
import { buttonPause } from "./buttonsController.js"
import { buttonClock } from "./buttonsController.js"
import { buttonStop } from "./buttonsController.js"

// Eventos
buttonPlay.playButton.addEventListener('click', buttonPlay.pressPlay)

buttonPause.pauseButton.addEventListener('click', buttonPause.pressPause)

buttonClock.clockButton.addEventListener('click', buttonClock.addNewTime)

buttonStop.stopButton.addEventListener('click', buttonStop.pressStop)




function pressStop() {
    
}