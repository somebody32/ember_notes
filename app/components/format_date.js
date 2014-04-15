export default Em.Component.extend({
  formated_date:function() {
    var date = this.get('date');
    var format = this.get('format');

    return moment(date).format(format);
  }.property('date', 'format')
});
