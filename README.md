# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-20 : ADDING LAYOUTS

Add a layout with a yield for header, body, footer and aside and set it as default in the router.

client/layouts/layout.html:
```html
<template name="layout">
  <header>
    {{> yield "header"}}
  </header>

  <aside>
    {{> yield "aside"}}
  </aside>

  <article>
    {{> yield}}
  </article>

  <footer>
    {{> yield "footer"}}
  </footer>
</template>
```

lib/routes.js:
```javascript
Router.configure({
  layoutTemplate : 'layout'
});

Router.map(function () {
...
```