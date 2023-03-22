const { WebPage, TextBox, Button } = require('../wrappers');
const page = require('./search.page');

// Actions: express the intent of a user to achieve something
// on the application
// so they abstract from the underlying technology
// and service details (ui, api, db)
class SearchActions {
  async navigateToSearchPage() {
    await new WebPage(page.url).browse();
    // accept cookies
    await new Button(page.cookiesButton).click();
  }

  async search(words) {
    await new TextBox(page.searchBox).typeAndSubmit(words);
  }
}

module.exports = new SearchActions();
