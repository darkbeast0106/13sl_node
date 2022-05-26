const Szamologep = require('./szamologep');
const calculator = new Szamologep();

function execute(line) {
    let siker = false;
    siker = check(line, "+", calculator.osszead);
    siker = siker || check(line, "-", calculator.kivon);
    siker = siker || check(line, "*", calculator.szoroz);
    siker = siker || check(line, "/", calculator.oszt);
    if (!siker) {
        console.error("Nem adott meg műveletet.");
    }
}

function check(line, seperator, whatToDo) {
    if (!line.includes(seperator)) {
        return false;
    }
    const params = line.split(seperator);
    if (params.length !== 2) {
        console.error("Egyszerre csak egy művelet hajtható végre");
        return true;
    }
    const a = parseFloat(params[0]);
    const b = parseFloat(params[1]);
    if (params[0] != a || params[1] != b) {
        console.log("Csak számot adhat meg. Egyszerre csak egy művelet hajtható végre.");
        return true;
    }
    console.log(whatToDo(a, b));
    return true;
}

module.exports = execute;