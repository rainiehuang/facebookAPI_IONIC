import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Session } from 'meteor/session'

export default class DemoshareCtrl extends Controller {
  constructor($scope) {
    super(...arguments);
  
    this.AuthService.setUserAuthenticated(true);
          //do something
              HTTP.call( 'GET', 'https://graph.facebook.com/v2.10/466384006724941?fields=photos.fields(picture)&access_token='+Session.get("long_access_token"), 
            ( error, response )=> {
          if ( error ) {
               console.log( error );
              } else { 
                  console.log( response);
                  
                  
                  
               }
              });
          }

  

  login() {
          this.AuthService.setUserAuthenticated(true);
          //do something
              HTTP.call( 'GET', 'https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=UCv7IjJclSgpfGUHnG171ovw&order=date&key=AIzaSyCJXkJS-6vEhAQZoUYeeYy2j6onURNmxhY', 
            ( error, response )=> {
          if ( error ) {
               console.log( error );
              } else { 
                  console.log( response.data);
                  alert( JSON.stringify(response.data));
               }
              });
          }

  handleError() {
    this.$log.error('Demoshare error ');

    this.$ionicPopup.alert({
      title: 'Demoshare failed',
      template: 'Please try again',
      okType: 'button-positive button-clear'
    });
  }
}

DemoshareCtrl.$name = 'DemoshareCtrl';
DemoshareCtrl.$inject = ['$state', '$stateParams','$ionicLoading', '$ionicPopup', '$log','AuthService'];