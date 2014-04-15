export default Ember.ArrayController.extend({
  sortProperties:["updated"],
  sortAscending: false,

  filter: null,

  filteredNotes: function(){
    var self = this;
    return this.get('arrangedContent').filter(function(note) {
      var text = note.get('text') || '';
      var filter = self.get('filter') || '';
      return text.toLowerCase().indexOf(filter.toLowerCase()) != -1
    })
  }.property('filter', 'model.@each.text')
})
