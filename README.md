# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-21 : CONTENT FOR

Move content into yields, i.e. the title should go in the header, messageForm in the footer and channels in aside.

client/views/home/home.html:
```html
<template name="home">
  {{#contentFor 'aside'}}
  <form>
    ...
  {{> loginButtons}}
  {{/contentFor}}
</template>
```

../channel/channel.js:
```javascript
...
});

// We've moved the message form into a new template
// (messageForm), now we need to move the event map.
Template.channel.events({
  ...
```

../channel/channel.html:
```html
<template name="channel">
  {{#contentFor 'header'}}
  <h1>{{channel.name}}</h1>
  <ul>
    {{#each messages}}
    ...
  {{/contentFor}}

  {{#contentFor 'footer'}}
    {{> messageForm}}
  {{/contentFor}}

  {{>home}}
</template>

<template name="messageForm">
  <form>
    <textarea cols="100" rows="1"></textarea>
  </form>
</template>
```
