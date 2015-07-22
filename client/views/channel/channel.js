/** Created by ProgrammingPearls on 15. 7. 22.. ...*/

Template.channel.onCreated(function () {
  var instance = this;
  // Listen for changes to reactive variables (such as Router.current())
  instance.autorun(function () {
    var channel = Router.current().params._id;
    instance.subscribe('messages', channel);
  });
});

Template.channel.helpers({
  messages: function () {
    var _id = Router.current().params._id;
    return Messages.find({_channel: _id});
  },
  channel: function () {
    var _id = Router.current().params._id;
    return Channels.findOne({_id: _id});
  },
  user: function () {
    return Meteor.users.findOne({_id: this._userId});
  },
  time: function () {
    return (this.timestamp ? moment(this.timestamp).format('H:mm A') : false);
  },
  date: function () {
    var dateNow = moment(this.timestamp).calendar();
    var instance = Template.instance();

    if (!instance.date || instance.date != dateNow) {
      return instance.date = dateNow;
    }
  }
});

// We've moved the message form into a new template
// (messageForm), now we need to move the event map.
Template.channel.events({
  'keyup textarea': function (event, instance) {
    if (event.keyCode == 13 && !event.shift) { // Check if enter was pressed (but without shift).
      var _id = Router.current().params._id;
      var value = instance.find('textarea').value;
      // Markdown requires double spaces at the end of the line to force line-breaks.
      value = value.replace("\n", "  \n");
      instance.find('textarea').value = ''; // Clear the textarea
      Messages.insert({
        _channel:_id,
        message: value,
        _userId: Meteor.userId(),  // Add userId to each message
        timestamp: new Date() // Add a timestamp to each message
      });
    }
  }
});