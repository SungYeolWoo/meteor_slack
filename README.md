# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-3 : Channel Route

Create a channel route in routes.js: 
```javascript
Router.map(function () {
  ...
  
  this.route('channel', {
    path : '/channel/:_id'
  });
});
```

Create a template for a channel listing messages:
```html
<template name="channel">
  <ul>
    {{#each messages}}
    <li>
      {{message}}
    </li>
    {{/each}}
  </ul>
</template>
```
