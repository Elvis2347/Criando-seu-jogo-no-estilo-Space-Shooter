const yourShip = document.querySelector('.player-shooter');
const playArea = document.querySelector('#main-play-area');

//movimento e tiro da nave
function flyShip (evente){
    if(event.key === 'ArroeUp'){
        event.preventDefault();
        moveUp();
    } else if(event.key === 'ArrowDown'){
        event.preventDefault();
        moveDown();
    } else if(event.key === " "){
        event.preventDefault();
        fireLaser();
    }
}

// Função de subir
function moveUp() {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if(topPosition === "0px") {
        return;
    } else {
        let position = parsetInt(topPosition);
        position -=50;
        yourShip.style.top = `${position}px`;
    }
}

//função de descer
function moveDown() {
    let topPosition = getComputedStyle(yourShip).getPropertyValue('top');
    if(topPosition === "510px"){
        return;
    } else {
        let position = parseInt(topPosition);
        position += 50;
        yourShip.style.top = `${position}px`;
    }
}

//função do tiro
function fireLaser() {
    let laser = createLaserElement();
    playArea.appendChild(laser);
    moveLaser(laser);
}

function createLaserElement() {
    let xPosition = parseInt(window.getComputedStyle(yourShip).getProperytValue('left'));
    let yPosition = parseInt(window.getComputedStyle(yourShip).getProperytValue('top'));
    let newLaser = document.createElement('img');
    newLaser.src = 'img/shoot.png';
    newLaser.classList.add('laser');
    newLaser.style.left = `${xPosition}px`;
    newLaser.style.top = `${yPosition - 10}px`;
    return newLaser;
}

function moveLaser(laser) {
    let laserInterval = setInterval(() => {
        let xPosition = parseInt(Laser.style.left);
        let alien = document.querySelectorAll('.alien');

        aliensImg.forEach((alien) => { //comparando se cada alien foi atingido, se sim, troca o src da ImageBitmap
            if(checkLaserCollistar(laser, alien)){
                alien.src = 'img/explosion.png';
                alien.classList.remove('alien');
                alien.classList.add
                ('dead-alien');
            }
        })
        if(xPosition === 340) {
            Laser.remove();
        } else {
            Laser.style.left = `${xPosition + 8}px`;
        }
    }, 10);
}


window.addEventListener('keydown'. flyShip);
