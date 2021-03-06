OurLinks.Views.CommentShow = Backbone.View.extend({
  template: JST["comments/show"],
  tagName: 'li',
  initialize: function () {
    this.$el.addClass('list-group-item');
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    "click a#comment-delete": "destroy"
  },

  destroy: function () {
    this.model.destroy()
  },

  render: function () {
    var content = this.template({comment: this.model});
    this.$el.html(content);
    return this;
  }

})
