import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | texteditor', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('texteditor', {});
    assert.ok(model);
  });
});
