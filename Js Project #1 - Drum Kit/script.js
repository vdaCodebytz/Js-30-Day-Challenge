document.addEventListener("keydown" , (e) => {
    let audio = document.querySelector(`audio[data-key="${e.key}"]`);

    if(audio == null)return;
    audio.play()
})