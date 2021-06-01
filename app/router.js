import EmberRouter from '@ember/routing/router';
import config from 'text-editor/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('editorPage');
  this.route('signup-page');
  this.route('signin-page');
  this.route('homePage');
  this.route('edit-text',{ path: '/edit-text/:id' });
});
