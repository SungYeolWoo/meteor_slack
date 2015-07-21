/**
 * Created by ProgrammingPearls on 15. 7. 22..
 */
Template.channel.helpers({
  channel : function () {
    var _id = Router.current().params._id;
    return Channels.findOne({_id: _id});
  }
});

Template.channel.events({
  'keyup textarea': function (event, instance) {
    if (event.keyCode == 13 && !event.shift) { // Check if enter was pressed (but without shift).
      var _id = Router.current().params._id;
      var value = instance.find('textarea').value;
      instance.find('textarea').value = ''; // Clear the textarea
      Messages.insert({_channel:_id, message: value});
    }
  }
});