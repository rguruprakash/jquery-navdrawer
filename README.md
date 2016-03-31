# jquery-navdrawer
Jquery Navigation-drawer plugin

[![Build Status](https://travis-ci.org/rguruprakash/jquery-navdrawer.svg?branch=master)](https://travis-ci.org/rguruprakash/jquery-navdrawer)

Demo - http://codepen.io/guruprakash/pen/rxMKbW

## Plugin files
- navdrawer.js - https://github.com/rguruprakash/jquery-navdrawer/blob/master/app/scripts/navdrawer.js
- navdrawer.css - https://github.com/rguruprakash/jquery-navdrawer/blob/master/app/styles/navdrawer.css

## Usage
Initilize the navigation drawer 
```js
$("#mynavdrawer").navdrawer(options)
```

## Options
| Name | type | default | description |
|------|------|---------|-------------|
|backdrop|boolean|true| Includes a backdrop element when navigation drawer is open|

##Methods
*.navdrawer('show')* - Manually opens the navigation drawer
```js
$("#mynavdrawer").navdrawer('show')
```
*.navdrawer('hide')* - Manually closes the navigation drawer
```js
$("#mynavdrawer").navdrawer('hide')
```
*.navdrawer('toggle')* - Manually toggle the navigation drawer status(open/close)
```js
$("#mynavdrawer").navdrawer('toggle')
```
