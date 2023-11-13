const searchCommands = {
  submit() {
    this.waitForElementVisible('@searchSubmitButton', 1000).click(
      '@searchSubmitButton'
    );

    this.pause(1000);

    return this;
  },
};

module.exports = {
  url: 'http://automationpractice.multiformis.com/index.php',

  elements: {
    searchBar: {
      selector: '#search_query_top',
    },
    searchSubmitButton: {
      selector: '//button[@name="submit_search"]',
      locateStrategy: 'xpath',
    },
  },

  commands: [searchCommands],
};
