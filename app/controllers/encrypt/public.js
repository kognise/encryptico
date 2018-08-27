import Controller   from '@ember/controller';
import { htmlSafe } from '@ember/template'  ;

import keypair from 'npm:keypair' ;
import nl2br   from 'npm:nl2br'   ;
import rsa     from 'npm:node-rsa';

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
        var kp = keypair();
        var pub = new rsa();
        pub.importKey(kp.public, 'pkcs1-public-pem');

        self.set('_key', kp.private);
        self.set('key' , new htmlSafe(nl2br(kp.private)));

        var encrypted = pub.encrypt(self.get('string'), 'base64');
        self.set('output', encrypted);

        self.set('outputClass', '');
        self.set('loaderHidden', true);
      }, 50, this);
    }
  }
});
