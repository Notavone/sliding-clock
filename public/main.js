
// let date = new Date();
// date.setHours(19)
// date.setMinutes(59)
// date.setSeconds(50)
function update() {
    let date = new Date();

    let hourSecondDigit = ~~(date.getHours() / 10);
    let firstDigitElement = document.getElementById("h");

    let firstDigitBar = firstDigitElement.children[1];
    if (hourSecondDigit === 2) {
        firstDigitBar.classList.remove("bar-9")
        firstDigitBar.classList.add("bar-3")
        firstDigitBar.innerHTML = "0<br>1<br>2<br>3"
    } else {
        firstDigitBar.classList.remove("bar-3")
        firstDigitBar.classList.add("bar-9")
        firstDigitBar.innerHTML = "0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9"
    }

    editBar(document.getElementById("hh"), hourSecondDigit)
    editBar(firstDigitElement, date.getHours() % 10)
    editBar(document.getElementById("mm"), ~~(date.getMinutes() / 10))
    editBar(document.getElementById("m"), date.getMinutes() % 10)
    editBar(document.getElementById("ss"), ~~(date.getSeconds() / 10))
    editBar(document.getElementById("s"), date.getSeconds() % 10)

    // date.setSeconds(date.getSeconds() + 1)
}

update()
setInterval(() => {
    update();
}, 1000)

for (let el of document.querySelectorAll(".bar-9")) {
    el.innerHTML = "0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9"
}
for (let el of document.querySelectorAll(".bar-5")) {
    el.innerHTML = "0<br>1<br>2<br>3<br>4<br>5"
}
for (let el of document.querySelectorAll(".bar-2")) {
    el.innerHTML = "0<br>1<br>2"
}

function editBar(el, n) {
    let text = el.children[0];
    let bar = el.children[1];

    if (n !== +text.innerHTML) {
        let style = text.style;
        style.width = "80px"
        style.height = "80px"
        style.lineHeight = "80px"
        setTimeout(() => {
            style.width = "70px"
            style.height = "70px"
            style.lineHeight = "70px"
        }, 400)

    }
    text.innerHTML = n
    bar.style.marginTop = `calc(${n} * -40px)`
}
