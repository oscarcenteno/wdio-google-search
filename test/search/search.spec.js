const actions = require('./search.actions')
const questions = require('./search.questions')
const { expect } = require('@wdio/globals')

describe('Google.es page', () => {
  it('Search for "Apple" should return more than 100K results', async () => {
    // Given the searcher was able to navigate to the search page
    await actions.navigateToSearchPage()

    // When he attempts a search for "apple"
    await actions.search('apple')

    // Then more than "100 000" results should be found
    const number = await questions.getNumberOfSearchResults()
    expect(number).toBeGreaterThan(100000)
  })
})
