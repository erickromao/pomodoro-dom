import { buttonPlay, buttonPause, buttonClock, buttonStop } from "./Controllers.js"

buttonPlay.playButton.addEventListener('click', buttonPlay.pressPlay)

buttonPause.pauseButton.addEventListener('click', buttonPause.pressPause)

buttonClock.clockButton.addEventListener('click', buttonClock.addNewTime)

buttonStop.stopButton.addEventListener('click', buttonStop.pressStop)
