import Controller   from '@ember/controller';
import { htmlSafe } from '@ember/template'  ;

import keypair from 'npm:keypair' ;
import nl2br   from 'npm:nl2br'   ;
import NodeRSA from 'npm:node-rsa';

export default Controller.extend({
  color:        '',
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
    go:     function() {
      var pair = keypair();
      this.set('_key', pair.public);
      this.set('key' , new htmlSafe(nl2br(pair.public)));

      var key = new NodeRSA();
      key.importKey(pair.private, 'pkcs1');

      var encryptedString = key.encrypt(this.get('string'), 'base64');
      this.set('output' , encryptedString);
    }
  }
});