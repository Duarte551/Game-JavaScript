const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const game = document.querySelector('.over')

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 900);
}

const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px' , '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 110){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src='./images/game-over.png';
        mario.style.width = '60px';
        mario.style.marginLeft = '55px';

        clearInterval(loop);
    }
}, 10)

document.addEventListener('keydown', jump);