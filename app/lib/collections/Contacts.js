contact = "Contacts";  // avoid typos, this string occurs many times.

Contact = new Mongo.Collection(contact);

Meteor.methods({
  /**
   * Invoked by AutoForm to add a new Contact record.
   * @param doc The Contact document.
   */
  addContact: function(doc) {
    check(doc, Contact.simpleSchema());
    Contact.insert(doc);
  },
  /**
   *
   * Invoked by AutoForm to update a Contact record.
   * @param doc The Contact document.
   * @param docID It's ID.
   */
  editContact: function(doc, docID) {
    check(doc, Contact.simpleSchema());
    Contact.update({_id: docID}, doc);
  }
});

// Publish the entire Collection.  Subscription performed in the router.
if (Meteor.isServer) {
  Meteor.publish(contact, function () {
    return Contact.find();
  });
}


/**
 * Create the schema for Contact
 * See: https://github.com/aldeed/meteor-autoform#common-questions
 * See: https://github.com/aldeed/meteor-autoform#affieldinput
 */
Contact.attachSchema(new SimpleSchema({
  first: {
    label: "First",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: contact,
      placeholder: "First Name"
    }
  },
  last: {
    label: "Last",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: contact,
      placeholder: "Last Name"
    }
  },
  address: {
    label: "Address",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: contact,
      placeholder: "Address"
    }
  },
  phone: {
    label: "Phone",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: contact,
      placeholder: "Phone"
    }
  },
  email: {
    label: "Email",
    type: String,
    optional: false,
    max: 20,
    autoform: {
      group: contact,
      placeholder: "Email"
    }
  }
}));
