import Backbone from 'backbone';
import Repo from './singleRepo';

const RepoCollection = Backbone.Collection.extend({
  url: function() {
    return `https://api.github.com/users/${this.login}/repos`;
  },

  model: Repo,

  initialize: function(options) {
   this.login = options.login;
  }
});
export default RepoCollection;

window.RepoCollection = RepoCollection;
