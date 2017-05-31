Meteor.methods({
  /** The method to add a new status. Receives the status text */
  'statuses.add' (status) {
    if (!this.userId) { throw new Meteor.Error(401, 'You must be logged in'); }
    check(status, String);
    Statuses.insert({ status });
  }
});
