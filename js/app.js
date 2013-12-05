Browser = Ember.Application.create();

Browser.Router.map(function() {
  this.resource('resources', { path: "/" });
});

Browser.Resource = Ember.Object.extend({});

Browser.Resource.reopenClass({
  findAll: function(url) {
    return $.getJSON(url).then(
      function(response) {
        return Browser.Resource.create(response);
      });
  }
});

Browser.ResourcesRoute = Ember.Route.extend({
  model: function() {
    Browser.Resource.findAll('put url here').then(function (resource) {
      console.log(resource);
    });
  }
});
