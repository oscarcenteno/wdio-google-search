const { browse, click, type } = require('../wrappers/wdio_wrappers')
const page = require('./search.page')

// Actions: express the intent of a user to achieve something
// on the application
// so they abstract from the underlying technology
// and service details (ui, api, db)

async function navigateToSearchPage () {
  await browse(page.url)
  // accept cookies
  await click(page.cookiesButton)
}

async function search (words) {
  await type(page.searchBox, words)
  console.log(1)
  await click(page.searchButton)
  console.log(2)
}
module.exports = {
  navigateToSearchPage,
  search
}
