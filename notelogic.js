

let track1 = document.getElementById("can1");
let track2 = document.getElementById("can2");
let track3 = document.getElementById("can3");
let track4 = document.getElementById("can4");

const ctx1 = can1.getContext("2d");
const ctx2 = can2.getContext("2d");
const ctx3 = can3.getContext("2d");
const ctx4 = can4.getContext("2d");
//I really don't like this. It looks bad and awful and horrible and I don't like it. But consider this. what if I set up classes later and not right now. What if I did that. Huh. Take that liberals.

var testY = 0;
let dy = 2;

function noteFall() {
    ctx1.clearRect(0,0,track1.width,track1.height)
    ctx1.fillStyle = "rgb 000/60%";
    ctx1.fillRect (0, testY, 550, 5);
    testY+=dy;

    if (testY > 130) { 
        testY = 0;
    }

    requestAnimationFrame(noteFall);
}

requestAnimationFrame(noteFall);

// Yet again. We Make This A Class Fn Later