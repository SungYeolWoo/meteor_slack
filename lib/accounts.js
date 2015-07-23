/**
 * Created by ProgrammingPearls on 15. 7. 22..
 */

if (Meteor.isClient){
  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });
}
else {
  Meteor.publish('allUserNames', function () {
    if (this.userId) {
      return Meteor.users.find({}, {fields: {'profile.username': 1, 'emails': 1}});
    }
  });
}
