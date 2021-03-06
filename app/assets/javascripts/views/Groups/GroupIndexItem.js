OurLinks.Views.GroupIndexItem = Backbone.CompositeView.extend({
  template: JST['groups/index-item'],
  tagName: 'li',

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    if(options.joinButton){
      this.addJoinButton() };
    if(options.filterButton){
      this.addFilterButton() }
  },

  addJoinButton: function () {
    // var memberStatus = (this.model.get("membership") ? 'member' : 'new');
    // var membership = new OurLinks.Models.Membership({
    //   group_id: this.model.id
    // })
    var view = new OurLinks.Views.GroupJoinButton({
      model: this.model.membership()
    });
    this.addSubview('.toggle', view )
  },

  addFilterButton: function () {
    var view = new OurLinks.Views.GroupFilterButton({
      model: this.model
    });
    this.addSubview('.toggle', view )
  },

  render: function () {
    var content = this.template({group: this.model});
    this.$el.html(content);
    return this;
  }

})
