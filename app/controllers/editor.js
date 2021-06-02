import Controller from '@ember/controller';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import SimpleImage from '@editorjs/simple-image';
import Embed from '@editorjs/embed';
import {action} from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class EditorController extends Controller {
  @tracked editor;

  get getEditor(){
    this.editor = new EditorJS({
      holderId : 'editorjs',
      tools: {

        header: {
          class: Header,
          inlineToolbar : true,
          config: {
            placeholder: 'Enter a header',
            levels: [1,2, 3, 4],
            defaultLevel: 3
          }
        },

        list: {
          class: List,
          inlineToolbar: true
        },

        embed: {
          class: Embed,
          inlineToolbar: true,
          config: {
            services: {
              youtube: true,
              coub: true
            }
          }
        }

      }
    })
  }

  @action
  saveContent(value){
    const fileName = this.fileName;
    let currentUser;
    if(fileName != "" && fileName != undefined){
      value.target.parentNode.parentNode.firstElementChild.firstElementChild.nextElementSibling.style.border ="none";
      const self = this;
      this.editor.save().then((data) =>{
        if(data.blocks.length !=0){
          self.model.name = fileName;
          self.model.bodyContent = data.blocks;
          let user = self.store.peekAll('user');
          user.forEach((ele)=>{
              if(ele.userStatus == true){
                currentUser = ele;
              }
          })
          self.model.user = currentUser;
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
