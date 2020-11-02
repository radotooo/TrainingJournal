// meters

function rowToRun(a) {
    return a * 0.8
}
function rowToBikeErg(a) {
    return a * 1.6
}
function rowToAssBikeCall(a) {
    return a * 0.06
}
function rowToSkiErg(a) {
    return a * 1
}


function runToRow(a) {
    return a * 1.25
}

function runToAssBike(a) {
    return Math.floor(a * 0.07)
}

function runToSkiMetters(a) {
    return Math.floor(a * 1.25)
}

//dsa

function skiToRow(a) {
    return a * 1
}

function skiToAssBike(a) {
    return Math.floor(a * 0.06)
}

function skiToRun(a) {
    return Math.floor(a * 0.8)
}

console.log(rowToRun(100));
console.log(rowToBikeErg(125));
console.log(runToAssBike(100));

