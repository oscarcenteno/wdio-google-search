const { browser } = require('@wdio/globals');

class WebPageWrapper {
  constructor(url) {
    this.url = url;
  }

  async browse() {
    await browser.url(this.url);
  }
}

module.exports = WebPageWrapper;
