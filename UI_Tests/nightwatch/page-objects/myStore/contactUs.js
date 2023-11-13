module.exports = {
  url: 'http://automationpractice.multiformis.com/index.php?controller=contact',

  elements: {
    contactUs: {
      selector: '#contact-link > a',
    },
    subjectHeading: {
      selector: '#id_contact',
    },
    emailAddress: {
      selector: '#email',
    },
    orderReference: {
      selector: '#id_order',
    },
    message: {
      selector: '#message',
    },
    sendButton: {
      selector: '#submitMessage',
    },
    AttachFile: {
      selector: '#fileUpload',
    },
    alert: {
      selector: '//*[contains(@class, "alert")]',
      locateStrategy: 'xpath',
    },
  },
};
