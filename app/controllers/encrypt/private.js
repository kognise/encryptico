import Controller from '@ember/controller';
import keypair from 'npm:keypair' ;
import NodeRSA from 'npm:node-rsa';

export default Controller.extend({
  loaderHidden:  true,
  actions: {
    success: function() {},
    error:   function() {},
    go:      function() {
      var pair = keypair();
      this.set('_key', pair.public);
      this.set('key' , pair.public.replace('\n', '<br/>'));
      const key = new NodeRSA();
    }
  }
});