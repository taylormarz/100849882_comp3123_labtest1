// remove log files
const fs = require('fs');
const logPath = './Logs';
const parentPath = '../';

// check if directory exists
if (fs.existsSync(logPath)) {
    // change current process to the new logs directory
    try {
        process.chdir(logPath);
        console.log(`Successfully changed to ${logPath} directory.`);
    } catch (error) {
        console.error(`Error changing to ${logPath} directory.`);
    }

    // loop files in logs directory/delete them
    for(let count = 0; count <= 10; count++) {
        try {
            // delete 10 log files
            fs.unlinkSync(`log${count}.txt`)
        } catch (error) {
            console.error(`error deleting log${count}.txt file`, error)
        }
        // output file names to console
        console.log(`deleted files...log${count}.txt`)
    }

    // go back to parent directory
    try {
        process.chdir(parentPath);
        console.log(`Successfully changed to ${parentPath} directory.`);
        // delete log directory once out of it
        fs.rmdirSync(logPath);
        console.log(`${logPath} directory was deleted.`);
    } catch (error) {
        console.error(`Error changing to ${parentPath} directory.`);
    }

} else {
    // if directory doesn't exist
    console.log(`${logPath} directory does not exist.`);
}
