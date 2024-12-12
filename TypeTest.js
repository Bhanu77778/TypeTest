let time = document.getElementById("timer");
let quote = document.getElementById("quoteDisplay");
let inp = document.getElementById("quoteInput");
let result = document.getElementById("result");
let submit = document.getElementById("submitBtn");
let reset = document.getElementById("resetBtn");

let sec = 0

function f1() {
    time.textContent = ""
    inp.value = ""
    let url = "https://apis.ccbp.in/random-quote";
    let option = {
        method: "GET"
    }
    fetch(url, option)
        .then(function(value) {
            return value.json()
        })
        .then(function(val) {
            quote.textContent = val.content;
        })
    sec = 0
    a = setInterval(function() {
        sec = sec + 1
        time.textContent = sec
    }, 1000);
}
f1();

reset.onclick = function() {
    clearInterval(a)
    result.textContent = ""
    f1()
}


submit.onclick = function() {
    let text1 = quote.textContent
    let text2 = inp.value
    if (text1 === text2) {
        result.textContent = "Wow!! You have completed this in whooping " + sec + " seconds.";
        clearInterval(a)
    } else {
        result.textContent = "Text you Entered is incorrect. try Again!"
    }
}