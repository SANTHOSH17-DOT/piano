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
var keyPressed = {};
const keyPress = (event) => {
    console.log(keyPressed);
    let keyCode = event.keyCode;
    let keyDown = (event.type == 'keydown');
    keyPressed[keyCode] = keyDown;
    if (keyPressed[37]) {
        if (keyPressed[65]) {
            document.querySelector('.key1').style.background = 'linear-gradient(to bottom, rgb(248, 248, 248), rgb(238, 238, 238), grey)';
            document.querySelector('.key1').style.boxShadow = ' 2px -2px black inset, -4px -2px black inset';
            setTimeout(() => {
                document.querySelector('.key1').style.background = 'white';
                document.querySelector('.key1').style.boxShadow = ' none';
            }, 250)
            let keySound = new sound('key1.mp3')
            keySound.play();
        }
        if (keyPressed[83]) {
            document.querySelector('.key2').style.background = 'linear-gradient(to bottom, rgb(248, 248, 248), rgb(238, 238, 238), grey)';
            document.querySelector('.key2').style.boxShadow = ' 2px -2px black inset, -4px -2px black inset';
            setTimeout(() => {
                document.querySelector('.key2').style.background = 'white';
                document.querySelector('.key2').style.boxShadow = ' none';
            }, 250)
            let keySound = new sound('key2.mp3')
            keySound.play();
        }
        if (keyPressed[68]) {
            document.querySelector('.key3').style.background = 'linear-gradient(to bottom, rgb(248, 248, 248), rgb(238, 238, 238), grey)';
            document.querySelector('.key3').style.boxShadow = ' 2px -2px black inset, -4px -2px black inset';
            setTimeout(() => {
                document.querySelector('.key3').style.background = 'white';
                document.querySelector('.key3').style.boxShadow = ' none';
            }, 250)
            let keySound = new sound('key3.mp3')
            keySound.play();
        }
        if (keyPressed[70]) {
            document.querySelector('.key4').style.background = 'linear-gradient(to bottom, rgb(248, 248, 248), rgb(238, 238, 238), grey)';
            document.querySelector('.key4').style.boxShadow = ' 2px -2px black inset, -4px -2px black inset';
            setTimeout(() => {
                document.querySelector('.key4').style.background = 'white';
                document.querySelector('.key4').style.boxShadow = ' none';
            }, 250)
            let keySound = new sound('key4.mp3')
            keySound.play();
        }
        if (keyPressed[71]) {
            document.querySelector('.key5').style.background = 'linear-gradient(to bottom, rgb(248, 248, 248), rgb(238, 238, 238), grey)';
            document.querySelector('.key5').style.boxShadow = ' 2px -2px black inset, -4px -2px black inset';
            setTimeout(() => {
                document.querySelector('.key5').style.background = 'white';
                document.querySelector('.key5').style.boxShadow = ' none';
            }, 250)
            let keySound = new sound('key5.mp3')
            keySound.play();
        }
        if (keyPressed[72]) {
            document.querySelector('.key6').style.background = 'linear-gradient(to bottom, rgb(248, 248, 248), rgb(238, 238, 238), grey)';
            document.querySelector('.key6').style.boxShadow = ' 2px -2px black inset, -4px -2px black inset';
            setTimeout(() => {
                document.querySelector('.key6').style.background = 'white';
                document.querySelector('.key6').style.boxShadow = ' none';
            }, 250)
            let keySound = new sound('key6.mp3')
            keySound.play();
        }
        if (keyPressed[74]) {
            document.querySelector('.key7').style.background = 'linear-gradient(to bottom, rgb(248, 248, 248), rgb(238, 238, 238), grey)';
            document.querySelector('.key7').style.boxShadow = ' 2px -2px black inset, -4px -2px black inset';
            setTimeout(() => {
                document.querySelector('.key7').style.background = 'white';
                document.querySelector('.key7').style.boxShadow = ' none';
            }, 250)
            let keySound = new sound('key7.mp3')
            keySound.play();
        }
    }
    if (keyPressed[39]) {
        if (keyPressed[65]) {
            document.querySelector('.key8').style.background = 'linear-gradient(to bottom, rgb(248, 248, 248), rgb(238, 238, 238), grey)';
            document.querySelector('.key8').style.boxShadow = ' 2px -2px black inset, -4px -2px black inset';
            setTimeout(() => {
                document.querySelector('.key8').style.background = 'white';
                document.querySelector('.key8').style.boxShadow = ' none';
            }, 250)
            let keySound = new sound('key8.mp3')
            keySound.play();
        }
        if (keyPressed[83]) {
            document.querySelector('.key9').style.background = 'linear-gradient(to bottom, rgb(248, 248, 248), rgb(238, 238, 238), grey)';
            document.querySelector('.key9').style.boxShadow = ' 2px -2px black inset, -4px -2px black inset';
            setTimeout(() => {
                document.querySelector('.key9').style.background = 'white';
                document.querySelector('.key9').style.boxShadow = ' none';
            }, 250)
            let keySound = new sound('key9.mp3')
            keySound.play();
        }
        if (keyPressed[68]) {
            document.querySelector('.key10').style.background = 'linear-gradient(to bottom, rgb(248, 248, 248), rgb(238, 238, 238), grey)';
            document.querySelector('.key10').style.boxShadow = ' 2px -2px black inset, -4px -2px black inset';
            setTimeout(() => {
                document.querySelector('.key10').style.background = 'white';
                document.querySelector('.key10').style.boxShadow = ' none';
            }, 250)
            let keySound = new sound('key10.mp3')
            keySound.play();
        }
        if (keyPressed[70]) {
            document.querySelector('.key11').style.background = 'linear-gradient(to bottom, rgb(248, 248, 248), rgb(238, 238, 238), grey)';
            document.querySelector('.key11').style.boxShadow = ' 2px -2px black inset, -4px -2px black inset';
            setTimeout(() => {
                document.querySelector('.key11').style.background = 'white';
                document.querySelector('.key11').style.boxShadow = ' none';
            }, 250)
            let keySound = new sound('key11.mp3')
            keySound.play();
        }
        if (keyPressed[71]) {
            document.querySelector('.key12').style.background = 'linear-gradient(to bottom, rgb(248, 248, 248), rgb(238, 238, 238), grey)';
            document.querySelector('.key12').style.boxShadow = ' 2px -2px black inset, -4px -2px black inset';
            setTimeout(() => {
                document.querySelector('.key12').style.background = 'white';
                document.querySelector('.key12').style.boxShadow = ' none';
            }, 250)
            let keySound = new sound('key12.mp3')
            keySound.play();
        }
        if (keyPressed[72]) {
            document.querySelector('.key13').style.background = 'linear-gradient(to bottom, rgb(248, 248, 248), rgb(238, 238, 238), grey)';
            document.querySelector('.key13').style.boxShadow = ' 2px -2px black inset, -4px -2px black inset';
            setTimeout(() => {
                document.querySelector('.key13').style.background = 'white';
                document.querySelector('.key13').style.boxShadow = ' none';
            }, 250)
            let keySound = new sound('key13.mp3')
            keySound.play();
        }
        if (keyPressed[74]) {
            document.querySelector('.key14').style.background = 'linear-gradient(to bottom, rgb(248, 248, 248), rgb(238, 238, 238), grey)';
            document.querySelector('.key14').style.boxShadow = ' 2px -2px black inset, -4px -2px black inset';
            setTimeout(() => {
                document.querySelector('.key14').style.background = 'white';
                document.querySelector('.key14').style.boxShadow = ' none';
            }, 250)
            let keySound = new sound('key14.mp3')
            keySound.play();
        }
    }
    if (keyPressed[81]) {
        document.querySelector('.key15').style.background = 'black';
        setTimeout(() => { document.querySelector('.key15').style.background = 'rgb(71, 71, 71)'; }, 250)
        let keySound = new sound('key15.mp3')
        keySound.play();
    }
    if (keyPressed[87]) {
        document.querySelector('.key16').style.background = 'black';
        setTimeout(() => { document.querySelector('.key16').style.background = 'rgb(71, 71, 71)'; }, 250)

        let keySound = new sound('key16.mp3')
        keySound.play();
    }
    if (keyPressed[69]) {
        document.querySelector('.key17').style.background = 'black';
        setTimeout(() => { document.querySelector('.key17').style.background = 'rgb(71, 71, 71)'; }, 250)

        let keySound = new sound('key17.mp3')
        keySound.play();
    }
    if (keyPressed[82]) {
        document.querySelector('.key18').style.background = 'black';
        setTimeout(() => { document.querySelector('.key18').style.background = 'rgb(71, 71, 71)'; }, 250)

        let keySound = new sound('key18.mp3')
        keySound.play();
    }
    if (keyPressed[84]) {
        document.querySelector('.key19').style.background = 'black';
        setTimeout(() => { document.querySelector('.key19').style.background = 'rgb(71, 71, 71)'; }, 250)

        let keySound = new sound('key19.mp3')
        keySound.play();
    }
    if (keyPressed[89]) {
        document.querySelector('.key20').style.background = 'black';
        setTimeout(() => { document.querySelector('.key20').style.background = 'rgb(71, 71, 71)'; }, 250)

        let keySound = new sound('key20.mp3')
        keySound.play();
    }
    if (keyPressed[85]) {
        document.querySelector('.key21').style.background = 'black';
        setTimeout(() => { document.querySelector('.key21').style.background = 'rgb(71, 71, 71)'; }, 250)

        let keySound = new sound('key21.mp3')
        keySound.play();
    }
    if (keyPressed[73]) {
        document.querySelector('.key22').style.background = 'black';
        setTimeout(() => { document.querySelector('.key22').style.background = 'rgb(71, 71, 71)'; }, 250)

        let keySound = new sound('key22.mp3')
        keySound.play();
    }
    if (keyPressed[79]) {
        document.querySelector('.key23').style.background = 'black';
        setTimeout(() => { document.querySelector('.key23').style.background = 'rgb(71, 71, 71)'; }, 250)

        let keySound = new sound('key23.mp3')
        keySound.play();
    }
    if (keyPressed[80]) {
        document.querySelector('.key24').style.background = 'black';
        setTimeout(() => { document.querySelector('.key24').style.background = 'rgb(71, 71, 71)'; }, 250)

        let keySound = new sound('key24.mp3')
        keySound.play();
    }

}
window.addEventListener('keydown', keyPress)
window.addEventListener('keyup', (event) => {
    console.log(event.keyCode);
    keyPressed[event.keyCode] = false;
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