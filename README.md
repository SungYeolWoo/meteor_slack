# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-2 : Home Route

Create a home route in routes.js : 
```javascript
Router.map(function (){
  this.route('home', {
    path: '/'
  });
});
```
Create a template for home listing:
```html
<template name="home">
  <ul>
    {{#each channels}}
      <li>{{name}}</li>
    {{/each}}
  </ul>
</template>
```
