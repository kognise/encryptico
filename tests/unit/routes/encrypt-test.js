import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | encrypt', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:encrypt');
    assert.ok(route);
  });
});
