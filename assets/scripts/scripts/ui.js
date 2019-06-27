'use strict'
const store = require('./../store')

// const disappear = (thing) => {
//   setTimeout(function () {
//     (thing).txt('this is a test')
//   }, 5000)
// }

// setTimeout(function () {
//   $('check-status').text('this is a test')
// }, 5000)


const signUpSuccess = () => {
  $('form').trigger('reset')
  $('#check-sign-up').text('successfully signed up')
  setTimeout(function () {
    $('#check-sign-up').hide()
  }, 2000)
}
const signUpFailure = () => {
  $('form').trigger('reset')
  $('#check-sign-up').text('sign up failed')
  setTimeout(function () {
    $('#check-sign-up').hide()
  }, 2000)
}

const signInSuccess = (data) => {
  $('form').trigger('reset')
  $('#check-sign-in').text('signed in')
  setTimeout(function () {
    $('#check-sign-in').hide()
  }, 2000)
  store.user = data.user
}
const signInFailure = () => {
  $('form').trigger('reset')
  $('#check-sign-in').text('sign in failed')
  setTimeout(function () {
    $('#check-sign-in').hide()
  }, 2000)
}

const changePasswordSuccess = () => {
  $('form').trigger('reset')
  $('#check-change-password').text('password successfully changed')
  setTimeout(function () {
    $('#check-change-password').hide()
  }, 2000)
}
const changePasswordFailure = () => {
  $('form').trigger('reset')
  $('#check-change-password').text('password change failed')
  setTimeout(function () {
    $('#check-change-password').hide()
  }, 2000)
}

const signOutSuccess = () => {
  $('form').trigger('reset')
  $('#check-sign-out').text('successfully signed out')
  setTimeout(function () {
    $('#check-sign-out').hide()
  }, 2000)
}
const signOutFailure = () => {

}
module.exports = {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
