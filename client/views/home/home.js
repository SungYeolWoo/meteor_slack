/**
 * Created by ProgrammingPearls on 15. 7. 21..
 */
Template.home.helpers({
  channels: function () {
    return Channels.find();
  }
});

Template.home.events({
  'submit form' : function(event, instance) {
    event.preventDefault();
    var name = instance.find('input').value;
    instance.find('input').value = '';

    Channels.insert({name: name});
  }
});