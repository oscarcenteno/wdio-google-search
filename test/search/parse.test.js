const searchQuestions = require('./search.questions');
var { expect } = require('chai');

describe('Google results page parse', () => {
  it('Parser for the number of search results', () => {
    const statsText =
      'Aproximadamente 7.680.000.000 resultados (0,47 segundos) ';
    const number = searchQuestions.parseNumberOfResults(statsText);

    expect(number).to.equal(7680000000);
  });
});
