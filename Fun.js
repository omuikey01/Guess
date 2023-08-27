document.getElementById("box").addEventListener("click", Deside)
document.getElementById("btnSub").addEventListener("click", MatchFun)

let SpinCount = 10, timeCount = 5;
let SpinCountnum, GuessCount;
let StopSet;
let boxRound;
let leftSide = 0;
let GessNum, UserNum, score = 0;
let ShownumPage;

SpinCountnum = document.getElementById("spinNum");
GuessCount = document.getElementById("countNumShow");
boxRound = document.getElementById("box")
ShownumPage = document.getElementById("Random")

SpinCountnum.innerHTML = SpinCount
GuessCount.innerHTML = timeCount

function Deside() {
    if (leftSide == 0 && SpinCount > 0) {
        startSet();
        timeCount = 5;
        GuessCount.innerHTML = timeCount
    }
    else if (SpinCount == 0) {
        SpinTimeEnd();
    }
    else {
        StopSetInt();
    }
}
let startSet = () => {
    StopSet = setInterval(myFun, 10)

}
let myFun = () => {

    leftSide += 20;
    boxRound.style.rotate = leftSide + "deg";
}
let StopSetInt = () => {
    clearInterval(StopSet)
    leftSide = 0;
    numGenerate()
}

let numGenerate = () => {
    GessNum = Math.floor(Math.random() * 100);
    if (GessNum < 1 || GessNum > 99) {
        numGenerate();
    }
    SpinCount--;
    SpinCountnum.innerHTML = SpinCount

}
let countNumEnd = () => {
    alert("Sorry, Your time has End")
    clearInterval(StopSet)
    alert("But, You can Spin !!")
    document.getElementById("inpuser").value = "";
}

let SpinTimeEnd = () => {
    alert("Sorry, Your Spin Time has End");
    timeCount = 0;
    GuessCount.innerHTML = timeCount;
    if(score > 5){
        alert("Congratulation, You Win!!!!!");
    }
    else{
        alert("Try, One More Time");
    }
}

function MatchFun() {
    if (timeCount != 0) {
        timeCount--;
        GuessCount.innerHTML = timeCount
        UserNum = parseInt(document.getElementById("inpuser").value);
        if (UserNum == GessNum) {
            alert("Match")
            document.getElementById("inpuser").value = "";
            score++;
            ShownumPage.innerHTML = score;

        }
        else if (UserNum < GessNum) {
            alert("Less");
            document.getElementById("inpuser").value = "";
        }
        else if (UserNum > GessNum) {
            alert("More");
            document.getElementById("inpuser").value = "";
        }
    }
    else {
        countNumEnd();
    }
}