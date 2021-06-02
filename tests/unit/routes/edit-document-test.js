import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | editDocument', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:edit-document');
    assert.ok(route);
  });
});
