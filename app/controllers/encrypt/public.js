import Controller   from '@ember/controller';
import { htmlSafe } from '@ember/template'  ;

import keypair from 'npm:keypair'   ;
import nl2br   from 'npm:nl2br'     ;
import forge   from 'npm:node-forge';

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
      this.set('outputClass', '');
      var pair = keypair();
      //this.set('_key', pair.private);
      //this.set('key' , new htmlSafe(nl2br(pair.private)));

      var key = new NodeRSA();
      key.importKey(pair.public, 'public');

      //var encryptedString = key.encrypt(this.get('string'), 'base64');
      //this.set('output', encryptedString);

      //this.set('outputClass', '');
    }
  }
});
