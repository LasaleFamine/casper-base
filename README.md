# casper-base | Utils for scraping the web with CasperJs  
![CasperJs](http://3.bp.blogspot.com/-LwoTEhFjHAY/VJltD6SOvkI/AAAAAAAAAX4/s3V8RIIwTYw/s1600/Casperjs-logo.PNG "CasperJs")

A personal, simple module of [CasperJs](http://casperjs.org) for scraping the web!  

## Explanation  

Turned out that there are some configurations (and some utils) that I always needed (re)writing a scraper in CasperJs.
So I'm trying to wrap every simple and almost full configurable piece of code to start new projects from here and not totally from scratch or with copy-paste.  

## Usage   

### Install  

Clone the repo if you want start from here:  

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

Simply `require` for your casper instance the `casper_base` module:  

``` js
  var casper = require('casper_base')
```

### Fork it  

Forks are always appreciate! :airplane:
