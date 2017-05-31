Template.listStatuses.onCreated(function () {
  this.autorun(() => {
    this.subscribe('userStatuses');
  });
});

Template.listStatuses.helpers({
  /** Return all statuses in descending order */
  'statuses' () { return Statuses.find({}, { sort: { createdAt: -1 } }); }
});
