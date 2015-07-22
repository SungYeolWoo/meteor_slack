/**
 * Created by ProgrammingPearls on 15. 7. 21..
 */
Channels = new Mongo.Collection('channels');

if (Meteor.isServer) {
  Meteor.publish('channels', function () {
    return Channels.find();
  });
}
