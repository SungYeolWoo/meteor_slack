# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-16 : SUBSCRIBE TO CHANNELS

Create a subscription to the 'channels' publication in the home template (client/views/home/home.js):
```javascript
Template.home.onCreated(function () {
  this.subscribe('channels');
});