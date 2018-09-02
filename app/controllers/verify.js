import Controller  from '@ember/controller';
import rsa         from 'npm:node-rsa'     ;

export default Controller.extend({
  color:        '',
  outputClass:  'hidden',
  loaderHidden: true,
  succeeded:    false,
  actions: {
    copied: function() {
      this.set('color', 'green');
      setTimeout(function(self) { self.set('color', '') }, 1000, this);
    },
    copyError: function() {
      this.set('color', 'red');
      setTimeout(function(self) { self.set('color', '') }, 1000, this);
    },
    go: function() {
      this.set('loaderHidden', false);

      setTimeout(function(self) {
        var pub = new rsa();
        pub.importKey(self.get('key'), 'pkcs1-public-pem');

        var succeeded = pub.verify(self.get('string'), self.get('signature'), 'utf8', 'base64');
        self.set('succeeded', succeeded);

        self.set('outputClass', '');
        self.set('loaderHidden', true);
      }, 50, this);
    }
  }
});
