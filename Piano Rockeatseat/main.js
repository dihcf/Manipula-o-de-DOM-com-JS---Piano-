
// pegando todas as teclas com a classe key em uma node list 
const keys = document.querySelectorAll(".key")

function playNote(event){
    let audioKeyCode = getKeyCode(event)

    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

    const cantFoundAnyKey = !key 

    if(cantFoundAnyKey){
        return
    }
    addPlayingClass(key)
    playaudio(audioKeyCode)
}

function addPlayingClass(key){
    key.classList.add("playing")
}

function getKeyCode(event){
   let keyCode

   const isKeyboard = event.type === "keydown"
   
   if(isKeyboard){
    keyCode = event.keyCode
   } else {
     keyCode = event.target.dataset.key
   }

   return keyCode
}

function playaudio(audioKeyCode){
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)

    audio.currenTime = 0
    audio.play()
}

function removePlayingClass(event){
    event.target.classList.remove("playing")
}

keys.forEach(function(key){
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
})

window.addEventListener("keydown", playNote)
