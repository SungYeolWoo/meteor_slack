# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-19 : INPUT INSECURITY

Remove the insecure package
```
meteor remove insecure
```
Allow logged in users to only insert channels and messages.

lib/channels.js:
```javascript
if (Meteor.isServer) {
  Channels.allow({
    insert: function (userId, doc) {
      if (userId) {
        return true;
      }
    }
  });
  
  Meteor.publish('channels', function () {
  ...
```

lib/messages.js:
```javascript
if (Meteor.isServer) {
  Messages.allow({
    insert: function (userId, doc) {
      if (userId && doc._channel) {
        return true;
      }
    }
  });

  Meteor.publish('messages', function (channel) {
  ...
```