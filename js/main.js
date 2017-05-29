// variable
/* global $ */

let isHex = false

// get the current in current time zone
function getCurrentTime (input) {
  let time = new Date()
  let localTime = time.toLocaleTimeString()
  let hexHour = addZeroToBeggining(time.getHours().toString(16))
  let hexMin = addZeroToBeggining(time.getMinutes().toString(16))
  let hexSec = addZeroToBeggining(time.getSeconds().toString(16))
  let hexTime = '#' + hexHour + ':' + hexMin + ':' + hexSec
  let hexColor = '#' + hexHour + hexMin + hexSec
  if (input === 'time' && isHex === false) {
    return localTime
  } else if (input === 'hexTime' && isHex === true) {
    return hexTime
  } else if (input === 'hexColor') {
    return hexColor
  }
}

function setNormalTime () {
  $('#time').html(getCurrentTime('time'))
}

function setHexTime () {
  $('#time').html(getCurrentTime('hexTime'))
}

function changeHexBackgound () {
  $('body').css('background-color', getCurrentTime('hexColor'))
}
changeHexBackgound()

function mouseEnterTime () {
  isHex = true
  setHexTime()
}

function mouseLeaveTime () {
  isHex = false
  setNormalTime()
}
mouseLeaveTime()

function addZeroToBeggining (input) {
  if (input.length === 1) {
    return '0' + input
  } else {
    return input
  }
}

function tickTock () {
  let changeHexColor = setInterval(changeHexBackgound, ONE_SECOND)
  let changeTime = setInterval(setNormalTime, ONE_SECOND)
  let changeHexTime = setInterval(setHexTime, 1000)
  $('.bar').css('width', fillBar)
}

let ONE_SECOND = 1 * 1000
window.setInterval(tickTock, ONE_SECOND)

function fillBar () {
  let percent = new Date().getSeconds()
  let percentBar = ((percent * 100) / 60) + '%'
  return percentBar
}

$('#time').on('mouseenter', mouseEnterTime)
$('#time').on('mouseleave', mouseLeaveTime)
