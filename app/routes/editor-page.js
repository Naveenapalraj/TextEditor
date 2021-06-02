import Route from '@ember/routing/route';

export default class EditorPageRoute extends Route {
  model(){
    return this.store.createRecord('document');
  }
}
