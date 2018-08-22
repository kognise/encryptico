import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import cryptico from 'npm:cryptico';

export default Route.extend({
  spinner: service('spinner'),
  actions: {
    go() {
      this.get('spinner').show('spinner');
      encrypt('Test', 'pass');
    }
  }
});

function encrypt(string, pass) {
  var bits       = 1024;
  var privateKey = cryptico.generateRSAKey (pass, bits);
  var publicKey  = cryptico.publicKeyString(privateKey);
}