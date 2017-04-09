// variable
/* global $ */

// get the current in current time zone
function clock (input) {
  var time = new Date()
  var localTime = time.toLocaleTimeString()
  var hexHour = addZeroToBeggining(time.getHours().toString(16))
  var hexMin = addZeroToBeggining(time.getMinutes().toString(16))
  var hexSec = addZeroToBeggining(time.getSeconds().toString(16))
  var hexTime = '#' + hexHour + ':' + hexMin + ':' + hexSec
  var hexColor = '#' + hexHour + hexMin + hexSec
  if (input === 'time') {
    return localTime
  } else if (input === 'hexTime') {
    return hexTime
  } else if (input === 'hexColor') {
    return hexColor
  }
}
function showTime () {
  $('#time').html(clock('time'))
}
showTime()
function showHexTime () {
  $('#time').html(clock('hexTime'))
}

function changeHexBackgound () {
  $('body').css('background-color', clock('hexColor'))
  var changeHexColor = setInterval(changeHexBackgound, 1000)
}
changeHexBackgound()

console.log(clock('hexColor'))

function hexOnHover () {
  clearInterval(changeTime)
  showHexTime()
}

function timeOffHover () {
  clearInterval(changeHexTime)
  changeTime = setInterval(showTime, 1000)
  showTime()
}

function addZeroToBeggining (input) {
  if (input.length === 1) {
    return '0' + input
  } else {
    return input
  }
}

$('#time').hover(hexOnHover, timeOffHover)

// interval variables
var changeTime = setInterval(showTime, 1000)
var changeHexTime = setInterval(showHexTime, 1000)
console.log(changeTime)
