Template.ListStuff.helpers({

  /**
   * @returns {*} All of the Contacts documents.
   */
  stuffList: function () {
    return Contacts.find();
  }
});