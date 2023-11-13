describe('Contact Us Test Cases', function () {
  const contactUs = browser.page.myStore.contactUs();

  before(async () => contactUs.navigate());

  after(async (browser) => browser.quit());

  it('should be able to submit a successful submission', function (browser) {
    contactUs
      .navigate()
      .setValue('@subjectHeading', 'Customer service')
      .setValue('@emailAddress', 'test@test.com')
      .setValue('@orderReference', '123456')
      .setValue('@message', 'This is a test message')
      .click('@sendButton');

    contactUs.expect
      .element('@alert')
      .text.to.contain('Your message has been successfully sent to our team.');
  });
});
