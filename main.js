

var casper = require('./casper_base')

// Simulate error 404
casper.start('http://google.com/sad')
casper.run()
