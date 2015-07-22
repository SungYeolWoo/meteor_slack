# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-18 : SHOW USERNAMES

Subscribe to messages for a channel in the channel template (client/views/channel/channel.js):
```javascript
Template.channel.onCreated(function () {
  var instance = this;
  // Listen for changes to reactive variables (such as Router.current())
  instance.autorun(function () {
    var channel = Router.current().params._id;
    instance.subscribe('messages', channel);
  });
});

Template.channel.helpers({
```