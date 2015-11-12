/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Contact"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/list', {
  name: 'ListContact'
});

Router.route('/add', {
  name: 'AddContact'
});


Router.route('/contacts/:_id', {
  name: 'EditContact',
  data: function() { return Contact.findOne(this.params._id); }
});
