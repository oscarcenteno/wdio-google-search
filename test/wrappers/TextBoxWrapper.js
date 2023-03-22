const { $, browser } = require('@wdio/globals');

class TextBoxWrapper {
  constructor(locator) {
    this.locator = locator;
  }

  async typeAndSubmit(text) {
    await this.type(text);

    // press ENTER to search as a user usually does
    const ENTER = '\uE007';
    browser.keys(ENTER);
  }

  async type(text) {
    const searchBox = await $(this.locator);
    await searchBox.waitForClickable({
      timeout: 3000,
    });
    await searchBox.click();
    await searchBox.setValue(text);
  }

  async getValue() {
    const textBox = await $(this.locator);
    return await textBox.getValue();
  }
}

module.exports = TextBoxWrapper;
