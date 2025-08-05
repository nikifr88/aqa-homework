import chalk from 'chalk';

function colorConsoleLog(color, text) {
    const result = chalk[color](text);
    return console.log(result);
}

colorConsoleLog('blue', 'Hello World');