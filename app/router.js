import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('main');
  this.route('decrypt');
  this.route('encrypt', function() {
    this.route('public');
    this.route('private');
  });
});

export default Router;
