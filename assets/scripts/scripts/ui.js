'use strict'
const store = require('./../store')

const signUpSuccess = () => {
  $('form').trigger('reset')
  $('#check-sign-up').text('successfully signed up')
  setTimeout(function () {
    $('#check-sign-up').text('')
  }, 2000)
}
const signUpFailure = () => {
  $('form').trigger('reset')
  $('#check-sign-up').text('sign up failed')
  setTimeout(function () {
    $('#check-sign-up').text('')
  }, 2000)
}

const signInSuccess = (data) => {
  $('form').trigger('reset')
  $('#check-sign-in').text('signed in')
  setTimeout(function () {
    $('#check-sign-in').text('')
  }, 2000)
  $('.hidesignout').show()
  $('.hidesignin').hide()
  store.user = data.user
  $('#initiate-game').show()
}
const signInFailure = () => {
  $('form').trigger('reset')
  $('#check-sign-in').text('sign in failed')
  setTimeout(function () {
    $('#check-sign-in').text('')
  }, 2000)
}

const changePasswordSuccess = () => {
  $('form').trigger('reset')
  $('#check-change-password').text('password changed')
  setTimeout(function () {
    $('#check-change-password').text('')
  }, 2000)
}
const changePasswordFailure = () => {
  $('form').trigger('reset')
  $('#check-change-password').text('password change failed')
  setTimeout(function () {
    $('#check-change-password').text('')
  }, 2000)
}

const signOutSuccess = () => {
  $('form').trigger('reset')
  $('#check-sign-out').text('signed out')
  setTimeout(function () {
    $('#check-sign-out').text('')
  }, 2000)
  $('#initiate-game').hide()
  $('.hidesignout').hide()
  $('.hidesignin').show()
}

const signOutFailure = () => {
  $('form').trigger('reset')
  $('#check-sign-out').text('failed to sign out')
  setTimeout(function () {
    $('#check-sign-out').text('')
  }, 2000)
}

const newGameSuccess = (response) => {
  store.game = response.game
  $('#made-game').text('new game made')
  setTimeout(function () {
    $('#made-game').text('')
  }, 3000)
  $('#hideme').show()
}
const newGameFailure = () => {
  $('#made-game').text('sign in first')
  setTimeout(function () {
    $('#made-game').text('')
  }, 5000)
}

const showgamestats = (games) => {
  const gamesplayed = games.games.filter(game => game.over === true)
  let totalgamesplayed = 0
  for (let i = 0; i < gamesplayed.length; i++) {
    totalgamesplayed = totalgamesplayed + 1
  }
  $('#userstats').text(`total games played by user: ${totalgamesplayed}`)
}

module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccess,
  newGameFailure,
  showgamestats
}
