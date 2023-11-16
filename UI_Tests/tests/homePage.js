describe('Home Page Search', function () {
  const homePage = browser.page.myStore.homePage();

  before(async () => homePage.navigate());

  after(async (browser) => browser.quit());

  it('should search for dress successfully', function (browser) {
    homePage.setValue('@searchBar', 'dress');
    homePage.submit();

    const resultsPage = browser.page.myStore.searchResults();

    resultsPage.verify.textContains('@searchLabel', 'DRESS');
  });

  it('should contain dress in all search items results', function (browser) {
    let searchItem = 'dress';
    homePage.setValue('@searchBar', searchItem);
    homePage.submit();

    const resultsPage = browser.page.myStore.searchResults();

    resultsPage.listContainsText(searchItem);
  });
});
