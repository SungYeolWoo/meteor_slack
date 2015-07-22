/**
 * Created by ProgrammingPearls on 15. 7. 22..
 */

Messages = new Mongo.Collection('messages');

if (Meteor.isServer) {
  Messages.allow({
    insert: function (userId, doc) {
      if (userId && doc._channel) {
        return true;
      }
    }
  });

  Meteor.publish('messages', function (channel) {
    return Messages.find({_channel: channel});
  });
}