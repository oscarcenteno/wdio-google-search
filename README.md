# wdio-google-search

![GitHub repo size](https://img.shields.io/github/repo-size/oscarcenteno/wdio-google-search)
![GitHub contributors](https://img.shields.io/github/contributors/oscarcenteno/wdio-google-search)

wdio-google-search is an automation environment example, including TAF layers, using WebdriverIO as web UI test framework and Mocha as test runner

Sample UI test included searchs for "apple" on google.es and checks that the number of results is greater than 100K.

## Design of Test automation Layers

> Layers: Specs -> Actions/Questions -> Web Wrappers -> WDIO -> App

| Layer         | Description     | Sample |
|--------------|-----------|------------|
| Specs | express the business intent of the test and verify with assertions, without any technology dependence or unnecesary details.      | search.spec.js        |
| Actions/Questions  |  express the intent of a user to achieve or retrieve something on the application, so they abstract from the underlying technology and service details (ui, api, db)      | search.actions.js, search.questions.js       |
| Pages  | lean page objects that expose the XPath or CSS locators for web elements      | search.page.js)        |
| Web Wrappers  | abstract from the specifics of the WebdriverIO framework for UI interactions.      | ButtonWrapper.js        |

# Main tools used

- WebdriverIO framework: UI interactions framework
- Mocha: test runner
- Chai: introduced for assertions for Mocha unit tests

# Prerequisites
Before you begin, ensure you have met the following requirements:
<!--- These are just example requirements. Add, duplicate or remove as required --->
* You have installed the latest version of Node, NPM, Git and VSCode (recommended IDE).

# Installation

`npm install`


## Running unit tests

Unit tests are used for verifications that do not involve the User interface of the application, and do not required any app deployment.

Run them on the Terminal with next command:

`npm run test`

## Running end to end tests

End to end tests require the application to be deployed and perform user actions on the Website.

Run them on the Terminal with next command:

`npm run wdio`

## Contact

If you want to contact me you can reach me at <oscar.centeno@outlook.com>.