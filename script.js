function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

window.addEventListener('keydown', function(e){
    console.log("keycode: ", e.keyCode)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stop the function from running all together

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
})
const tapPlay = (e) => {
    
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));