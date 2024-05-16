const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

let displayMinutes = minutes.textContent
let displaySeconds = seconds.textContent

const buttonPlay = {
    playButton: document.querySelector('#buttonPlay'),

    pressPlay() {
        buttonPlay.playButtonRemove()
        buttonPause.pauseButtonAdd()
        buttonClock.clockButtonRemove()
        buttonStop.stopButtonAdd()

        console.log(displayMinutes)
        console.log(displaySeconds)
        
    },

    playButtonAdd() {
        buttonPlay.playButton.classList.remove('hide')
    },

    playButtonRemove() {
        buttonPlay.playButton.classList.add('hide')
    }
}


const buttonPause = {
    pauseButton: document.querySelector('#buttonPause'),

    pressPause() {
        buttonPlay.playButtonAdd()
        buttonPause.pauseButtonRemove()
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
    }
}


const buttonStop = {
    stopButton: document.querySelector('#buttonStop'),

    pressStop() {
        buttonPlay.playButtonAdd()
        buttonPause.pauseButtonRemove()

        buttonStop.stopButtonRemove()
        buttonClock.clockButtonAdd()
    },

    stopButtonAdd() {
        buttonStop.stopButton.classList.remove('hide')
    },
    stopButtonRemove() {
        buttonStop.stopButton.classList.add('hide')
    }
}

export { buttonPlay, buttonPause, buttonClock, buttonStop }