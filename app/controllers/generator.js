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
        self.set('_public', kp.public);
        self.set('public', new htmlSafe(nl2br(kp.public)));
        self.set('_private', kp.private);
        self.set('private', new htmlSafe(nl2br(kp.private)));

        self.set('outputClass', '');
        self.set('loaderHidden', true);
      }, 50, this);
    }
  }
});
