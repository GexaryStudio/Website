let clickTimer = [];
const clickDelay = 400; // 800
const clickRequired = 3; // 6
let fallInterval;
function spamFunc() {
    console.log("Tu spam !!!");
    fallInterval = setInterval(fall, 10);
}
function isItSpam() {
//     clearInterval(fallInterval);
    clickTimer.push(Date.now());
    if (clickTimer.length >= clickRequired) {
        if (clickTimer.at(-1) - clickTimer[0] <= clickDelay) {
            spamFunc();
        }
        clickTimer = [];
    } else {
        if (clickTimer.at(-1) - clickTimer[0] > clickDelay) {
            clickTimer = [];
        }
    }
}
