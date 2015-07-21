# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-4 : Adding Channels

Create a 'channels' Mongo collection: 
```javascript
Channels = new Mongo.Collection('channels');
```

Add a form to input new channels to home 
```html
<template name="home">
  <form>
    <label for="name">Channel name:</label>
    <input type="text" id="name"/>
    <button type="submit">Add</button>
  </form>
  <ul>
    ...
  </ul>
</template>
```

Create an event handler that insert a channel
```javascript
Template.home.events({
  'submit form' : function(event, instance) {
    event.preventDefault();
    var name = instance.find('input').value;
    instance.find('input').value = '';
    
    Channels.insert({name: name});
  }
});
```