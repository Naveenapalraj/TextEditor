import Route from '@ember/routing/route';

export default class EditDocumentRoute extends Route {
  model(data){
    let editorData = this.store.peekRecord('document', data.id);
    return editorData;
  }
}
