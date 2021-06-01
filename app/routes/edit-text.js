import Route from '@ember/routing/route';

export default class EditTextRoute extends Route {
  model(data){
    let editorData = this.store.peekRecord('texteditor', data.id);
    return editorData;
  }
}
