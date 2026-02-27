document.getElementById("lefteye").style.backgroundColor = "green";
document.getElementById("head").style.transform = "rotate(15deg)";

document.getElementById("body").style.border = "2px blacksolid";

document.getElementById("mouth").style.borderRadius = "4px";

document.getElementById("righteye").style.border = "4px yellow dotted";

document.getElementById("leftarm").style.backgroundColor = "#b925b2";

document.getElementById("body").style.color = "#abc518";

document.getElementById("head").style.borderTop = "6px black solid";

var rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

function moveUpDown(e) {
    var robotPart = e.target;
    var top = 0;
    var id = setInterval(frame, 5)

    function frame() {
        robotPart.style.top = top + '%';
        top++;
        if (top === 25) {
            clearInterval(id);
        }
    }
}

var leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);

function moveRightLeft(e) {
    var robotPart = e.target;
    var left = 0;
    var id = setInterval(frame, 20)
    function frame() {
        robotPart.style.left = left + '%';
        left++;
        if (left === 80) {
            clearInterval(id);
        }
    }
}