import Controller from '@ember/controller';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import {action} from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EditTextController extends Controller {
  @tracked editor;
  get getEditor(){
    this.editor = new EditorJS({
      holderId : 'editorjs',
      autofocus: true,
      tools: {
        header: Header,
        list: List,
        embed: Embed
      },
      data: {
        blocks :this.model.bodyContent
      }
    })
  }

  @action
  saveContent(value){
    const fileName = this.model.name;
    if(fileName != "" && fileName != undefined){
      value.target.parentNode.parentNode.firstElementChild.firstElementChild.nextElementSibling.style.border ="none";
      const self = this;
      this.editor.save().then((data) =>{
        if(data.blocks.length !=0){
          self.model.name = fileName;
          self.model.bodyContent = data.blocks;
          self.model.save();
          this.editor.clear();
          self.transitionToRoute('homePage');
        }
      }).catch((error) => {
        console.log('Saving failed: ', error)
      });
      this.set("fileName","");
    }
    else{
      value.target.parentNode.parentNode.firstElementChild.firstElementChild.nextElementSibling.style.border ="2px solid #cf0000";
    }
  }
}
