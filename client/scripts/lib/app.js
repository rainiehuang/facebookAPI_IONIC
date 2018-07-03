// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-meteor-auth';
import 'angular-moment';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import { Meteor } from 'meteor/meteor';

// Modules
import LoginCtrl from '../controllers/login.controller';
import LogintwoCtrl from '../controllers/logintwo.controller';
import DemoCtrl from '../controllers/demo.controller';
import DemoeditCtrl from '../controllers/demoedit.controller';
import DemotwoCtrl from '../controllers/demotwo.controller';
import DemoshareCtrl from '../controllers/demoshare.controller';
import DemofriendCtrl from '../controllers/demofriend.controller';
import DemosettingCtrl from '../controllers/demosetting.controller';


import authService from '../services/auth.service';
import Routes from '../routes';

const App = '';

// App
Angular.module(App, [
  'angular-meteor',
  'angular-meteor.auth',
  'angularMoment',
  'ionic',
]);

new Loader(App)
  .load(LoginCtrl)
  .load(LogintwoCtrl)
  .load(DemoCtrl)
  .load(DemoeditCtrl)
  .load(DemotwoCtrl)
  .load(DemoshareCtrl)
  .load(DemofriendCtrl)
  .load(DemosettingCtrl)
  .load(authService)
  .load(Routes);

  

// Startup
if (Meteor.isCordova) {
  
  Angular.element(document).on('deviceready', onReady);
  var ass= ionic.Platform.fullScreen(true,true);

}
else { 

  Angular.element(document).ready(onReady);


}

function onReady() {
  Angular.bootstrap(document, [App]);

}
