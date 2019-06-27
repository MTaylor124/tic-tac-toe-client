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

let whosMove = 1

const sendSelection = event => {
  const mytext = $(event.target).text()
  if (whosMove === 1 && mytext !== 'O') {
    $(event.target).text('X')
    $(event.target).css('font-size', '110px')
    $(event.target).css('text-align', 'center')
    whosMove = whosMove - 1
  } else if (whosMove === 0 && mytext !== 'X') {
    $(event.target).text('O')
    $(event.target).css('font-size', '110px')
    $(event.target).css('text-align', 'center')
    whosMove = whosMove + 1
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  sendSelection
}
