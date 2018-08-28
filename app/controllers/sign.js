import  Controller  from '@ember/controller';
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
        var priv = new rsa();
        priv.importKey(kp.private, 'pkcs1-private-pem');

        self.set('_key', kp.public);
        self.set('key' , new htmlSafe(nl2br(kp.public)));

        var signature = priv.sign(self.get('string'), 'base64');
        self.set('signature', signature);

        self.set('outputClass', '');
        self.set('loaderHidden', true);
      }, 50, this);
    }
  }
});
