import test from 'ava';
import fs from 'fs-extra';

// tmp folder where logs are saved
let tmpPath = './tmp';
// Log writing by casper-test.js
let logPath = tmpPath + '/log.json';
// Output of logs by casper-test.js
let echoPath = tmpPath + '/log.txt';

// Create dir 'tmp' if not exist
if (!fs.existsSync(tmpPath)){
    fs.mkdirSync(tmpPath);
}

// Move log.txt to tmp directory
fs.renameSync('./log.txt', echoPath)


let jsonLog = require(logPath);

// Json to test logs from casper
let jsonLogToTest = {
  level: "warning",
  space: "phantom",
  message: "404 @ http://google.com/sad",
  date: 'a date not to check'
}

let logText = fs.readFileSync(echoPath, 'utf8', 'r');

// Output log to test
// Note: without date at the end of the message
let textToTest = `\u001b[32;1mTrace test\u001b[0m \n\u001b[32;1m----> 'open' called @ http://google.com/sad with settings: \u001b[0m \n{\n    \"method\": \"get\"\n}\n\u001b[33m[warning]\u001b[0m [phantom] 404 @ http://google.com/sad \n\u001b[33m-- 'load.finished' with status: success\u001b[0m \n`



test('Json exists', t => {
  t.truthy(jsonLog, "Json from log Casper output war reading correctly")
})

test('Test httpStatusHandler 404 and logWarn custom method', t => {
  t.is(jsonLog.level, jsonLogToTest.level, "Warning level correct")
  t.is(jsonLog.message, jsonLogToTest.message, "Message is the same, correct")
  t.is(jsonLog.space, jsonLogToTest.space, "Space phantom correct")
})

/** TODO
test('Test httpStatusHandler 400 and logError custom method', t => {
}) */

test('Test setFilter adding dates on.message from Casper', t => {
  // Check how many dates are in the message
  let newLogText = (logText.match(/\[201.+\]/g) || []).length;
  t.deepEqual(newLogText, 4, "Echo message mod working")
})

test('Test output without date at the end', t => {
  let newLogText = logText.replace(/\[201.+\]/g, '');
  t.is(newLogText, textToTest, "Echo message mod working")
})



// Remove the tmp path
fs.remove(tmpPath)
