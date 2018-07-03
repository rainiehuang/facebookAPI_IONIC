import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Session } from 'meteor/session'

export default class LogintwoCtrl extends Controller {
  constructor($scope) {
    super(...arguments);

    var code=this.$stateParams.code;
   // code='AQDJdy6TahZV-JQBwf7c97EZd-ZpQnyRo_zpyPFxAh1LfCHTb2cG5vQDOzSJ8OiLQTucjJPpbHRmFSdU_7iF6N1UdibkQZ0YNXTVY6CmZyLSpZq3x12MRa_YQiIdIIKMWvcXIPW4gypa4Ghds527JnMH_uCqXBn9MQxeMqNmq2556CzUMiNyS8ErZBXCh7h2aXWX25ObIn6LryTcuaBeIMfsE9ExbodreNxq8UNmqdUO1et-iRLhSy1L_7xSJ39sX4MeahvdyIMe-_yVB_j6iwYtOvUgxKzC8GMjHEU11Gz9K9eNjn39rDM-vKl8T2dFXxnkuKaxIwyXnM5ENtRCHRHJ';
  //  this.AuthService.setUserAuthenticated(true);
   //  console.log('i run this');
          //do something
              HTTP.call( 'GET', 'https://graph.facebook.com/v2.5/oauth/access_token?client_id=320695401722030&redirect_uri=http://localhost:3000/logintwo&client_secret=9474a6560e7939aaffdafb36f58b2ef0&code='+code, 
          
            ( error, response )=> {
          if ( error ) {
   console.log('i run this');
               console.log( error );
              } else { 
                  console.log( response.data);
                  Session.set("access_token", response.data.access_token);
                  this.testToken();
               }
              });
           this.helpers({
            data : function(){
               return Session.get("access_token");             
        },

            stytle :function(){
               return Session.get("currentRommId"); 
        }
          });  

          } 

  

  testToken(){
    
     var accessToken=Session.get("access_token");

     HTTP.call( 'GET', 'https://graph.facebook.com/debug_token?input_token='+accessToken+'&access_token=320695401722030|9474a6560e7939aaffdafb36f58b2ef0', 
          ( error, response )=> {
          if ( error ) {
               console.log( error );
              } else { 
                   console.log( response.data);
                  // alert( JSON.stringify(response.data));
                   this.testPermissions();
               }
              });
  
    
     
  }

  testPermissions(){
    
     var accessToken=Session.get("access_token");

     HTTP.call( 'GET', 'https://graph.facebook.com/v2.5/me/permissions?access_token='+accessToken, 
          ( error, response )=> {
          if ( error ) {
               console.log( error );
              } else { 
                   console.log( response.data);
                  // alert( JSON.stringify(response.data));
                  this.longToken();
                  
               }
              });
  
  }
   longToken(){
    
     var accessToken=Session.get("access_token");

     HTTP.call( 'GET', 'https://graph.facebook.com/v2.5/oauth/access_token?grant_type=fb_exchange_token&client_id=320695401722030&client_secret=9474a6560e7939aaffdafb36f58b2ef0&fb_exchange_token='+accessToken, 
          ( error, response )=> {
          if ( error ) {
               console.log( error );
              } else { 
                   console.log( response.data);
                  // alert( JSON.stringify(response.data));
                  
                   Session.set("long_access_token", response.data.access_token);
                   
                   this.$state.go('tab.demo');
               }
              });
  
  }
  



  handleError() {
    this.$log.error('Login error ');

    this.$ionicPopup.alert({
      title: 'Login failed',
      template: 'Please try again',
      okType: 'button-positive button-clear'
    });
  }
}

LogintwoCtrl.$name = 'LogintwoCtrl';
LogintwoCtrl.$inject = ['$state', '$stateParams','$ionicLoading', '$ionicPopup', '$log','AuthService'];