const { $ } = require('@wdio/globals');

class ButtonWrapper {
  constructor(locator) {
    this.locator = locator;
  }

  async click() {
    const button = await $(this.locator);

    await button.click();
  }
}

module.exports = ButtonWrapper;
