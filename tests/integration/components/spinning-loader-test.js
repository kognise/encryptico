import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | spinning-loader', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{spinning-loader}}`);

    assert.equal(this.element.textContent.trim(), '');

    // Dummy test:
    await render(hbs`
      template block text
    `);

    assert.equal(this.element.textContent.trim(), 'template block text');
  });
});
