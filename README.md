# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-8 : SHOWING MESSAGES


Add a helper that finds messages for the current channel (client/views/channel/channel.js):
```javascript
Template.channel.helpers({
  messages: function () {
    var _id = Router.current().params._id;
    return Messages.find({_channel: _id});
  },
  channel : function () {
  ...
```

Let's add **markdown** to enable rendering of newlines and paragraphs (more) in messages :
```
meteor add markdown
```

../channel/channel.html:
 
```html
<template name="channel">
  <h1>{{channel.name}}</h1>
  <ul>
    {{#each messages}}
    <li>
      {{#markdown}}{{message}}{{/markdown}}
    </li>
  ...
```

../channel/channel.js:

```javascript
      ...
      var value = instance.find('textarea').value;
      // Markdown requires double spaces at the end of the line to force line-breaks.
      value = value.replace("\n", "  \n");
      instance.find('textarea').value = ''; // Clear the textarea
      Messages.insert({_channel:_id, message: value});
    }
  }
});
```

