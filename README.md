# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-11 : ADDING TIME


Add a timestamp to each message (client/views/channel/channel.js):
```javascript
        ...
        Messages.insert({
          _channel:_id,
          message: value,
          _userId: Meteor.userId(),  // Add userId to each message
          timestamp: new Date() // Add a timestamp to each message
        });
      }
    }
  });
```

Show the time in nice formatting, i.e. "16:19 PM":
```
meteor add momentjs:moment
```
client/views/channel/channel.js:
```javascript
  ...
  },
  time: function () {
    return (this.timestamp ? moment(this.timestamp).format('H:mm A') : false);
  }
});
```
client/views/channel/channel.html:
```html
  ...
  <li>
    <div>{{user.emails.[0].address}} {{time}}</div>
    {{#markdown}}{{message}}{{/markdown}}
  </li>
  ...
```