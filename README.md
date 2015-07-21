# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-5 : CHANNEL SWITCHING

Create a link to a channel from home (client/views/home/home.html): 
```javascript
  ...
  {{#each channels}}
      <li><a href="/channel/{{_id}}">{{name}}</a></li>
  {{/each}}
  ...
```

Add the links to the channels in a channel (client/views/channel/channel.html):  
```html
<template name="channel">
  ...
  </ul>
  {{>home}}
</template>
```