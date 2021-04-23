function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

function prints() {
    let i = setInterval(printTime, 1000);
}

prints();