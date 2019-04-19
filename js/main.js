localStorage.setItem('attempts', 0)
const after = document.getElementById('top')
const box = document.getElementById('box')

function checkNumber (){

    const answer = 5
    const guess = document.forms["numbercheck"]["guess"].value

    localStorage.setItem('attempts',parseInt(localStorage.getItem('attempts'))+1);

    if (localStorage.getItem('attempts') == 3) {
        // insert html code 
        let htmlcode = '<div id="toomany">You are out of guesses!</div>' 
        after.insertAdjacentHTML('afterend', htmlcode)
        box.parentNode.removeChild(box)
    }

    if (guess == answer) {
        // instert html code good
        let htmlcode = '<div id="result">You guessed right!</div>'
        after.insertAdjacentHTML('afterend', htmlcode)
    } else {
        // instert html code wrong
        let htmlcode = '<div id="result">You guessed wrong!</div>' 
        after.insertAdjacentHTML('afterend', htmlcode)
    }
}

function clearresult(){
    console.log(document.getElementById('result'))
    let result = document.getElementById('result')
    result.innerHTML = ""
}