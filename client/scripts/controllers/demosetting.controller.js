import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Session } from 'meteor/session'

export default class DemosettingCtrl extends Controller {
  constructor($scope) {
    super(...arguments);
    HTTP.call( 'GET', 'https://graph.facebook.com/v2.10/me?fields=about%2Cemail%2Ceducation%2Cbirthday%2Cgender%2Cname%2Cwork%2Cmusic&access_token='+Session.get("long_access_token"), 
            ( error, response )=> {
          if ( error ) {
               console.log( error );
              } else { 
                  console.log( response);
                  Session.set("out", response.data)
                  //alert( JSON.stringify(response.data));
               }
              });

        
          this.helpers({
            data : function(){
               return Session.get("out");
        },

            stytle :function(){
               return Session.get("currentRommId"); 
        }
          });
          }

  
  logout(){
    this.$state.go('login');
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
    this.$log.error('Demofriend error ');

    this.$ionicPopup.alert({
      title: 'Demofriend failed',
      template: 'Please try again',
      okType: 'button-positive button-clear'
    });
  }
}

DemosettingCtrl.$name = 'DemosettingCtrl';
DemosettingCtrl.$inject = ['$state', '$stateParams','$ionicLoading', '$ionicPopup', '$log','AuthService'];