const { $ } = require('@wdio/globals');

class TextWrapper {
  constructor(locator) {
    this.locator = locator;
  }

  async getText() {
    const resultStats = await $(this.locator);
    return await resultStats.getText();
  }
}

module.exports = TextWrapper;
