# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-22 : SASS STYLES

Add a SASS/SCSS preprocessor:
```
meteor add fourseven:scss
```

Create some styles, i.e. let aside be 220px fixed to the left and header 53px fixed at the top, and footer fixed to the bottom.

client/css/styles.scss:
```css
$aside: 220px;
$top: 53px;

header,
aside,
footer {
  position: fixed;
}

header {
  top: 0;
  height: $top;
  margin-left: $aside;
}

aside {
  top: $top;
  width: $aside;
}

article {
  margin-left: $aside;
}

footer {
  position: fixed;
  bottom: 0;
  margin-left: $aside;
}
```