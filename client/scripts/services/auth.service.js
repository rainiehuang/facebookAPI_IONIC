import { Service } from 'angular-ecmascript/module-helpers';
import { Session } from 'meteor/session'

export default class AuthService extends Service{

  constructor() {
    super(...arguments);
   this.userIsAuthenticated = false;

  }


  setUserAuthenticated(value){
        this.userIsAuthenticated = value;
          
    }

  getUserAuthenticated(){
        return  this.userIsAuthenticated;
    }


  logout()
  {
  this.userIsAuthenticated = false;
  }

}


AuthService.$name = 'AuthService';
AuthService.$inject = ['$rootScope'];
