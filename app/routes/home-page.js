import Route from '@ember/routing/route';

export default class HomePageRoute extends Route {
  model(){
    let currentUserId;
    let currentUser = document.cookie;
    let userIndex = currentUser.indexOf("=");
    let useremail = currentUser.substring(userIndex+1);
    this.store.queryRecord('user',{email:useremail}).then((userDetail)=>{
      currentUserId = userDetail.id;
      if(currentUserId != undefined){
        this.store.queryRecord('document',{id:currentUserId});
      }
    })
    return this.store.peekAll('document');
  }
}
