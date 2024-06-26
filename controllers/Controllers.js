let minutesSpan = document.querySelector('#minutes')
let secondsSpan = document.querySelector('#seconds')

let minutesSpanInitial = minutesSpan.textContent
let valueTimeOut

const buttonPlay = {
    playButton: document.querySelector('#buttonPlay'),

    pressPlay() {
        buttonPlay.playButtonRemove()
        buttonPause.pauseButtonAdd()
        buttonClock.clockButtonRemove()
        buttonStop.stopButtonAdd()

        countDown()
        songPressButton()
    },

    playButtonAdd() {
        buttonPlay.playButton.classList.remove('hide')
    },

    playButtonRemove() {
        buttonPlay.playButton.classList.add('hide')
    },
}


const buttonPause = {
    pauseButton: document.querySelector('#buttonPause'),

    pressPause() {
        buttonPlay.playButtonAdd()
        buttonPause.pauseButtonRemove()

        clearTimeout(valueTimeOut)
        songPressButton()
    },

    pauseButtonAdd() {
        buttonPause.pauseButton.classList.remove('hide')
    },

    pauseButtonRemove() {
        buttonPause.pauseButton.classList.add('hide')
    }
}


const buttonClock = {
    clockButton: document.querySelector('#buttonClock'),

    clockButtonAdd() {
        buttonClock.clockButton.classList.remove('hide')
    },
    clockButtonRemove() {
        buttonClock.clockButton.classList.add('hide')
    },
    addNewTime() {
        addNewTimer()
    }
}


const buttonStop = {
    stopButton: document.querySelector('#buttonStop'),

    pressStop() {
        buttonPlay.playButtonAdd()
        buttonPause.pauseButtonRemove()

        buttonStop.stopButtonRemove()
        buttonClock.clockButtonAdd()
        songPressButton()

        clearTimeout(valueTimeOut)
        displayUpdateTImer(minutesSpanInitial, '00')
    },

    stopButtonAdd() {
        buttonStop.stopButton.classList.remove('hide')
    },
    stopButtonRemove() {
        buttonStop.stopButton.classList.add('hide')
    }
}


function countDown() {
    valueTimeOut = setTimeout(() => {
        let minutesDecrement = Number(minutesSpan.textContent)
        let secondsDecrement = Number(secondsSpan.textContent)

        if (minutesDecrement <= 0 && secondsDecrement <= 0) {
            alertSongEnd()
            buttonStop.pressStop()
            displayUpdateTImer(minutesSpanInitial, '00')
            return
        }

        if (secondsDecrement <= 0) {
            secondsDecrement = 60

            --minutesDecrement
        }

        displayUpdateTImer(minutesDecrement, secondsDecrement - 1)

        countDown()
    }, 1000)
}

function displayUpdateTImer(minutes, seconds) {
    minutesSpan.textContent = String(minutes).padStart(2, '0')
    secondsSpan.textContent = String(seconds).padStart(2, '0')
}

function addNewTimer() {
    let newTimeMinutes = prompt("Informe os minutos")
    if (isNaN(newTimeMinutes) || !newTimeMinutes) {
        buttonStop.pressStop()
        return
    }
    if (newTimeMinutes > 60) return alert('Valor máximo é 60 minutos!')

    minutesSpanInitial = newTimeMinutes
    displayUpdateTImer(minutesSpanInitial, '00')
}

function alertSongEnd() {
    const endSongAlert = new Audio('./src/endSongTime.mp3')
    return endSongAlert.play()

}

function songPressButton(){
    const buttonPressAudio = new Audio("./src/button-press.wav")
    buttonPressAudio.play()
}

export { buttonPlay, buttonPause, buttonClock, buttonStop }