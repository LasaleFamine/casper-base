/**
 * ======= casper.log HELPERS ======
 */
var log = {
  logError: function(msg) {
    casper.log(msg, 'error');
  },
  logInfo: function(msg) {
    casper.log(msg, 'info');
  },
  logWarn: function(msg) {
    casper.log(msg, 'warning');
  },
  logDebug: function(msg) {
    casper.log(msg, 'debug');
  },


  /**
   * ======= casper.echo HELPERS ======
   */

   echoError: function(msg) {
     casper.echo(msg, 'ERROR');
   },
   echoInfo: function(msg) {
     casper.echo(msg, 'INFO');
   },
   echoWarn: function(msg) {
     casper.echo(msg, 'WARNING');
   },
   echoComment: function(msg) {
     casper.echo(msg, 'COMMENT');
   },
   echoTrace: function(msg) {
     casper.echo(msg, 'TRACE');
   }
};

/**
 * ======= httpStatusHandlers ======
 */
 var statusHandlers = {
   notFound: function(self, resource) {
     log.logWarn(resource.status + ' @ ' + resource.url);
   },
   badRequest: function(self, resource) {
     log.logError(resource.status + ' @ ' + resource.url);
   }
 };


exports.log = log;
exports.statusHandlers = statusHandlers;
