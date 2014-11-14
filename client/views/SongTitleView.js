var SongTitleView = Backbone.View.extend({

  tagName: "h1",

  template: _.template('<marquee> <%= artist %> - <%= title %></marquee>'),
  initialize: function() {
    // this.render();

  },

  render: function(model){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.html(this.template(model.attributes));
  }

});
