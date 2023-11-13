resultsCommands = {
  listContainsText: function (text) {
    this.api.elements(
      'css selector',
      '#product_list > li > div > div.right-block > h5 > a',
      (result) => {
        const elements = result.value;
        elements.forEach((element) => {
          this.api.elementIdText(Object.values(element)[0], (res) => {
            // Verify if the item contains the text
            this.assert.ok(
              res.value.toLowerCase().includes(text.toLowerCase()),
              `Found ${res.value} when expecting ${text} to be in the results`
            );
          });
        });
      }
    );
    return this;
  },
};

module.exports = {
  elements: {
    results: { selector: '#center_column' },
    searchLabel: {
      selector: '//div[@id="center_column"]/h1/span[1]',
      locateStrategy: 'xpath',
    },
    list: {
      selector: '#product_list',
    },
  },
  commands: [resultsCommands],
};
