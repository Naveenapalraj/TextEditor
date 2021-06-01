import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | homePage', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:home-page');
    assert.ok(route);
  });
});
