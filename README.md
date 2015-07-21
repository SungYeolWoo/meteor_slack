# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-6 : SHOWING CHANNELS

Add a helper to show (find) all channels in home (client/views/home/home.js): 
```javascript
  Template.home.helpers({
    channels: function () {
      return Channels.find();
    }
  });
  
  Template.home.events({
  ...
```

Show the channel name in the channel (../channel/channel.js, ../channel/channel.html):  
```javascript
Template.channel.helpers({
  channel : function () {
    var _id = Router.current().params._id;
    return Channels.findOne({_id: _id});
  }
});
```

```html
<template name="channel">
  <h1>{{channel.name}}</h1>
  <ul>
  ...
</template>
```