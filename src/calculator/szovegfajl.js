const fs = require('fs');
const execute = require('./execute');

fs.readFile('./szamologep_feladatok.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const lines = data.split("\n");
    lines.forEach(line => {
        const converted = line.replaceAll(" ", "").replaceAll(",", ".");
        if (converted != "") {
            execute(converted);
        }
    });
});