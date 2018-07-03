App.accessRule('*.fitbit.com/*', { type: 'navigation' } );
App.accessRule('*.facebook.com/*', { type: 'navigation' } );
App.icons({
  'iphone': 'public/I60px.png',
   'iphone_2x': 'public/I120px.png',
  'iphone_3x': 'public/I180px.png'
  // More screen sizes and platforms...
});


App.launchScreens({
  // iOS

  'iphone6p_portrait': 'public/launchscreens@3x.png',

});