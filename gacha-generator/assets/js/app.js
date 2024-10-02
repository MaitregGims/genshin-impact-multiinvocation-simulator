const solo = document.querySelector('#single')
const multi = document.querySelector('#multi')
let pityRate = 0;
let legendaryPileOuFace = false;
const video = document.querySelector('#myVideo')

// Fonction pour générer un nombre aléatoire entre 1 et 100
function generateRandomNumber() {
    const min = 1;
    const max = 100;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

let chanceSys = (e, type) => {
    console.log(pityRate)
    if (pityRate > 99) {
        legendary(type);
    } else {
        if (e == 1) {
            legendary(type);
        } else if (e <= 15) {
            console.log('epic')
            if (type == "multi") {
                video.classList.remove('hidden')
                video.src = './assets/img/epic-multi.mp4'
                setTimeout(() => {
                    video.classList.add('hidden')
                }, 7000)
            } else if (type == 'solo') {
                video.classList.remove('hidden')
                video.src = './assets/img/single-epic.mp4'
                setTimeout(() => {
                    video.classList.add('hidden')
                }, 9000)
            }
        } else {
            if (type == "solo") {
                video.classList.remove('hidden')
                video.src = './assets/img/single-nothing.mp4'
                setTimeout(() => {
                    video.classList.add('hidden')
                }, 8000)
            }
            console.log('shit')
        }
    }
}

let legendary = (type) => {
    console.log(type)
    console.log('legendary')
    pityRate = 0;
    if (legendaryPileOuFace) {
        console.log('win')
        if (type == "multi") {
            video.classList.remove('hidden')
            video.src = './assets/img/kinich-multi-anim.mp4'
            setTimeout(() => {
                video.classList.add('hidden')
            }, 33000)
        }
    } else {
        randomNum = generateRandomNumber();
        if (randomNum >= 50) {
            if (type == "multi") {
                video.classList.remove('hidden')
                video.src = './assets/img/kinich-multi-anim.mp4'
                setTimeout(() => {
                    video.classList.add('hidden')
                }, 33000)
            }
            console.log('win')
            legendaryPileOuFace = false;
        } else {
            if (type == "solo") {
                video.classList.remove('hidden')
                video.src = './assets/img/loosed-single-leg.mp4'
                setTimeout(() => {
                    video.classList.add('hidden')
                }, 9000)
            } else if (type == "multi") {
                video.classList.remove('hidden')
                video.src = './assets/img/loosed-multi-leg.mp4'
                setTimeout(() => {
                    video.classList.add('hidden')
                }, 20000)
            }
            console.log('loose')
            legendaryPileOuFace = true;
        }
    }
}

// Appel de la fonction et affichage du résultat
let randomNum = generateRandomNumber();


solo.addEventListener('click', () => {
    randomNum = generateRandomNumber();
    pityRate++;
    chanceSys(randomNum, 'solo');
})



multi.addEventListener('click', () => {
    for (let i = 0; i < 10; i++) {
        randomNum = generateRandomNumber();
        pityRate++;
        chanceSys(randomNum, 'multi');
    }
})