# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-23 : COLORS + PADDING

The primary color of Slack is #453744 and aside is in this color, and the text and links in aside is somewhat lighter than this.

Fix the margin and padding on body, aside, footer and article.

aside should fill the height of the page (100%-53px), tip use calc The h1 in the header should be vertically centered, tip: set line-height to 53px.

client/css/styles.scss:
```css
$aside: 220px;
$top: 53px;

$primary: #453744;

$padding: 16px;

body {
  margin: 0;
}

header,
aside,
footer {
  position: fixed;
}

header {
  top: 0;
  height: $top;
  margin-left: $aside;
  background: white;
  width: 100%;
  h1 {
    padding: 0 $padding; // padding only on left and right side.
    margin: 0;
    line-height: 53px;
  }
}

aside {
  top: $top;
  width: $aside;
  background: $primary;
  height: calc(100% - 53px);
  padding: $padding;
  box-sizing: border-box;
  &, a {
    color: lighten($primary, 30%);
  }
}

article {
  padding: $padding;
  margin-top: 53px;
  height: calc(100% - 53px);
  margin-left: $aside;
}

footer {
  position: fixed;
  bottom: 0;
  margin-left: $aside;
  padding: $padding;
  background: white;
}
```