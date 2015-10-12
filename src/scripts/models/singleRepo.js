import Backbone from 'backbone';

const Repo = Backbone.Model.extend({
  defaults: {
    language: '',
    url: '',
    description: ''
  }
});

export default Repo;
