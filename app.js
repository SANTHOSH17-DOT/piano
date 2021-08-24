const keys = document.querySelector('#keys');
const notBlack = [4, 7, 11, 14];
var j = 1;

for (let i = 0; i < 14; i++) {
    let whitekey = document.createElement('div');
    whitekey.classList.add('whiteKeys', 'key');
    whitekey.classList.add(`key${j}`)
    whitekey.style.left = (i * 7) + '%';
    keys.appendChild(whitekey);
    j += 1
}
for (let i = 1; i < 14; i++) {
    if (!notBlack.includes(i)) {
        let blackKey = document.createElement('div');
        blackKey.classList.add('blackKeys', 'key');
        blackKey.classList.add(`key${j}`)
        blackKey.style.left = (i * (7) - 1.75) + '%'
        keys.appendChild(blackKey);
        j += 1;
    }
}



var key = Array.from(document.querySelectorAll('.key'))
console.log(key);
key.forEach(k => {
    k.addEventListener('click', () => {
        console.log(k.classList[2]);
        let keySound = new sound(`${k.classList[2]}.mp3`)
        keySound.play();
    })
})

function sound(src) {
    this.sound = document.createElement('audio')
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
}