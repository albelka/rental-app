import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(rental) {
      if (confirm('Are you super duper positive you want to delete this rental?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
