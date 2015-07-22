# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-10 : WHO TYPED WHAT


Add a reference to the user on a message:
```javascript
  ...
  instance.find('textarea').value = ''; // Clear the textarea
    Messages.insert({
      _channel:_id,
      message: value,
      _userId: Meteor.userId()  // Add userId to each message
    });
  }
  ...
```

Create a helper and show the username (just show the email for now)

client/views/channel/channel.js:
```javascript
  ...
    return Channels.findOne({_id: _id});
  },
  user: function () {
    return Meteor.users.findOne({_id: this._userId});
  }
});
```

../channel/channel.html:
```html
    ...
    <li>
      <div>{{user.emails.[0].address}}</div>
      {{#markdown}}{{message}}{{/markdown}}
    </li>
    {{/each}}
    ...
```