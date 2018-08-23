import Controller from '@ember/controller';
import cryptico from 'npm:cryptico';

export default Controller.extend({
  loader:  true,
  actions: {
    go: function() {
      //this.set('loader', false);

      var bits       = 1024;
      var privateKey = cryptico.generateRSAKey (this.get('pass'), bits);
      var publicKey  = cryptico.publicKeyString(privateKey);
      this.set('key', 'Public key: ' + publicKey);

      var plainText       = this.get('string');
      var encryptedString = cryptico.encrypt(plainText, privateKey).cipher;
      this.set('output', 'Encrypted string: ' + encryptedString)

      //this.set('loader', true);
    }
  }
});