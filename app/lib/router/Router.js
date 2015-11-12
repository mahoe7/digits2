/**
 * Configure Iron Router.
 * See: http://iron-meteor.github.io/iron-router/
 */


Router.configure({
  layoutTemplate: 'Layout',
  waitOn: function() { return Meteor.subscribe("Contacts"); },
  loadingTemplate: 'Loading'
});

Router.route('/', {
  name: 'Home'
});

Router.route('/list', {
  name: 'ListStuff'
});

Router.route('/add', {
  name: 'AddStuff'
});


Router.route('/contact/:_id', {
  name: 'EditStuff',
  data: function() { return Contacts.findOne(this.params._id); }
});
