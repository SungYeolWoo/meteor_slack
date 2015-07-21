/**
 * Created by ProgrammingPearls on 15. 7. 21..
 */
Router.map(function () {
  this.route('home', {
    path : '/'
  });

  this.route('channel', {
    path : '/channel/:_id'
  });
});
