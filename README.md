# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-14 : PUBLISH MESSAGES

Create a publication for 'messages' for a channel (lib/messages.js):
```javascript
if (Meteor.isServer) {
  Meteor.publish('messages', function (channel) {
    return Messages.find({_channel: channel});
  });
}
```