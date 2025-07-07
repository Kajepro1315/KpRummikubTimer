const slider = document.getElementById("czas");
const czas = document.getElementById("number");
const timeTimer = document.getElementById("timeTimer");

const sliderGame = document.getElementById("Game");
const Game = document.getElementById("numberOfGame");
const SmalPoint = document.querySelectorAll('.inputSecond');
const BigPoints = document.querySelectorAll('.newSystemButton');


let isTimerEnable = false;

let changeIntervalBatton = 0;

function updateTime() {
    czas.textContent = slider.value + " sekund";
    timeTimer.textContent = slider.value;
}

function updateGame() {
    Game.textContent = sliderGame.value + " gry";
    switch(sliderGame.value) {
        case "6":
            SmalPoint.forEach(el => el.classList.add("sixS"));
            BigPoints.forEach(el => el.classList.add("sixF"));

            SmalPoint.forEach(el => el.classList.remove("sevenS"));
            BigPoints.forEach(el => el.classList.remove("sevenF"));
            break;

        case "7":
            SmalPoint.forEach(el => el.classList.add("sevenS"));
            BigPoints.forEach(el => el.classList.add("sevenF"));

            SmalPoint.forEach(el => el.classList.remove("sixS"));
            BigPoints.forEach(el => el.classList.remove("sixF"));
            break;

        default:
            SmalPoint.forEach(el => el.classList.remove("sixS"));
            BigPoints.forEach(el => el.classList.remove("sixF")); 

            SmalPoint.forEach(el => el.classList.remove("sevenS"));
            BigPoints.forEach(el => el.classList.remove("sevenF"));
            break;
    }
}

updateTime();

updateGame();

document.getElementById("number").addEventListener("click", function() {
    slider.value = 40;
    updateTime();
})

document.getElementById("numberOfGame").addEventListener("click", function() {
    sliderGame.value = 4;
    updateGame();
})

    const select = document.getElementById("select");

    const submit = document.getElementById("sendButton");
    const playerA_name = document.getElementById("playerName1");
    const playerB_name = document.getElementById("playerName2");
    const playerC_name = document.getElementById("playerName3");
    const playerD_name = document.getElementById("playerName4");

    const playerA_title = document.getElementById("GraczA_Title");
    const playerB_title = document.getElementById("GraczB_Title");
    const playerC_title = document.getElementById("GraczC_Title");
    const playerD_title = document.getElementById("GraczD_Title");

document.getElementById("nowaGra").addEventListener("click", function() {
    window.location.reload();
});

const TimerButton = document.getElementById("TimerButton");

let interval;
const beep = document.getElementById("beep");

let time;

function intervalSet() {
    interval = setInterval(() => {
            time--;
            timeTimer.textContent = time;

            if (time <= 5 && time > 0) {
            beep.play();
            }

            if (time <= 0) {
            clearInterval(interval);
            }
        }, 1000);
}

submit.addEventListener("click", function() {
    time = slider.value
    isTimerEnable = true;
    select.style.display = "none";

    if (playerA_name.value != "" && playerB_name.value != "" && playerC_name.value != "" && playerD_name.value != "") {
        playerA_title.textContent = playerA_name.value;
        playerB_title.textContent = playerB_name.value;
        playerC_title.textContent = playerC_name.value;
        playerD_title.textContent = playerD_name.value;
        }
        })

        let gracz = 1;

        const graczA = document.querySelector(".GraczA");
        const graczB = document.querySelector(".GraczB");
        const graczC = document.querySelector(".GraczC");
        const graczD = document.querySelector(".GraczD");

        function startTimer() {
            if (isTimerEnable) {
            clearInterval(interval);
            time = slider.value;
            timeTimer.textContent = time;

            switch(gracz) {
            case 1:
            document.querySelector(".GraczA").classList.add("AktualnyGracz");
            document.querySelector(".GraczD").classList.remove("AktualnyGracz");
            gracz++;
            break;
            case 2:
            document.querySelector(".GraczB").classList.add("AktualnyGracz");
            document.querySelector(".GraczA").classList.remove("AktualnyGracz");
            gracz++;
            break;
            case 3:
            document.querySelector(".GraczC").classList.add("AktualnyGracz");
            document.querySelector(".GraczB").classList.remove("AktualnyGracz");
            gracz++;
            break;
            case 4:
                document.querySelector(".GraczD").classList.add("AktualnyGracz");
                document.querySelector(".GraczC").classList.remove("AktualnyGracz");
                gracz=1;
            break;
        };

        intervalSet();
    } else {
        return;
    }
}

function pauzeInterval() {
    clearInterval(interval);
};

function resumeInterval() {
    intervalSet();
    
}

TimerButton.addEventListener("click", startTimer);

document.addEventListener("keyup", function(e) {
if (e == "Space" ) {
startTimer()
}
});

const ClassTimerButton = document.querySelector(".TimerButton");

document.getElementById("StopTimer").addEventListener("click", function() {
    switch(changeIntervalBatton) {
        case 0:
            changeIntervalBatton = 1;
            pauzeInterval();
            ClassTimerButton.classList.add("Stoped");
        break;
    case 1:
        changeIntervalBatton = 0;
        resumeInterval();
        ClassTimerButton.classList.remove("Stoped");
        break;
    };
});

function calc() {
let player001 = parseFloat(document.getElementById("newSystem_1-1_Button").textContent);
let player101 = parseFloat(document.getElementById("newSystem_1-2_Button").textContent);
let player201 = parseFloat(document.getElementById("newSystem_1-3_Button").textContent);
let player301 = parseFloat(document.getElementById("newSystem_1-4_Button").textContent);

let player011 = parseFloat(document.getElementById("newSystem_2-1_Button").textContent);
let player111 = parseFloat(document.getElementById("newSystem_2-2_Button").textContent);
let player211 = parseFloat(document.getElementById("newSystem_2-3_Button").textContent);
let player311 = parseFloat(document.getElementById("newSystem_2-4_Button").textContent);

let player021 = parseFloat(document.getElementById("newSystem_3-1_Button").textContent);
let player121 = parseFloat(document.getElementById("newSystem_3-2_Button").textContent);
let player221 = parseFloat(document.getElementById("newSystem_3-3_Button").textContent);
let player321 = parseFloat(document.getElementById("newSystem_3-4_Button").textContent);

let player031 = parseFloat(document.getElementById("newSystem_4-1_Button").textContent);
let player131 = parseFloat(document.getElementById("newSystem_4-2_Button").textContent);
let player231 = parseFloat(document.getElementById("newSystem_4-3_Button").textContent);
let player331 = parseFloat(document.getElementById("newSystem_4-4_Button").textContent);

let player0S1 = document.getElementById("wynikG1");
let player1S1 = document.getElementById("wynikG2");
let player2S1 = document.getElementById("wynikG3");
let player3S1 = document.getElementById("wynikG4");


let player002 = parseFloat(document.getElementById("1game1P2I").value);
let player102 = parseFloat(document.getElementById("1game2P2I").value);
let player202 = parseFloat(document.getElementById("1game3P2I").value);
let player302 = parseFloat(document.getElementById("1game4P2I").value);

let player012 = parseFloat(document.getElementById("2game1P2I").value);
let player112 = parseFloat(document.getElementById("2game2P2I").value);
let player212 = parseFloat(document.getElementById("2game3P2I").value);
let player312 = parseFloat(document.getElementById("2game4P2I").value);

let player022 = parseFloat(document.getElementById("3game1P2I").value);
let player122 = parseFloat(document.getElementById("3game2P2I").value);
let player222 = parseFloat(document.getElementById("3game3P2I").value);
let player322 = parseFloat(document.getElementById("3game4P2I").value);

let player032 = parseFloat(document.getElementById("4game1P2I").value);
let player132 = parseFloat(document.getElementById("4game2P2I").value);
let player232 = parseFloat(document.getElementById("4game3P2I").value);
let player332 = parseFloat(document.getElementById("4game4P2I").value);

let player0S2 = document.getElementById("wynik1");
let player1S2 = document.getElementById("wynik2");
let player2S2 = document.getElementById("wynik3");
let player3S2 = document.getElementById("wynik4");

let wynik0 = player001 + player011 + player021 + player031;
let wynik1 = player101 + player111 + player121 + player131;
let wynik2 = player201 + player211 + player221 + player231;
let wynik3 = player301 + player311 + player321 + player331;

let wynik4 = player002 + player012 + player022 + player032;
let wynik5 = player102 + player112 + player122 + player132;
let wynik6 = player202 + player212 + player222 + player232;
let wynik7 = player302 + player312 + player322 + player332;

player0S1.textContent = wynik0;
player1S1.textContent = wynik1;
player2S1.textContent = wynik2;
player3S1.textContent = wynik3;

player0S2.textContent = wynik4;
player1S2.textContent = wynik5;
player2S2.textContent = wynik6;
player3S2.textContent = wynik7;

let suma1 = wynik4 + wynik5 + wynik6 + wynik7;

if (suma1 == 0) {
document.getElementById("sumaTR").style.backgroundColor = "#008000";
} else if (suma1 != 0) {
document.getElementById("sumaTR").style.backgroundColor = "#FF0000";
}
};

// reload tab function


function reloadTab1(i) {
calc();
const BTN_1 = document.getElementById("newSystem_1-1_Button");
const BTN_2 = document.getElementById("newSystem_1-2_Button");
const BTN_3 = document.getElementById("newSystem_1-3_Button");
const BTN_4 = document.getElementById("newSystem_1-4_Button");

BTN_1.textContent = 0;
BTN_2.textContent = 0;
BTN_3.textContent = 0;
BTN_4.textContent = 0;

let player002C = document.getElementById("1game1P2I");
let player102C = document.getElementById("1game2P2I");
let player202C = document.getElementById("1game3P2I");
let player302C = document.getElementById("1game4P2I");

let player002 = parseFloat(document.getElementById("1game1P2I").value);
let player102 = parseFloat(document.getElementById("1game2P2I").value);
let player202 = parseFloat(document.getElementById("1game3P2I").value);
let player302 = parseFloat(document.getElementById("1game4P2I").value);

switch(i) {
case 1:
BTN_1.textContent = 1;
let wynik1 = player102 + player202 + player302;
wynik1 = "" + wynik1;
wynik1 = wynik1.replace("-", "");
player002C.value = wynik1;
break;
case 2:
BTN_2.textContent = 1;
let wynik2 = player002 + player202 + player302;
wynik2 = "" + wynik2;
wynik2 = wynik2.replace("-", "");
player102C.value = wynik2;
break;
case 3:
BTN_3.textContent = 1;
let wynik3 = player102 + player002 + player302;
wynik3 = "" + wynik3;
wynik3 = wynik3.replace("-", "");
player202C.value = wynik3;
break;
case 4:
BTN_4.textContent = 1;
let wynik4 = player102 + player202 + player002;
wynik4 = "" + wynik4;
wynik4 = wynik4.replace("-", "");
player302C.value = wynik4;
break;
}

calc();
}



function reloadTab2(i) {
calc();
const BTN_1 = document.getElementById("newSystem_2-1_Button");
const BTN_2 = document.getElementById("newSystem_2-2_Button");
const BTN_3 = document.getElementById("newSystem_2-3_Button");
const BTN_4 = document.getElementById("newSystem_2-4_Button");

BTN_1.textContent = 0;
BTN_2.textContent = 0;
BTN_3.textContent = 0;
BTN_4.textContent = 0;

let player002C = document.getElementById("2game1P2I");
let player102C = document.getElementById("2game2P2I");
let player202C = document.getElementById("2game3P2I");
let player302C = document.getElementById("2game4P2I");

let player002 = parseFloat(document.getElementById("2game1P2I").value);
let player102 = parseFloat(document.getElementById("2game2P2I").value);
let player202 = parseFloat(document.getElementById("2game3P2I").value);
let player302 = parseFloat(document.getElementById("2game4P2I").value);

switch(i) {
case 1:
BTN_1.textContent = 1;
let wynik1 = player102 + player202 + player302;
wynik1 = "" + wynik1;
wynik1 = wynik1.replace("-", "");
player002C.value = wynik1;
break;
case 2:
BTN_2.textContent = 1;
let wynik2 = player002 + player202 + player302;
wynik2 = "" + wynik2;
wynik2 = wynik2.replace("-", "");
player102C.value = wynik2;
break;
case 3:
BTN_3.textContent = 1;
let wynik3 = player102 + player002 + player302;
wynik3 = "" + wynik3;
wynik3 = wynik3.replace("-", "");
player202C.value = wynik3;
break;
case 4:
BTN_4.textContent = 1;
let wynik4 = player102 + player202 + player002;
wynik4 = "" + wynik4;
wynik4 = wynik4.replace("-", "");
player302C.value = wynik4;
break;
}

calc();
}



function reloadTab3(i) {
calc();
const BTN_1 = document.getElementById("newSystem_3-1_Button");
const BTN_2 = document.getElementById("newSystem_3-2_Button");
const BTN_3 = document.getElementById("newSystem_3-3_Button");
const BTN_4 = document.getElementById("newSystem_3-4_Button");

BTN_1.textContent = 0;
BTN_2.textContent = 0;
BTN_3.textContent = 0;
BTN_4.textContent = 0;

let player002C = document.getElementById("3game1P2I");
let player102C = document.getElementById("3game2P2I");
let player202C = document.getElementById("3game3P2I");
let player302C = document.getElementById("3game4P2I");

let player002 = parseFloat(document.getElementById("3game1P2I").value);
let player102 = parseFloat(document.getElementById("3game2P2I").value);
let player202 = parseFloat(document.getElementById("3game3P2I").value);
let player302 = parseFloat(document.getElementById("3game4P2I").value);

switch(i) {
case 1:
BTN_1.textContent = 1;
let wynik1 = player102 + player202 + player302;
wynik1 = "" + wynik1;
wynik1 = wynik1.replace("-", "");
player002C.value = wynik1;
break;
case 2:
BTN_2.textContent = 1;
let wynik2 = player002 + player202 + player302;
wynik2 = "" + wynik2;
wynik2 = wynik2.replace("-", "");
player102C.value = wynik2;
break;
case 3:
BTN_3.textContent = 1;
let wynik3 = player102 + player002 + player302;
wynik3 = "" + wynik3;
wynik3 = wynik3.replace("-", "");
player202C.value = wynik3;
break;
case 4:
BTN_4.textContent = 1;
let wynik4 = player102 + player202 + player002;
wynik4 = "" + wynik4;
wynik4 = wynik4.replace("-", "");
player302C.value = wynik4;
break;
}

calc();
}



function reloadTab4(i) {
calc();
const BTN_1 = document.getElementById("newSystem_4-1_Button");
const BTN_2 = document.getElementById("newSystem_4-2_Button");
const BTN_3 = document.getElementById("newSystem_4-3_Button");
const BTN_4 = document.getElementById("newSystem_4-4_Button");

BTN_1.textContent = 0;
BTN_2.textContent = 0;
BTN_3.textContent = 0;
BTN_4.textContent = 0;

let player002C = document.getElementById("4game1P2I");
let player102C = document.getElementById("4game2P2I");
let player202C = document.getElementById("4game3P2I");
let player302C = document.getElementById("4game4P2I");

let player002 = parseFloat(document.getElementById("4game1P2I").value);
let player102 = parseFloat(document.getElementById("4game2P2I").value);
let player202 = parseFloat(document.getElementById("4game3P2I").value);
let player302 = parseFloat(document.getElementById("4game4P2I").value);

switch(i) {
case 1:
BTN_1.textContent = 1;
let wynik1 = player102 + player202 + player302;
wynik1 = "" + wynik1;
wynik1 = wynik1.replace("-", "");
player002C.value = wynik1;
break;
case 2:
BTN_2.textContent = 1;
let wynik2 = player002 + player202 + player302;
wynik2 = "" + wynik2;
wynik2 = wynik2.replace("-", "");
player102C.value = wynik2;
break;
case 3:
BTN_3.textContent = 1;
let wynik3 = player102 + player002 + player302;
wynik3 = "" + wynik3;
wynik3 = wynik3.replace("-", "");
player202C.value = wynik3;
break;
case 4:
BTN_4.textContent = 1;
let wynik4 = player102 + player202 + player002;
wynik4 = "" + wynik4;
wynik4 = wynik4.replace("-", "");
player302C.value = wynik4;
break;
}

calc();
}