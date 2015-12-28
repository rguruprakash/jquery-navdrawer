# jquery-navdrawer
Jquery Navigation-drawer plugin

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
