import Controller from '@ember/controller';
import {action} from '@ember/object';

export default class HomePageController extends Controller {
  get userName(){
    let currentUserId;
    this.model.forEach((ele)=>{
      currentUserId= ele.userId
    });
    if(currentUserId !=undefined){
      let currentUser = this.store.peekRecord('user',currentUserId);
      return currentUser.name;
    }
  }

  @action
  logoutAccount(){
    let userId;
    this.model.forEach((ele)=>{
      userId = ele.userId
    });
    let currentUser = this.store.peekRecord('user',userId);
    currentUser.userStatus = false;
    currentUser.save();
    this.transitionToRoute('signup-page');
  }

}
