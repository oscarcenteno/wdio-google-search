const { getText } = require('../wrappers/wdio_wrappers')
const page = require('./results.page')

// Questions: express the intent of a user to retrieve something
// on the application
// so they abstract from the underlying technology
// and service details (ui, api, db)

async function getNumberOfSearchResults () {
  const statsText = await getText(page.resultStats)
  return parseNumberOfResults(statsText)
}

function parseNumberOfResults (statsText) {
  // remove the periods so we can parse the number easily
  const PERIOD = /\./g
  const statsTextNoPeriods = statsText.replace(PERIOD, '')

  // Find number of search results
  const DIGITS = /\d+/g
  const a = DIGITS.exec(statsTextNoPeriods)

  // return a number to ease comparison
  return parseInt(a[0])
}

module.exports = {
  parseNumberOfResults,
  getNumberOfSearchResults
}
