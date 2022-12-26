let audioPic = document.getElementById("audioPic")

let rotation = 0

let trackName = document.querySelector('#trackName')
let artistName = document.querySelector('#artistName')

let play = document.querySelector('#play')
let playButton = document.querySelector('.fa-play')
let prev = document.querySelector('#prev')
let next = document.querySelector('#next')
let trackChange = document.querySelector('#trackChange')
let progress = document.querySelector('#progress')

let volume = document.querySelector('#volumeSlider')

let nhk = document.getElementById('nhk')
let aria = document.getElementById('aria')
let track = nhk
track.volume = 0.5

let nhk1 = document.getElementById('nhk1')
let nhk2 = document.getElementById('nhk2')
let nhk3 = document.getElementById('nhk3')
let nhk4 = document.getElementById('nhk4')
let nhk5 = document.getElementById('nhk5')
let nhk6 = document.getElementById('nhk6')

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
    audioPic.style.transform = 'rotate(0deg)'
    rotation = 0
    track.pause();
    pauseToPlay();
    if (track == nhk) {
        track = aria
        audioPic.style.backgroundImage = 'url("Aria-OST.jpg")'
        trackNumber = 1
        nextTrack = `${track.id}${trackNumber + 1}.src`
        prevTrack = `${track.id}${trackNumber - 1}.src`
        nameChange();
    } else {
        track = nhk
        trackNumber = 1
        audioPic.style.backgroundImage = 'url("NHK\ OST.jpg")'
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
        audioPic.style.transform = `rotate(${rotation + 0.25}deg)`
        rotation += 0.25
    }
}, 25);


// let playAria = document.querySelector('#playAria')
// let prevAria = document.querySelector('#prevAria')
// let nextAria = document.querySelector('#nextAria')


// let playerAria = document.getElementById('aria')

// let aria1 = document.getElementById('aria1')
// let aria2 = document.getElementById('aria2')
// let aria3 = document.getElementById('aria3')
// let aria4 = document.getElementById('aria4')
// let aria5 = document.getElementById('aria5')
// let aria6 = document.getElementById('aria6')

// let ariaTrackNumber = 1
// let nextTrackAria = `aria${ariaTrackNumber + 1}.src`
// let prevTrackAria = `aria${ariaTrackNumber - 1}.src`


// playAria.addEventListener('click', ()=>{
//     if (playerAria.paused == true){
//      playerAria.play();
//     } else {
//         playerAria.pause();
//     }
// })

// nextAria.addEventListener('click', () =>{
//      playerAria.src = eval(`${nextTrackAria}`)
//      playerAria.pause()
//      playerAria.load()
//      playerAria.play()
//      ariaTrackNumber += 1
//      nextTrackAria = `aria${ariaTrackNumber + 1}.src`
//      prevTrackAria = `aria${ariaTrackNumber - 1}.src`
// })

// prevAria.addEventListener('click', () =>{
//     player.src = eval(`${prevTrackAria}`)
//     player.pause()
//     player.load()
//     player.play()
//     ariaTrackNumber -= 1
//     prevTrackAria = `aria${ariaTrackNumber - 1}.src`
//     nexTrackAria = `aria${ariaTrackNumber + 1}.src`
// })
