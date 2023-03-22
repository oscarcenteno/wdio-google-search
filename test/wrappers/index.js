// Actions and Questions interact with web component wrappers
// that abstract from the WebdriverIO framework

class Index {
  constructor() {
    this.WebPage = require('./WebPageWrapper');
    this.TextBox = require('./TextBoxWrapper');
    this.Button = require('./ButtonWrapper');
    this.Text = require('./TextWrapper');
  }
}

module.exports = new Index();
