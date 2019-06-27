'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onSignUp = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}


const onSignIn = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

let whosMove = 0
const movesLeft = []

const sendSelection = event => {

  if (whosMove === 0)

  {
    $(event.target).text('O')
    $(event.target).css('font-size', '110px')
    $(event.target).css('text-align', 'center')
    const pick = []
    pick.indexOf($(event.target))
    movesLeft.push(pick)
    console.log(movesLeft)
    whosMove = whosMove + 1
  } else {
    $(event.target).text('X')
    $(event.target).css('font-size', '110px')
    $(event.target).css('text-align', 'center')
    whosMove = whosMove - 1
    const pick = []
    pick.indexOf($(event.target))
    movesLeft.push(pick)
    console.log(movesLeft)
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  sendSelection
}
