var Note = DS.Model.extend({
  updated: DS.attr('date', { defaultValue: new Date() }),
  text: DS.attr('string', { defaultValue: "new note" }),

  title: function() {
    return this.get('text').substring(0, 25) + '…';
  }.property('text')
});

Note.reopenClass({
  FIXTURES: [
    {
      id: 1,
      updated: new Date(1352654520000),
      text: 'A template, written in the Handlebars templating language, describes the user interface of your application. Each template is backed by a model, and the template automatically updates itself if the model changes.'
    },
    {
      id: 2,
      updated: new Date(1336039380000),
      text: 'The router translates a URL into a series of nested templates, each backed by a model. As the templates or models being shown to the user change, Ember automatically keeps the URL in the browser\'s address bar up-to-date.'
    },
    {
      id: 3,
      updated: new Date(1357303260000),
      text: 'A component is a custom HTML tag whose behavior you implement using JavaScript and whose appearance you describe using Handlebars templates. They allow you to create reusable controls that can simplify your application\'s templates.'
    }
  ]
});

export default Note;
