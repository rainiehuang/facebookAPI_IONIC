import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Session } from 'meteor/session'

export default class LoginCtrl extends Controller {
  constructor($scope) {
    super(...arguments);
    
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

  loginnn(){
     location.href="https://www.facebook.com/dialog/oauth?client_id=320695401722030&redirect_uri=http://localhost:3000/logintwo&scope=user_birthday,user_hometown,user_location,user_likes,user_events,user_photos,user_videos,user_friends,user_status,user_tagged_places,user_posts,user_gender,user_link,user_age_range,email,publish_actions,read_insights,read_audience_network_insights,user_managed_groups,manage_pages,pages_manage_instant_articles,pages_show_list,publish_pages,read_page_mailboxes,ads_management,ads_read,business_management,pages_messaging,pages_messaging_phone_number,pages_messaging_subscriptions,public_profile,basic_info&state=example";
            var strUrl = location.hash;
            var getPara, ParaVal, getcode;
            var getSearch = strUrl.split("?");
            
            getPara = getSearch[1].split("&");
            for (i = 0; i < getPara.length; i++) {
            ParaVal = getPara[i].split("=");
    }
           getcode = getPara[0].split("=");
           
           this.$state.go('logintwo',{code:getcode[1]});
  
     console.log(code);
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

LoginCtrl.$name = 'LoginCtrl';
LoginCtrl.$inject = ['$state', '$stateParams','$ionicLoading', '$ionicPopup', '$log','AuthService'];