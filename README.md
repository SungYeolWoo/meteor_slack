# Meteor Chat Application (Slack Style)

> Source : http://slides.com/timbrandin/meteor-slack#/

### STEP-15 : PUBLISH USERNAMES

Add a username field to the sign-up form (lib/accounts.js):
```javascript
if (Meteor.isClient){
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });
}
```
Create a publication for 'allUserNames' but only send the username to logged in users (lib/accounts.js):
```javascript
...
}
else {
  Meteor.publish('allUserNames', function () {
    if (this.userId) {
      return Meteor.users.find({}, {fields: {'profile.username': 1}});
    }
  });
}
```


