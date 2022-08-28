
// Time 
setInterval(time, 500)
function time() {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes()
    let sec = date.getSeconds()
    let ap = hours > 12 ? 'PM' : 'AM';

    if (hours > 12) {
        hours = hours - 12
    }
    else if (hours == 0) {
        hours = 12
    }
    if (hours < 10) {
        hours = '0' + hours
    }
    if (min < 10) {
        min = '0' + min
    }
    if (sec < 10) {
        sec = '0' + sec
    }
    document.getElementById('time').innerHTML = `${hours}:${min}:${sec} ${ap}`
}

// toggling between simple and scientific
document.querySelector('#simple').addEventListener('click', () => {
    if (document.querySelector('.simple_buttons').style.display = 'grid') {
        document.querySelector('.simple_buttons').style.display = 'none'
        document.querySelector('.scientific').style.display = 'grid'

    }
}

)
document.querySelector('#scientific').addEventListener('click', () => {
    if (document.querySelector('.scientific').style.display = 'grid') {
        document.querySelector('.scientific').style.display = 'none'
        document.querySelector('.simple_buttons').style.display = 'grid'

    }
}
)
/////

// getting buttons text
let buttons = document.querySelectorAll('.btn')
let display = document.querySelector('#resultShow');
let operators = ['/', '*', '-', '+', '%']
for (let element of buttons) {
    element.addEventListener('click', (e) => {
        btntext = e.target.innerText;
        if (btntext == '×') {
            btntext = '*'
        }
        else if (btntext == '÷') {
            btntext = '/'
        }

        if (operators.includes(btntext) && operators.includes((display.value).charAt((display.value.length) - 1))) {

            display.value = (display.value).slice(0, (display.value.length - 1)) + btntext;
        }
        else {
            display.value += btntext;
        }



    })
}
// Square
document.querySelector('#square').addEventListener('click', () => {
    display.value = (Math.sqrt(display.value)).toFixed(7)
}

)
// Power
document.querySelector('#power').addEventListener('click', () => {
    {
        display.value = (Math.pow(display.value, 2)).toFixed()
    }

})
// log
document.querySelector('#log').addEventListener('click', () => {
    {
        display.value = (Math.log(display.value)).toFixed(7)
    }

})
//cube
document.querySelector('#cube').addEventListener('click', () => {
    {
        display.value = (display.value * display.value * display.value)
    }

})

//sin

document.querySelector('#sin').addEventListener('click', () => {

    {
        display.value = (Math.sin(display.value)).toFixed(7)
    }


})
//cos
document.querySelector('#cos').addEventListener('click', () => {

    {
        display.value = (Math.cos(display.value)).toFixed(7)
    }


})
//tan
document.querySelector('#tan').addEventListener('click', () => {

    {
        display.value = (Math.tan(display.value)).toFixed(7)
    }


})
//pi
document.querySelector('#pi').addEventListener('click', () => {

    {
        display.value = (display.value * 3.14159265359).toFixed(7)
    }


})
//exponent

document.querySelector('#exp').addEventListener('click', () => {

    {
        display.value = (display.value * 2.71828182846).toFixed(7)
    }


})
//radian
document.querySelector('#rad').addEventListener('click', () => {

    {
        display.value = (display.value * Math.PI / 180.0).toFixed(7)
    }


})
// factorial

document.querySelector('#fact').addEventListener('click', () => {

    {
        {
            var i, num, f;
            f = 1
            num = display.value;
            for (i = 1; i <= num; i++) {
                f = f * i;
            }
            i = i - 1;
            display.value = f;
            f.toFixed(7)
        }
    }


})

// half
document.querySelector('#half').addEventListener('click', () => {

    {
        display.value = (display.value / 2)
    }


})
// output
function output() {

    let input = document.querySelector('#resultShow')

    let lastChar = (input.value.length) - 1;
    if (operators.includes(input.value.charAt(lastChar))) {
        display.value = "Invalid input";
        setTimeout(() => {
            display.value = ''
        }, 3000)
        return false;
    }
    else if (display.value === '') {
        display.value = 'Enter something'
        setTimeout(() => {
            display.value = ''
        }, 3000)
    }
    let showResult = document.querySelector('.calculations');
    showResult.innerHTML = eval(input.value)

}

// Modulus




// clear
function valueClear() {
    let input = document.querySelector('#resultShow')
    input.value = ''
    let showResult = document.querySelector('.calculations');
    showResult.innerHTML = ''
}

// backspace
function del() {

    display.value = display.value.slice(0, display.value.length - 1);
}
