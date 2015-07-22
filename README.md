# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-13 : PUBLISH CHANNELS


Remove autopublish (we don't want to publish everything always):
```
meteor remove autopublish
```

Create a publication for 'channels' and publish all channels (lib/channels.js):
```javascript
Channels = new Mongo.Collection('channels');

if (Meteor.isServer) {
  Meteor.publish('channels', function () {
    return Channels.find();
  });
}

```