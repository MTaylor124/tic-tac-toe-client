'use strict'

const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

const gameIsOver = () => {
  store.game.over = true
}

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

let numberOfPlays = 0


let whosMove = 'x'
let xScore = 0
let oScore = 0

let gameOver = false

const gameovernotification = () => {
  $('#already-selected').show()
  $('#already-selected').css('text-align', 'center')
  $('#already-selected').css('font-size', '35px')
  $('#already-selected').text('game is over, start new game to play')
  setTimeout(function () {
    $('#already-selected').text('')
  }, 5000)
}

const checkgame = () => {
  if (numberOfPlays < 9) {
    numberOfPlays = numberOfPlays + 1
  } else if (numberOfPlays > 8) {
    gameovernotification()
  }
}

const sendSelection = event => {
  if (gameOver === true) {
    gameovernotification()
  } else if (whosMove === 'x' && $(event.target).text() === '') {
    $(event.target).text('x')
    $(event.target).css('font-size', '80px')
    $(event.target).css('text-align', 'center')
    checkgame()
    whosMove = 'o'
  } else if (whosMove === 'o' && $(event.target).text() === '') {
    $(event.target).text('o')
    $(event.target).css('font-size', '80px')
    $(event.target).css('text-align', 'center')
    checkgame()
    whosMove = 'x'
  } else if ($(event.target).text() !== '') {
    $('#already-selected').css('text-align', 'center')
    $('#already-selected').css('font-size', '35px')
    $('#already-selected').show()
    $('#already-selected').text('spot already chosen')
    setTimeout(function () {
      $('#already-selected').text('')
    }, 2000)
  }
}

const onShowStats = event => {
  event.preventDefault()
  api.showstats()
    .then(ui.showgamestats)
    .catch()
}

let gbstatus = ['', '', '', '', '', '', '', '', '']

const cleargameboard = () => {
  $('.clicker').text('')
  gbstatus = ['', '', '', '', '', '', '', '', '']
  numberOfPlays = 0
  $('#updates').text('')
}

const onSignOut = event => {
  event.preventDefault()
  $('#updates').text('')
  $('#scoreofO').text('0')
  $('#scoreofX').text('0')
  xScore = 0
  oScore = 0
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
  cleargameboard()
  $('#hideme').hide()
  xScore = xScore * 0
  oScore = oScore * 0
  $('.oside').css('background', 'white')
  $('.xside').css('background', 'white')
}

const addScore = () => {
  if ($(event.target).text() === 'x') {
    xScore = xScore + 1
    $('#scoreofX').text(xScore)
  } else if ($(event.target).text() === 'o') {
    oScore = oScore + 1
    $('#scoreofO').text(oScore)
  } whosMove = 'x'
  if (oScore < xScore) {
    $('.xside').css('background', 'yellow')
    $('.xside').css('padding', '14px')
    $('.xside').css('border-radius', '50%')
  } else if (oScore > xScore) {
    $('.oside').css('background', 'yellow')
    $('.oside').css('padding', '14px')
    $('.oside').css('border-radius', '50%')
  } else {
    $('.oside').css('background', 'white')
    $('.xside').css('background', 'white')
  }
}

const checkingstats = () => {
  addScore()
  gameOver = true
  gameIsOver()
}

const checkForWin = () => {
  if (gameOver === false) {
    if (gbstatus[0] !== '' && gbstatus[1] !== '' && gbstatus[2] !== '' && gbstatus[0] === gbstatus[1] && gbstatus[1] === gbstatus[2]) {
      $('#updates').text(($(event.target).text() + ' wins'))
      checkingstats()
    } else if (gbstatus[2] !== '' && gbstatus[4] !== '' && gbstatus[6] !== '' && gbstatus[2] === gbstatus[4] && gbstatus[4] === gbstatus[6]) {
      $('#updates').text(($(event.target).text() + ' wins'))
      checkingstats()
    } else if (gbstatus[3] !== '' && gbstatus[4] !== '' && gbstatus[5] !== '' && gbstatus[3] === gbstatus[4] && gbstatus[4] === gbstatus[5]) {
      $('#updates').text(($(event.target).text() + ' wins'))
      checkingstats()
    } else if (gbstatus[6] !== '' && gbstatus[7] !== '' && gbstatus[8] !== '' && gbstatus[6] === gbstatus[7] && gbstatus[7] === gbstatus[8]) {
      $('#updates').text(($(event.target).text() + ' wins'))
      checkingstats()
    } else if (gbstatus[0] !== '' && gbstatus[3] !== '' && gbstatus[6] !== '' && gbstatus[0] === gbstatus[3] && gbstatus[3] === gbstatus[6]) {
      $('#updates').text(($(event.target).text() + ' wins'))
      checkingstats()
    } else if (gbstatus[1] !== '' && gbstatus[4] !== '' && gbstatus[7] !== '' && gbstatus[1] === gbstatus[4] && gbstatus[4] === gbstatus[7]) {
      $('#updates').text(($(event.target).text() + ' wins'))
      checkingstats()
    } else if (gbstatus[2] !== '' && gbstatus[5] !== '' && gbstatus[8] !== '' && gbstatus[2] === gbstatus[5] && gbstatus[5] === gbstatus[8]) {
      $('#updates').text(($(event.target).text() + ' wins'))
      checkingstats()
    } else if (gbstatus[0] !== '' && gbstatus[4] !== '' && gbstatus[8] !== '' && gbstatus[0] === gbstatus[4] && gbstatus[4] === gbstatus[8]) {
      $('#updates').text(($(event.target).text() + ' wins'))
      checkingstats()
    } else if (numberOfPlays > 8) {
      $('#updates').text('game is a tie')
      gameOver = true
      gameIsOver()
      whosMove = 'x'
    }
  }
}
const sillySystem = event => {
  const testid = event.target.id
  if (testid === '0') {
    gbstatus[0] = $(event.target).text()
  } else if (testid === '1') {
    gbstatus[1] = $(event.target).text()
  } else if (testid === '2') {
    gbstatus[2] = $(event.target).text()
  } else if (testid === '3') {
    gbstatus[3] = $(event.target).text()
  } else if (testid === '4') {
    gbstatus[4] = $(event.target).text()
  } else if (testid === '5') {
    gbstatus[5] = $(event.target).text()
  } else if (testid === '6') {
    gbstatus[6] = $(event.target).text()
  } else if (testid === '7') {
    gbstatus[7] = $(event.target).text()
  } else if (testid === '8') {
    gbstatus[8] = $(event.target).text()
  }
  checkForWin()
}

const onCreateBoard = event => {
  event.preventDefault()
  api.createBoard()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
  cleargameboard()
  whosMove = 'x'
  gameOver = false
}

const onUpdateBoard = event => {
  event.preventDefault()
  // const boardnow = gbstatus
  const index = event.target.id
  const value = $(event.target).text()
  api.updateBoard(index, value)
    .then()
    .catch()
}

const onShowGameBoard = event => {
  event.preventDefault()
  api.showGameBoard()
    .then()
    .catch()
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  sendSelection,
  onCreateBoard,
  sillySystem,
  onShowGameBoard,
  onUpdateBoard,
  onShowStats
}
