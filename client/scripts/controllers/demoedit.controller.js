import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Session } from 'meteor/session'

export default class DemoeditCtrl extends Controller {
  constructor($scope) {

    super(...arguments);
      
          var message=this.$stateParams.message;
          var id=this.$stateParams.id;
          document.getElementById("abc") .value = message;

          this.helpers({
            data : function(){
               return Session.get("out");
        },

            stytle :function(){
               return Session.get("currentRommId"); 
        }
          });
      
          }



  edit() {
         var id=this.$stateParams.id;
         var abccc=document.getElementById("abc").value;
         
       HTTP.call( 'POST', 'https://graph.facebook.com/v2.10/'+id, 
     {
              params: {
                'message':abccc,
                'access_token': Session.get("long_access_token")
              },
              headers: {
                    "content-type": "application/x-www-form-urlencoded",
            }

           },       
    ( error, response )=> {
          if ( error ) {
               console.log( error );
              } else { 
                 console.log( response );
                        this.$state.go('tab.demo');
                         
                        
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
  
  handleError() {
    this.$log.error('Demo error ');

    this.$ionicPopup.alert({
      title: 'Login failed',
      template: 'Please try again',
      okType: 'button-positive button-clear'
    });
  }
}

DemoeditCtrl.$name = 'DemoeditCtrl';
DemoeditCtrl.$inject = ['$state', '$stateParams','$ionicLoading', '$ionicPopup', '$log','AuthService'];