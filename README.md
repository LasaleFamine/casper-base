# casper-base | Utils for scraping the web with CasperJs  
[![npm version](https://img.shields.io/npm/v/casper-base.svg)](http://npmjs.org/casper-base)
[![npm downloads](https://img.shields.io/npm/dt/casper-base.svg)](http://npmjs.org/casper-base)
[![Build Status](https://travis-ci.org/LasaleFamine/casper-base.svg?branch=master)](https://travis-ci.org/LasaleFamine/casper-base)  

![CasperJs](http://3.bp.blogspot.com/-LwoTEhFjHAY/VJltD6SOvkI/AAAAAAAAAX4/s3V8RIIwTYw/s1600/Casperjs-logo.PNG "CasperJs")

A personal, simple module of [CasperJs](http://casperjs.org) for scraping the web!  

# IMPORTANT

>**This is a dedicated branch to Raspberry Pi installation compatibility.  
The only difference is that Phantomjs is not inside the dependencies because you [need another version](https://github.com/spfaffly/phantomjs-linux-armv6l) of it and installed globally on your Pi.**

## Explanation  

Turned out that there are some configurations (and some utils) that I always needed (re)writing a scraper in CasperJs.
So I'm trying to wrap every simple and almost full configurable piece of code to start new projects from here and not totally from scratch or with copy-paste.

## Usage   

### Install  

You can simply install via NPM, but the `require` will be a little bigger cause you will run it with *CasperJs* and not with *NodeJs*.

    npm install casper-base

Or clone the repo if you want start from here:  

    git clone https://github.com/LasaleFamine/casper-base.git

Or simply download the main files:
- `/custom-utils (entire folder)`
- `config.json`
- `casper_base.js`

And put them in the **root directory** of your project.

### Configure

Right now you can change directly the `config.json` file of the NPM module to change the configuration of your `casper.create()` method.
You can also clone this repo and change the configurations as you want.

For more information about CasperJs configuration: [Casper Options](http://docs.casperjs.org/en/latest/modules/casper.html#index-1)

``` json
{
  "clientScripts":  [],
  "pageSettings": {
      "loadImages":  false,
      "loadPlugins": false
  },
  "logLevel": "warning",
  "verbose": true
}
```


### Import

Simply `require` for your casper instance the `casper_base` module.

If was installed via NPM:

``` js
  var casper = require('./node_modules/casper-base/casper_base')
```

Or if the file is in your root directory:

``` js
  var casper = require('./casper_base')
```
**Don't forget to leave the `custom-utils` folder within the main `casper_base` with the current hierachy.**

### Start scraping!  

First install `casperjs` and `phantomjs` if you did't yet:

    npm install --save casperjs phantomjs

Write your first scrapy!

``` js

var casper = require('./casper_base')

// Simulate error 404
casper.start('http://google.com/sad')
casper.run()

```


### Fork it  

Forks are always appreciate! :airplane:
