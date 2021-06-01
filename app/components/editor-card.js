import Component from '@glimmer/component';
import {action} from '@ember/object';
import { inject as service } from '@ember/service';
export default class EditorCardComponent extends Component {
  @service store;
  @action
  deleteData(getId){
    let deleteData = this.store.peekRecord('texteditor',getId);
    deleteData.destroyRecord();
  }
}
