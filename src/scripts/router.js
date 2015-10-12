import Backbone from 'backbone';
import $ from 'jquery';
import AboutView from './views/aboutView';
import Profile from './models/profile';
import RepoCollection from './models/repoCollection';
import RepoListView from './views/repoListView';


const Router = Backbone.Router.extend({
  routes: {
    '': 'showDefault',
    ':name': 'showAbout',
    ':name/repos': 'showRepos'
  },

  showDefault : function () {
    this.navigate('/esalvodon', true);
  },

  showAbout: function(gitHubName) {
    let profile = new Profile({
      login: gitHubName
    });
    const aboutView = new AboutView({
      model: profile
    });
    aboutView.render();

    // handle nav
    $('nav li').removeClass('active');
    $('nav li.profile').addClass('active');
    $('nav li.profile a').attr('href', `#${gitHubName}`);
    $('nav li.repos a').attr('href', `#${gitHubName}/repos`);
  },

  showRepos: function(gitHubName) {
    let repos = new RepoCollection({ login: gitHubName });
    let view = new RepoListView({
      collection: repos
    });
    view.render();

    // handle nav
    $('nav li').removeClass('active');
    $('nav li.repos').addClass('active');
  },

  initialize: function() {
    Backbone.history.start();
  }
});

export default Router;
