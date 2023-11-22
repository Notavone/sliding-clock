const hh = document.getElementById("hh");
const h = document.getElementById("h");
const mm = document.getElementById("mm");
const m = document.getElementById("m");
const ss = document.getElementById("ss");
const s = document.getElementById("s");

for (const bar of document.getElementsByClassName("bar-2")) {
    bar.innerHTML = "0<br>1<br>2"
}
for (const bar of document.getElementsByClassName("bar-5")) {
    bar.innerHTML = "0<br>1<br>2<br>3<br>4<br>5"
}
for (const bar of document.getElementsByClassName("bar-9")) {
    bar.innerHTML = "0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9"
}


let date = new Date();
date.setHours(19)
date.setMinutes(59)
date.setSeconds(45)
function update() {
    // let date = new Date();

    let hourSecondDigit = ~~(date.getHours() / 10);

    let firstDigitBar = h.children[1];
    if (hourSecondDigit === 2) {
        firstDigitBar.classList.remove("bar-9")
        firstDigitBar.classList.add("bar-3")
        firstDigitBar.innerHTML = "0<br>1<br>2<br>3"
    } else {
        firstDigitBar.classList.remove("bar-3")
        firstDigitBar.classList.add("bar-9")
        firstDigitBar.innerHTML = "0<br>1<br>2<br>3<br>4<br>5<br>6<br>7<br>8<br>9"
    }

    editBar(hh, hourSecondDigit)
    editBar(h, date.getHours() % 10)
    editBar(mm, ~~(date.getMinutes() / 10))
    editBar(m, date.getMinutes() % 10)
    editBar(ss, ~~(date.getSeconds() / 10))
    editBar(s, date.getSeconds() % 10)

    // date.setSeconds(date.getSeconds() + 1)
}

update()
setInterval(() => {
    update();
}, 1000)


function editBar(el, n) {
    let bubble = el.children[0];
    let bar = el.children[1];

    if (n !== +bubble.innerHTML) {
        bubble.classList.add("expand")
        setTimeout(() => {
            bubble.classList.remove("expand")
        }, 400)

    }
    bubble.innerHTML = n
    bar.style.marginTop = `calc(${n} * -40px)`
}
