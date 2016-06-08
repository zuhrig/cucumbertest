/**
 * Created by euhrig on 6/3/16.
 */
// conf.js
exports.config = {
// //---- JASMINE framework -----
//     framework: 'jasmine',
//     seleniumAddress: 'http://localhost:4444/wd/hub',
//     specs: ['spec.js'],
// //-----  MultiBrowser -----
// //    multiCapabilities: [{
// //      browserName: 'firefox'
// //    }, {
// //      browserName: 'chrome'
// //    }]
//     capabilities : {
//       browserName: 'chrome'
//     }
  specs:[
    '**/*.feature'
  ],
  directConnect:true,
//---- CUCUMBER -----
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  cucumberOpts: {
   require: [
     'features/support/world.js',
     'features/support/env.js',
     'features/step_definitions/search_steps.js',

   ]
  //   format: "summary"
  }
}
