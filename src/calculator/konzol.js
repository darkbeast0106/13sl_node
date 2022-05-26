const readline = require('readline');
const execute = require('./execute');

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
    const converted = input.replaceAll(" ", "").replaceAll(",", ".");
    execute(converted);
});

