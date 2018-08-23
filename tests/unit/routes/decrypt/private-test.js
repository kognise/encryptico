import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | decrypt/private', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:decrypt/private');
    assert.ok(route);
  });
});
