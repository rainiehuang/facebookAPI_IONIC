import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Session } from 'meteor/session'

export default class DemotwoCtrl extends Controller {
  constructor($scope) {
    super(...arguments);
   
    var abccc=document.getElementById("abc").value;

    HTTP.call( 'POST', 'https://graph.facebook.com/v2.10/me/feed', 
     {
              params: {
                'message':abccc,
                'access_token':'EAAEjq7eAMK4BAM1gdLqgwNjk0XZAoCfDINQptbMjbJtqQCJfu5LM3qqrh6marbhrfgbuXJ6F5fhbgLQLL7rY5qIatvexIdbvNNg9Ypn2ejrhnOSPphSk53I9KqkSRqOYsNiQoumbXhsGl8R81JcLqCOowhXuWyPZBkNdGVVwZDZD'
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
          

  submit() {
          
          //do something
             var abccc=document.getElementById("abc").value;
              HTTP.call( 'POST', 'https://graph.facebook.com/v2.10/me/feed', 
           {
              params: {
                'message':abccc,
                'access_token':Session.get("long_access_token")
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
                        alert('success');
                        this.$state.go('tab.demo');
                       
               }
              });
           
          }
    write1(){
     
     document.getElementById("abc").value=document.getElementById("button1").value
   }
   write2(){
     
     document.getElementById("abc").value=document.getElementById("button2").value
   }
    write3(){
     
     document.getElementById("abc").value=document.getElementById("button3").value
   }
    write4(){
     
     document.getElementById("abc").value=document.getElementById("button4").value
   }
   

  handleError() {
    this.$log.error('Demotwo error ');

    this.$ionicPopup.alert({
      title: 'Demotwo failed',
      template: 'Please try again',
      okType: 'button-positive button-clear'
    });
  }
}

DemotwoCtrl.$name = 'DemotwoCtrl';
DemotwoCtrl.$inject = ['$state', '$stateParams','$ionicLoading', '$ionicPopup', '$log','AuthService'];