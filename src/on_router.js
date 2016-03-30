function OnRouter ($stateProvider, $locationProvider, $urlRouterProvider) {
  'ngInject'

  $stateProvider
    .state('Home', {
      url: '/',
      controller: 'TaskCtrl as home',
      templateUrl: 'tpl/task.home.html'
    })

  $urlRouterProvider.otherwise('/')

}

export default OnRouter
