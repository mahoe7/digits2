Template.ListContact.helpers({

  /**
   * @returns {*} All of the Contact documents.
   */
  contactList: function () {
    return Contact.find();
  }
});