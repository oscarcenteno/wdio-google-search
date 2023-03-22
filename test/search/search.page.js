// Lean page objects contain XPath and CSS Selectors
class SearchPage {
  constructor() {
    this.url = 'https://www.google.es';
    this.cookiesButton = '#L2AGLb';
    this.searchBox = '//input[@name="q"]';
  }
}

module.exports = new SearchPage();
