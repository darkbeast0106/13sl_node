const readline = require('readline');
const Szamologep = require('./szamologep');
const calculator = new Szamologep();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Köszöntöm a számológép alkalmazásban");
console.log("Kilépéshez írja be az 'exit' szót");
console.log("Kérem adja meg az elvégzendő műveletet (pl.: 1.5+2.3): ");

rl.on('line', (input) => {
    if (input.toLowerCase() == "exit") {
        rl.close();
        return;
    }
    const coverted = input.replaceAll(" ", "").replaceAll(",", ".");
    let siker = false;
    siker = check(coverted, "+", calculator.osszead);
    siker = siker || check(coverted, "-", calculator.kivon);
    siker = siker || check(coverted, "*", calculator.szoroz);
    siker = siker || check(coverted, "/", calculator.oszt);
    if (!siker) {
        console.error("Nem adott meg műveletet.");
    }
});

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