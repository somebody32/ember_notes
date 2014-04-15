var Router = Ember.Router.extend({
  rootURL: ENV.rootURL,
  location: 'hash'
});

Router.map(function() {
  this.resource('notes', function() {
    this.route('note', { path: ':note_id' });
  });
});

export default Router;
