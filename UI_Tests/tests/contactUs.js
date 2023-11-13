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

  it('should cause an error if email is invalid', function (browser) {
    contactUs
      .navigate()
      .setValue('@subjectHeading', 'Customer service')
      .setValue('@emailAddress', 'test')
      .setValue('@orderReference', '123456')
      .setValue('@message', 'This is a test message')
      .click('@sendButton');

    contactUs.expect
      .element('@alert')
      .text.to.contain('Invalid email address.');
  });

  it('should cause an error if message is blank', function (browser) {
    contactUs
      .navigate()
      .setValue('@subjectHeading', 'Webmaster')
      .setValue('@emailAddress', 'test@test.com')
      .setValue('@orderReference', '123456')
      .setValue('@message', '')
      .click('@sendButton');

    contactUs.expect
      .element('@alert')
      .text.to.contain('The message cannot be blank.');
  });

  it('should cause an error if subject heading is not selected', function (browser) {
    contactUs
      .navigate()
      .setValue('@subjectHeading', '-- Choose --')
      .setValue('@emailAddress', 'test@test.com')
      .setValue('@orderReference', '123456')
      .setValue('@message', 'This is a test message')
      .click('@sendButton');

    contactUs.expect
      .element('@alert')
      .text.to.contain('Please select a subject from the list provided.');
  });

  it('should cause an error if order reference is not numeric', function (browser) {
    contactUs
      .navigate()
      .setValue('@subjectHeading', 'Customer service')
      .setValue('@emailAddress', 'test')
      .setValue('@orderReference', 'abc')
      .setValue('@message', 'This is a test message')
      .click('@sendButton');

    contactUs.expect
      .element('@alert')
      .text.to.contain('Invalid order reference.');
  });

  it('should be able to upload a file successfully', function (browser) {
    contactUs
      .navigate()
      .setValue('@subjectHeading', 'Customer service')
      .setValue('@emailAddress', 'test@test.com')
      .setValue('@orderReference', '123456')
      .setValue('@message', 'This is a test message')
      .setValue('@AttachFile', require('path').resolve(__dirname + '/test.txt'))
      .click('@sendButton');

    contactUs.expect
      .element('@alert')
      .text.to.contain('Your message has been successfully sent to our team.');
  });
});
