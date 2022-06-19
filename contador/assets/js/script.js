    let counter = document.getElementById("counter")

function decrement() {
    counter.innerHTML = parseInt(counter.innerHTML) - 1;

    if (parseInt(counter.innerHTML) < 0) {
        counter.style = "background-color: lightpink;"
    } else if (parseInt(counter.innerHTML) == 0) {
        counter.style = "background-color: initial;"
    };
}

function increment() {
    counter.innerHTML = parseInt(counter.innerHTML) + 1;

    if (parseInt(counter.innerHTML) > 0) {
        counter.style = "background-color: lightblue;"
    } else if (parseInt(counter.innerHTML) == 0) {
        counter.style = "background-color: initial;"
    };
}