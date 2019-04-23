localStorage.setItem('attempts', 0)
const after = document.getElementById('top')
const box = document.getElementById('box')
const button = document.getElementById('check')


function checkNumber (){

    const answer = Math.floor(Math.random() * Math.floor(10) + 1)
    const guess = document.forms["numbercheck"]["guess"].value

    localStorage.setItem('attempts',parseInt(localStorage.getItem('attempts'))+1);

    if (localStorage.getItem('attempts') == 3) {
        let htmlcode = '<div id="toomany">You are out of guesses!</div>' 
        after.insertAdjacentHTML('beforeend', htmlcode)
        box.parentNode.removeChild(box)
        button.parentNode.removeChild(button)
    }

    if (guess == answer) {
        let htmlcode = '<div id="result">You guessed right!</div>'
        after.insertAdjacentHTML('beforeend', htmlcode)
    } else {
        let htmlcode = '<div id="result">You guessed wrong!</div>' 
        after.insertAdjacentHTML('beforeend', htmlcode)
    }
}

function clearresult(){
    let result = document.getElementById('result')
    result.remove()
}

box.addEventListener("click", clearresult);

