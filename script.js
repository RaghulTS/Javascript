function Xturn() {
    var createP = document.createElement('p');
    createP.setAttribute('id', 'turn');
    var txtTurn = document.createTextNode('X turn');
    createP.appendChild(txtTurn);
    document.getElementById('turnDiv').appendChild(createP);
}

Xturn();

let n = 0;

function checkEvenOrOdd() {

    if (n % 2 == 0) {
        xORo = 'X';

    }else {
        xORo = 'O';


    }
}

var winList = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
]

function turn() {
    var turnXO = '';
    if (n % 2 == 0) {
        turnXO = 'X';
    }else {
        turnXO = 'O';
    }
    document.getElementById('turn').remove();
    var createP = document.createElement('p');
    createP.setAttribute('id', 'turn');
    var txtTurn = document.createTextNode(turnXO + ' turn');
    createP.appendChild(txtTurn);
    document.getElementById('turnDiv').appendChild(createP);

}



function finalDisable() {
    for (let k = 1; k < 10; k ++ ) {
        document.getElementById('light' + String(k)).disabled = true;
    }

}


function resetFunc() {
    for (let k = 1; k < 10; k ++ ) {
        document.getElementById('light' + String(k)).disabled = false;
        document.getElementById('light' + String(k)).innerHTML = '';
    }
    n = 0;
    winList = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ];
    document.getElementById('turn').remove();
    Xturn();
}


function check_win(sign) {

    if (winList[0][0] == sign && winList[0][1] == sign && winList[0][2] == sign) {
        alert(sign + ' Won')
        finalDisable();
    }else if (winList[1][0] == sign && winList[1][1] == sign && winList[1][2] == sign){
        alert(sign + ' Won');
        finalDisable();
    }else if (winList[2][0] == sign && winList[2][1] == sign && winList[2][2] == sign){
        alert(sign + ' Won');
        finalDisable();
    }else if (winList[0][0] == sign && winList[1][0] == sign && winList[2][0] == sign){
        alert(sign + ' Won');
        finalDisable();
    }else if (winList[0][1] == sign && winList[1][1] == sign && winList[2][1] == sign){
        alert(sign + ' Won');
        finalDisable();
    }else if (winList[0][2] == sign && winList[1][2] == sign && winList[2][2] == sign){
        alert(sign + ' Won');
        finalDisable();
    }else if (winList[0][0] == sign && winList[1][1] == sign && winList[2][2] == sign){
        alert(sign + ' Won');
        finalDisable();
    }else if (winList[0][2] == sign && winList[1][1] == sign && winList[2][0] == sign){
        alert(sign + ' Won');
        finalDisable();
    }


}









function btn1() {
    checkEvenOrOdd();
    document.getElementById('light1').innerHTML = xORo;
    document.getElementById('light1').disabled = true;
    n += 1;
    winList[0][0] = xORo;
    check_win(xORo);
    turn();
    finalDraw();
}


function btn2() {
    checkEvenOrOdd();
    document.getElementById('light2').innerHTML = xORo;
    document.getElementById('light2').disabled = true;
    n += 1;
    winList[0][1] = xORo;
    check_win(xORo);
    turn();
    finalDraw();

}
function btn3() {
    checkEvenOrOdd();
    document.getElementById('light3').innerHTML = xORo;
    document.getElementById('light3').disabled = true;
    n += 1;
    winList[0][2] = xORo;
    check_win(xORo);
    turn();
    finalDraw();
}

function btn4() {
    checkEvenOrOdd();
    document.getElementById('light4').innerHTML = xORo;
    document.getElementById('light4').disabled = true;
    n += 1;
    winList[1][0] = xORo;
    check_win(xORo);
    turn();
    finalDraw();

}
function btn5() {
    checkEvenOrOdd();
    document.getElementById('light5').innerHTML = xORo;
    document.getElementById('light5').disabled = true;
    n += 1;
    winList[1][1] = xORo;
    check_win(xORo);
    turn();
    finalDraw();
}
function btn6() {
    checkEvenOrOdd();
    document.getElementById('light6').innerHTML = xORo;
    document.getElementById('light6').disabled = true;
    n += 1;
    winList[1][2] = xORo;
    check_win(xORo);
    turn();
    finalDraw();
}

function btn7() {
    checkEvenOrOdd();
    document.getElementById('light7').innerHTML = xORo;
    document.getElementById('light7').disabled = true;
    n += 1;
    winList[2][0] = xORo;
    check_win(xORo);
    turn();
    finalDraw();
}
function btn8() {
    checkEvenOrOdd();
    document.getElementById('light8').innerHTML = xORo;
    document.getElementById('light8').disabled = true;
    n += 1;
    winList[2][1] = xORo;
    check_win(xORo);
    turn();
    finalDraw();
}
function btn9() {
    checkEvenOrOdd();
    document.getElementById('light9').innerHTML = xORo;
    document.getElementById('light9').disabled = true;
    n += 1;
    winList[2][2] = xORo;
    check_win(xORo);
    turn();
    finalDraw();
}



