var casper = require('./casper_base')
var cutils = require('./custom-utils/casper_logging').log
var fs = require('fs')

// Listen for log
casper.on('log', function (entry) {
  // Write output in a file
  fs.write('./tmp/log.json', JSON.stringify(entry, null, '\t'))
})

// Simulate 404
casper.start('http://google.com/sad')
// Simulate mod echo
cutils.echoTrace("Trace test")
casper.run()
