const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');

function random_square(){
    squares.forEach(element => {
        element.classList.remove('mole')
    });

    let random_position = squares[Math.floor(Math.random() * 9)]
    console.log(random_position)
}
random_square()