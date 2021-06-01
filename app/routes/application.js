import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model(){
    let currentUser = document.cookie;
    let userIndex = currentUser.indexOf("=");
    let user = currentUser.substring(userIndex+1);
    this.store.queryRecord('user',{email:user}).then((userDetail)=>{
      if(userDetail != null){
        this.transitionTo("homePage");
      }
      else{
        this.transitionTo("signup-page");
      }
    })
    .catch(()=>{
      this.transitionTo("signup-page");
    })
  }
}

