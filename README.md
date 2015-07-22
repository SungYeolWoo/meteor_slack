# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-7 : ADDING MESSAGES


Create a 'messages' Mongo collection (lib/messages.js):
```javascript
Messages = new Mongo.Collection('messages');
```
Add a form with a single line textarea for new messages (client/views/channel/channel.html):
```html
  ...
  </ul>
  <form>
    <textarea cols="100" rows="1"></textarea>
  </form>
  {{>home}}
</template>
```

Create an event handler that insert a message on enter(but not when shift is pressed).
And make sure the message has a reference to the current channel too (client/views/channel/channel.js):
```javascript
Template.channel.events({
  'keyup textarea': function (event, instance) {
    if (event.keyCode == 13 && !event.shift) { // Check if enter was pressed (but without shift).
      var _id = Router.current().params._id;
      var value = instance.find('textarea').value;
      instance.find('textarea').value = ''; // Clear the textarea
      Messages.insert({_channel:_id, message: value});
    }
  }
});
```

