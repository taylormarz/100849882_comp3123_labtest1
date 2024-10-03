// create a logs directory
const fs = require('fs');
const process = require('process');
const logPath = './Logs';

// create directory if it doesn't exist
if (!fs.existsSync(logPath)) {
    fs.mkdirSync(logPath);
    console.log(`${logPath} was created.`);
} else {
    console.log(`${logPath} already exists.`);
}

// change current process to new logs directory
try {
    process.chdir(logPath);
    console.log(`Successfully changed to ${logPath} directory.`);
} catch (error) {
    console.error(`Error changing to ${logPath} directory.`);
}

// loop until log.txt files from 0-10 are created
for(let count = 0; count <= 10; count++){
    try {
        // create 10 log files and write some text into file
        fs.appendFileSync(`log${count}.txt`, "writing content to file\n")
    } catch (error) {
        console.error(`Error writing to log${count}.txt`, error)
    }
    // output file names to console as they're created
    console.log(`log${count}.txt`)
}
