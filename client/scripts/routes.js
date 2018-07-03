import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Config, Runner } from 'angular-ecmascript/module-helpers';
import { Session } from 'meteor/session'; 
import loginTemplateUrl from '../templates/login.html'; 
import logintwoTemplateUrl from '../templates/login.html'; 
import tabsTemplateUrl from '../templates/tabs.html'; 
import demoTemplateUrl from '../templates/demo.html';
import demoeditTemplateUrl from '../templates/demoedit.html';
import demotwoTemplateUrl from '../templates/demotwo.html';
import demoshareTemplateUrl from '../templates/demoshare.html';
import demofriendTemplateUrl from '../templates/demofriend.html';
import demosettingTemplateUrl from '../templates/demosetting.html';




class RoutesConfig extends Config {
  constructor() {
    super(...arguments);
  }

  configure() {
    this.$stateProvider
      .state('tab', {
        url: '/tab', 
        abstract: true,
        templateUrl: tabsTemplateUrl,
        requireLogin: true
      })
      .state('login', {
      url: '/login?code',
     
      templateUrl: loginTemplateUrl,
      controller: 'LoginCtrl as logger',
      //logger=在view內會叫的名字      
      })
      .state('logintwo', {
       url: '/logintwo?code',
       params:{ code:null},
      templateUrl: logintwoTemplateUrl,
      controller: 'LogintwoCtrl as logger',
      //logger=在view內會叫的名字      
      })

      .state('tab.demo', {
      url: '/demo?code',
      
      views: {
      'tab-demo': {
      templateUrl: demoTemplateUrl,
      controller: 'DemoCtrl as logger',
     
      //logger=在view內會叫的名字      
      }}})
      .state('tab.demoedit', {
      url: '/demoedit?code',
      params:{ message:null,  id:null},
      views: {
      'tab-demo': {
      templateUrl: demoeditTemplateUrl,
      controller:'DemoeditCtrl as logger',
      
      //logger=在view內會叫的名字      
      }}})

      .state('tab.demotwo', {
      url: '/demotwo?code',
      views: {
      'tab-demo': {
      templateUrl: demotwoTemplateUrl, 
      controller: 'DemotwoCtrl as logger',
      //logger=在view內會叫的名字      
      }}})

      .state('tab.demoshare', {
      url: '/demoshare?code',
      views: {
      'tab-demoshare': {
      templateUrl: demoshareTemplateUrl,
      controller: 'DemoshareCtrl as logger',
      //logger=在view內會叫的名字      
      }}})

      .state('tab.demofriend', {
      url: '/demofriend?code',
      views: {
      'tab-demofriend': {
      templateUrl: demofriendTemplateUrl,
      controller: 'DemofriendCtrl as logger',
      //logger=在view內會叫的名字      
      }}})
      .state('tab.demosetting', {
      url: '/demosetting?code',
      views: {
      'tab-demosetting': {
      templateUrl: demosettingTemplateUrl,
      controller: 'DemosettingCtrl as logger',
      //logger=在view內會叫的名字      
      }}})
    

      

      ;
        this.$urlRouterProvider.otherwise('login');
        this.$locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
        

  }

}

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider','$httpProvider',];

class RoutesRunner extends Runner {
  run() {
     

  }
}


RoutesRunner.$inject = ['$rootScope', '$state','AuthService','$stateParams'];

export default [RoutesConfig, RoutesRunner];
