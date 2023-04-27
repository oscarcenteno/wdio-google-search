const { $, browser } = require('@wdio/globals')

async function browse (url) {
  await browser.url(url)
}

async function click (locator) {
  const button = await $(locator)
  await button.click()
}

async function type (locator, text) {
  const textbox = await $(locator)
  await textbox.waitForClickable({ timeout: 3000 })
  await textbox.click()
  await textbox.setValue(text)
}

async function clickAndType (locator, text) {
  await type(locator, text)
}

async function typeThenPressEnter (locator, text) {
  await type(locator, text)

  // press ENTER to search as a user usually does
  const ENTER = '\uE007'
  await browser.keys(ENTER)
}

function doubleClick (locator) {
}

function check (locator) {
}

function uncheck (locator) {
}

function select (locator, value) {
}

function mouseover (locator) {
}

function getEnvironmentVariable (name) {
}

async function getText (locator) {
  const textElement = await $(locator)
  return await textElement.getText()
}

async function getValue (locator) {
  const textBox = await $(locator)
  return await textBox.getValue()
}

module.exports = {
  browse,
  click,
  type,
  clickAndType,
  typeThenPressEnter,
  doubleClick,
  check,
  uncheck,
  select,
  mouseover,
  getEnvironmentVariable,
  getText,
  getValue
}
