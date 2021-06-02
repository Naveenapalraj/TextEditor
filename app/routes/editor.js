import Route from '@ember/routing/route';

export default class EditorRoute extends Route {
  model(){
    return this.store.createRecord('document');
  }
}
