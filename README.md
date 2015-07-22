# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-12 : SPLIT BY DAY



Create a helper to tell what date it is, but only print the date if it differs from the last printed date (use [Template.instance()](http://docs.meteor.com/#/full/template_instance))

client/views/channel/channel.js:
```javascript
  ...
  },
  date: function () {
    var dateNow = moment(this.timestamp).calendar();
    var instance = Template.instance();

    if (!instance.date || instance.date != dateNow) {
      return instance.date = dateNow;
    }
  }
});
```

client/views/channel/channel.html:
```html
  ...
  {{#each messages}}
  <h2>{{date}}</h2>
  ...
```

And [localize](http://momentjs.com/docs/#/customization/calendar/) it to show 'today' or 'yesterday' (lib/moment.js):
```javascript
moment.locale('en', {
  calendar: {
    lastDay: '[Yesterday]',
    sameDay: '[Today]',
    sameElse: 'MMMM Do, YYYY'
  }
});
```