import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Session } from 'meteor/session'

export default class DemoCtrl extends Controller {
  constructor($scope) {

    super(...arguments);
             
              HTTP.call( 'GET', 'https://graph.facebook.com/v2.10/me/feed?fields=full_picture%2Cmessage%2Cstory%2Cid%2Cpicture%2Ccreated_time&access_token='+Session.get("long_access_token"), 
               
            ( error, response )=> {
          if ( error ) {
               console.log( error );
              } else { 
                  console.log( response);
                  Session.set("out", response.data)
                 // alert( JSON.stringify(response.data));
               }
              });
      
         $scope.listCanSwipe = true

          this.helpers({ 
            data : function(){
               return Session.get("out");
        },
        
            stytle :function(){
               return Session.get("currentRommId"); 
        }
              
          });
      
      
          }  
        
    delete(response){
    
    
      HTTP.call( 'DELETE', 'https://graph.facebook.com/v2.10/'+response.id+'?access_token='+ Session.get("long_access_token"), 
     
            ( error, response )=> {
          if ( error ) {
               console.log( error );
              } else { 
                  console.log( response);
                  Session.set("out", response.data)
                  this.$state.reload('tab.demo');
                 
                  
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
  addpost(){
            
            this.$state.go('tab.demotwo');
           
  }

  some(response){
            
    
            this.$state.go('tab.demoedit',{ message:response.message , id:response.id});
           
  }

  
  

  demo() {
          this.AuthService.setUserAuthenticated(true);
          //do something
              HTTP.call( 'GET', 'https://graph.facebook.com/v2.10/me/feed?fields=picture%2Cstory%2Cmessage%2Ccreated_time%2Cid&access_token=EAACEdEose0cBAFUkXelKrMsiFVZAuK5qo382hZC01afqMbmIP1ehFaF8Sq0QN547RHykTfQV9Ob73mLlVuXFZAb7tha0e5PuyqBOveVIcDRtZCzLzztd9D4lw1m61I6a7WNbU3hcg00cgDfcdMVpiZB0od5GEk1hPv7Y48eO3iGmjJn1GNZBfkuNZA0uSojN3YZD', 
            ( error, response )=> {
          if ( error ) {
               console.log( error );
              } else { 
                  console.log( response.data);
                  Session.set("out", response.data)
                  //alert( JSON.stringify(response.data));
               }
              });
          this.helpes({
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

DemoCtrl.$name = 'DemoCtrl';
DemoCtrl.$inject = ['$state', '$stateParams','$ionicLoading', '$ionicPopup', '$log','AuthService','$ionicSlideBoxDelegate'];