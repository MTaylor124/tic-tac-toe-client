'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./scripts/events')

$(() => {
  $('.hidesignout').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('.clicker').on('click', authEvents.sendSelection)
  // $('.clicker').on('click', authEvents.checkforduplicate)
  $('#checkmark').on('click', authEvents.checkCell)
  $('.clicker').on('click', authEvents.sillySystem)
  $('#initiate-game').hide()
  $('#initiate-game').on('click', authEvents.onCreateBoard)
  $('#hideme').hide()
  $('.clicker').on('click', authEvents.onUpdateBoard)
  $('#game-stats').on('click', authEvents.onShowStats)
})
