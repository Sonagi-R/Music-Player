const cdImage = document.getElementById("cdImage")

let rotation = 0

const trackName = document.querySelector('#trackName')
const artistName = document.querySelector('#artistName')

const play = document.querySelector('#play')
const playButton = document.querySelector('.fa-play')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const trackChange = document.querySelector('#trackChange')
const progress = document.querySelector('#progress')

const volume = document.querySelector('#volumeSlider')

const nhk = document.getElementById('nhk')
const aria = document.getElementById('aria')
let track = nhk
track.volume = 0.5

let trackNumber = 1
let nextTrack = `${track.id}${trackNumber + 1}.src`
let prevTrack = `${track.id}${trackNumber - 1}.src`

volume.addEventListener("change", () => {
    track.volume = (volume.valueAsNumber /100)
})

const playToPause = () => {
    playButton.classList.remove('fa-play')
    playButton.classList.add('fa-pause')
}

const pauseToPlay = () => {
    playButton.classList.remove('fa-pause')
    playButton.classList.add('fa-play')
}

track.addEventListener('ended', () => {
    track.src = eval(`${nextTrack}`)
     track.pause()
     track.load()
     track.play()
     trackNumber += 1
    nextTrack = `${track.id}${trackNumber + 1}.src`
    prevTrack = `${track.id}${trackNumber - 1}.src`
    nameChange();
    progress.classList.remove('active')
    setTimeout(() => progress.classList.add('active'), 0.1)
})

play.addEventListener('click', () => {
    progress.classList.add('active')
    if (track.paused == true){
        track.play();
        playToPause();
    
    } else {
        track.pause();
        pauseToPlay();
    }
})

next.addEventListener('click', () =>{
    track.src = eval(`${nextTrack}`)
    track.pause()
    track.load()
    track.play()
    playToPause();
     trackNumber += 1
    nextTrack = `${track.id}${trackNumber + 1}.src`
    prevTrack = `${track.id}${trackNumber - 1}.src`
    nameChange();
    progress.classList.remove('active')
    setTimeout(() => progress.classList.add('active'), 0.1)
})

prev.addEventListener('click', () =>{
    track.src = eval(`${prevTrack}`)
    track.pause()
    track.load()
    track.play()
    trackNumber -= 1
    nextTrack = `${track.id}${trackNumber + 1}.src`
    prevTrack = `${track.id}${trackNumber - 1}.src`
    nameChange();
    playToPause();
    progress.classList.remove('active')
    setTimeout(() => progress.classList.add('active'), 0.1)
})

trackChange.addEventListener('click', () => {
    cdImage.style.transform = 'rotate(0deg)'
    rotation = 0
    track.pause();
    pauseToPlay();
    if (track == nhk) {
        track = aria
        cdImage.style.backgroundImage = 'url("Aria-OST.jpg")'
        trackNumber = 1
        nextTrack = `${track.id}${trackNumber + 1}.src`
        prevTrack = `${track.id}${trackNumber - 1}.src`
        nameChange();
    } else {
        track = nhk
        trackNumber = 1
        cdimage.style.backgroundImage = 'url("NHK\ OST.jpg")'
        nextTrack = `${track.id}${trackNumber + 1}.src`
        prevTrack = `${track.id}${trackNumber - 1}.src`
        NameChange();
    }
    track.load()
})

function nameChange() {
    if (track == nhk) {
        trackName.innerHTML = eval(`nhk${trackNumber}`).title
        artistName.innerHTML = "NHK Sunnyside"
    } else {
        trackName.innerHTML = eval(`aria${trackNumber}`).title
        artistName.innerHTML = "Aria The Animation OST"
    }
}

nameChange();



setInterval(function () {
    if (track.paused === false) {
        cdImage.style.transform = `rotate(${rotation + 0.25}deg)`
        rotation += 0.25
    }
}, 25);