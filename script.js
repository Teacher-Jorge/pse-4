// Line 01
let btn1Do = document.getElementById('btn1Do')
let btn1Does = document.getElementById('btn1Does')
let btn1Are = document.getElementById('btn1Are')
let like1 = document.getElementById('like1')
let notGood1 = document.getElementById('notGood1')
let word1 = document.getElementById('word1')
let score = document.getElementById('score')
let value = 0

btn1Do.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like1.style.visibility = 'visible'
    notGood1.style.visibility = 'hidden'
    btn1Do.style.backgroundColor = 'chartreuse'
    btn1Do.style.color = 'black'
    word1.innerHTML = 'Do'
    word1.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value


    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn1Do.disabled = true
    btn1Does.disabled = true
    btn1Are.disabled = true
})

btn1Does.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood1.style.visibility = 'visible'
    btn1Does.style.backgroundColor = 'red'
    btn1Does.style.color = 'yellow'
    word1.innerHTML = 'Does'
    word1.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn1Does.disabled = true
})
btn1Are.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood1.style.visibility = 'visible'
    btn1Are.style.backgroundColor = 'red'
    btn1Are.style.color = 'yellow'
    word1.innerHTML = 'Are'
    word1.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn1Are.disabled = true
})


// Line 02

let btn2Do = document.getElementById('btn2Do')
let btn2Does = document.getElementById('btn2Does')
let btn2Are = document.getElementById('btn2Are')
let like2 = document.getElementById('like2')
let notGood2 = document.getElementById('notGood2')
let word2 = document.getElementById('word2')

btn2Do.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like2.style.visibility = 'visible'
    notGood2.style.visibility = 'hidden'
    btn2Do.style.backgroundColor = 'chartreuse'
    btn2Do.style.color = 'black'
    word2.innerHTML = 'Do'
    word2.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value


    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn2Do.disabled = true
    btn2Does.disabled = true
    btn2Are.disabled = true
})

btn2Does.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood2.style.visibility = 'visible'
    btn2Does.style.backgroundColor = 'red'
    btn2Does.style.color = 'yellow'
    word2.innerHTML = 'Does'
    word2.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn2Does.disabled = true
})
btn2Are.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood2.style.visibility = 'visible'
    btn2Are.style.backgroundColor = 'red'
    btn2Are.style.color = 'yellow'
    word2.innerHTML = 'Are'
    word2.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn2Are.disabled = true
})
// Line 03

let btn3Do = document.getElementById('btn3Do')
let btn3Does = document.getElementById('btn3Does')
let btn3Are = document.getElementById('btn3Are')
let like3 = document.getElementById('like3')
let notGood3 = document.getElementById('notGood3')
let word3 = document.getElementById('word3')

btn3Do.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like3.style.visibility = 'visible'
    notGood3.style.visibility = 'hidden'
    btn3Do.style.backgroundColor = 'chartreuse'
    btn3Do.style.color = 'black'
    word3.innerHTML = 'Do'
    word3.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value


    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn3Do.disabled = true
    btn3Does.disabled = true
    btn3Are.disabled = true
})

btn3Does.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood3.style.visibility = 'visible'
    btn3Does.style.backgroundColor = 'red'
    btn3Does.style.color = 'yellow'
    word3.innerHTML = 'Does'
    word3.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn3Does.disabled = true
})
btn3Are.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood3.style.visibility = 'visible'
    btn3Are.style.backgroundColor = 'red'
    btn3Are.style.color = 'yellow'
    word3.innerHTML = 'Are'
    word3.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn3Are.disabled = true
})
// Line 04

let btn4Do = document.getElementById('btn4Do')
let btn4Does = document.getElementById('btn4Does')
let btn4Are = document.getElementById('btn4Are')
let like4 = document.getElementById('like4')
let notGood4 = document.getElementById('notGood4')
let word4 = document.getElementById('word4')

btn4Does.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like4.style.visibility = 'visible'
    notGood4.style.visibility = 'hidden'
    btn4Does.style.backgroundColor = 'chartreuse'
    btn4Does.style.color = 'black'
    word4.innerHTML = 'Does'
    word4.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value


    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn4Do.disabled = true
    btn4Does.disabled = true
    btn4Are.disabled = true
})

btn4Do.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood4.style.visibility = 'visible'
    btn4Do.style.backgroundColor = 'red'
    btn4Do.style.color = 'yellow'
    word4.innerHTML = 'Do'
    word4.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn4Do.disabled = true
})
btn4Are.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood4.style.visibility = 'visible'
    btn4Are.style.backgroundColor = 'red'
    btn4Are.style.color = 'yellow'
    word4.innerHTML = 'Are'
    word4.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn4Are.disabled = true
})
// Line 05

let btn5Do = document.getElementById('btn5Do')
let btn5Does = document.getElementById('btn5Does')
let btn5Doesnt = document.getElementById('btn5Doesnt')
let like5 = document.getElementById('like5')
let notGood5 = document.getElementById('notGood5')
let word5 = document.getElementById('word5')

btn5Doesnt.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like5.style.visibility = 'visible'
    notGood5.style.visibility = 'hidden'
    btn5Doesnt.style.backgroundColor = 'chartreuse'
    btn5Doesnt.style.color = 'black'
    word5.innerHTML = "doesn't"
    word5.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value


    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn5Do.disabled = true
    btn5Does.disabled = true
    btn5Doesnt.disabled = true
})

btn5Do.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood5.style.visibility = 'visible'
    btn5Do.style.backgroundColor = 'red'
    btn5Do.style.color = 'yellow'
    word5.innerHTML = 'do'
    word5.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn5Do.disabled = true
})
btn5Does.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood5.style.visibility = 'visible'
    btn5Does.style.backgroundColor = 'red'
    btn5Does.style.color = 'yellow'
    word5.innerHTML = 'does'
    word5.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn5Does.disabled = true
})
// Line 06

let btn6Do = document.getElementById('btn6Do')
let btn6Does = document.getElementById('btn6Does')
let btn6Are = document.getElementById('btn6Are')
let like6 = document.getElementById('like6')
let notGood6 = document.getElementById('notGood6')
let word6 = document.getElementById('word6')

btn6Are.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like6.style.visibility = 'visible'
    notGood6.style.visibility = 'hidden'
    btn6Are.style.backgroundColor = 'chartreuse'
    btn6Are.style.color = 'black'
    word6.innerHTML = "Are"
    word6.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value


    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn6Do.disabled = true
    btn6Does.disabled = true
    btn6Are.disabled = true
})

btn6Do.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood6.style.visibility = 'visible'
    btn6Do.style.backgroundColor = 'red'
    btn6Do.style.color = 'yellow'
    word6.innerHTML = 'Do'
    word6.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn6Do.disabled = true
})
btn6Does.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood6.style.visibility = 'visible'
    btn6Does.style.backgroundColor = 'red'
    btn6Does.style.color = 'yellow'
    word6.innerHTML = 'Does'
    word6.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn6Does.disabled = true
})
// Line 07

let btn7Do = document.getElementById('btn7Do')
let btn7Dont = document.getElementById('btn7Dont')
let btn7AmNot = document.getElementById('btn7AmNot')
let like7 = document.getElementById('like7')
let notGood7 = document.getElementById('notGood7')
let word7 = document.getElementById('word7')

btn7Dont.addEventListener('click', function() {
    let audio = document.getElementById('right')
    audio.play()
    like7.style.visibility = 'visible'
    notGood7.style.visibility = 'hidden'
    btn7Dont.style.backgroundColor = 'chartreuse'
    btn7Dont.style.color = 'black'
    word7.innerHTML = "don't"
    word7.style.color = 'chartreuse'
    value++
    document.getElementById('score').innerHTML = value


    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn7Dont.disabled = true
    btn7Do.disabled = true
    btn7AmNot.disabled = true
})

btn7Do.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood7.style.visibility = 'visible'
    btn7Do.style.backgroundColor = 'red'
    btn7Do.style.color = 'yellow'
    word7.innerHTML = 'do'
    word7.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn7Do.disabled = true
})
btn7AmNot.addEventListener('click', function() {
    let audio = document.getElementById('wrong')
    audio.play()
    notGood7.style.visibility = 'visible'
    btn7AmNot.style.backgroundColor = 'red'
    btn7AmNot.style.color = 'yellow'
    word7.innerHTML = "am not"
    word7.style.color = 'red'
    value--
    document.getElementById('score').innerHTML = value

    if (value >= 0) {
        score.style.color = 'lime'
    }  
    else {
        score.style.color = 'red'
    }
    btn7AmNot.disabled = true
})