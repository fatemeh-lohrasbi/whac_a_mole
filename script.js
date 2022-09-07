const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const score = document.getElementById('score')
const time_left = document.getElementById('time_left')
var audio = new Audio("media/ringtone.mp3");
let mole_square;
let result = 0;
let move_mole = null;
let current_time = 30;



function random_square() {
    // remove last mole
    squares.forEach(element => {
        element.classList.remove('mole');
    });
    // make mole square randomly
    let random_square = squares[Math.floor(Math.random() * 9)];
    random_square.classList.add('mole');
    mole_square = random_square.id;
}

function auto_move_mole() {
    move_mole = setInterval(random_square, 700)
}
auto_move_mole()

squares.forEach(clicked_square => {
    clicked_square.addEventListener('mousedown', () => {
        if (clicked_square.id == mole_square) {
            audio.play();
            result += 5;
            score.textContent = result;
            mole_square = null
        }
    })
})

function count_down() {
    current_time--;
    time_left.textContent = current_time;

    if (current_time == 0) {
        clearInterval(count_down_timer)
        clearInterval(move_mole)
        alert(`
        game over ⏱
        your score is  ${result} 👏`)
        location.reload();

    }
}
let count_down_timer = setInterval(count_down, 1000)

