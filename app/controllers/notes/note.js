export default Ember.ObjectController.extend({
  actions: {
    addNote: function(){
      var note = this.get('store').createRecord('note');
      this.transitionToRoute('notes.note', note);
    },
    removeNote: function(){
      this.transitionToRoute('notes');
      this.get('model').deleteRecord();
    }
  }
});
