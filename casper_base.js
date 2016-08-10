/**
 * @name casper_base.js
 *
 * @description A CasperJs module with some boilerprate to start writing a scraper
 * @author Alessio Occhipinti @lasalefamine
 * @license ISC
 *
 * @link https://github.com/LasaleFamine/casper-base
 *
 */



/**
 * Example of configuration file
 *
 *
  {
    clientScripts:  [
        'includes/jquery.js',      // These two scripts will be injected in remote
        'includes/underscore.js'   // DOM on every request
    ],
    pageSettings: {
        loadImages:  false,        // The WebPage instance used by Casper will
        loadPlugins: false         // use these settings
    },
    logLevel: "info",              // Only "info" level messages will be logged
    verbose: true                  // log messages will be printed out to the console
  }
 *
 */



// patchRequire for creating a Caseperjs module
// See: http://docs.casperjs.org/en/latest/writing_modules.html
var require = patchRequire(require);

// CasperJs utils module
var utils = require('utils');
// CaseperJs fs module
var fs = require('fs');

// Configuration json for casper.create
var config = require('config.json');

// CUSTOM Utils methods
var log = require('custom-utils/casper_logging').log;
var statusHandlers = require('custom-utils/casper_logging').statusHandlers;

// Event handlers
var setupEventHanlers = require('custom-utils/casper_events_filters');

// Create an instance of CasperJs
// Setup with configuration for logging and load faster
// See: http://docs.casperjs.org/en/latest/modules/casper.html#index-1
// See: http://docs.casperjs.org/en/latest/logging.html
var casper = require('casper').create(config);

// Setup http status handlers as upgrade of "options"
casper.options.httpStatusHandlers = {
    404: statusHandlers.notFound
}


/**
 * ======= EVENTS HANDLERS ======
 * See: http://docs.casperjs.org/en/latest/events-filters.html
 */

// On resource received when loading a page
casper.on('resource.received', function(resource) {
    // Ensure is the final stage of loading resource and check for status code
    // Could be: start|end
    if (resource.stage === 'end') {
        // log.echoInfo("This url: " + resource.url);
    }
});

// On error (like native onError() of phantomjs)
casper.on('error', function(msg, backtrace) {
    log.logError(msg);
    log.logError(backtrace);
});

// OnLoadFinished from PhantomJs with fails
casper.on('load.failed', function(obj) {
    log.logError("LOAD FAILED --->");
    log.logError(utils.dump(obj));
});

// OnLoadFinished from PhantomJs
casper.on('load.finished', function(status) {
    log.echoComment("-- 'load.finished' with status: " + status);
});

// When an HTTP request is sent
casper.on('open', function(location, settings) {
    log.echoInfo("----> 'open' called @ " + location + " with settings: ");
    utils.dump(settings);
});

// When "die" method of CasperJs is called
casper.on('die', function(msg, status) {
    log.echoInfo("----> 'die' called with status: " + status);
});

// Error of a step function
casper.on('step.error', function(err) {
    log.logError("Step.Error: " + msg, "ERROR");
});

/**
 * Page events
 */
casper.on("page.error", function(msg, trace) {
    log.logError("Page.Error: " + msg, "ERROR");
});


/**
 * ======= FILTERS ======
 * See: http://docs.casperjs.org/en/latest/events-filters.html
 */
casper.setFilter('echo.message', function(msg) {
    var date = new Date();
    var year = date.getFullYear() + '-';
    var monthIndex = date.getMonth() + '-';
    var day = date.getDate() + ' ';
    var minute = date.getMinutes();
    var hour = date.getHours() + ':';
    return msg += ' [' + year + monthIndex + day + hour + minute + ']';
});




module.exports = casper;
