import Controller   from '@ember/controller';
import { htmlSafe } from '@ember/template'  ;

import nl2br from 'npm:nl2br'   ;
import rsa   from 'npm:node-rsa';

export default Controller.extend({
  color:        '',
  outputClass:  'hidden',
  loaderHidden: true,
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

        var decrypted = pub.decryptPublic(self.get('string'));
        self.set('_output', decrypted);
        self.set('output', new htmlSafe(nl2br(decrypted)));

        self.set('outputClass', '');
        self.set('loaderHidden', true);
      }, 50, this);
    }
  }
});
