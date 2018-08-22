import Controller from '@ember/controller';
import cryptico from 'npm:cryptico';

export default Controller.extend({
  actions: {
    go: function() {
      var bits       = 1024;
      var privateKey = cryptico.generateRSAKey (this.get('pass'), bits);
      var publicKey  = cryptico.publicKeyString(privateKey);
      this.set('key', publicKey);
    }
  }
});