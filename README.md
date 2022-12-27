# Music Player Project
 
Music is a passion of mine so naturally one of my first ideas for a project was to build what I use the most, a Music Player.

## Built With:
- HTML
- CSS
- JavaScript

## Code Examples:
This project has been created using HTML, CSS and JavaScript with the majority of the controls made using the HTML5 DOM methods and properties on the audio elements. 
```
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
```

In addition to this I have included a created a few javaScript functions for some cosmetic features like a rotating CD image and a change to the current title and track name.

```
setInterval(function () {
    if (track.paused === false) {
        cdImage.style.transform = `rotate(${rotation + 0.25}deg)`
        rotation += 0.25
    }
}, 25);
```

![Music Player Screenshot](https://github.com/Sonagi-R/Music-Player/blob/main/Music%20Player%20Screenshot.png)
