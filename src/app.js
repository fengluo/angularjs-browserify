import angular from 'angular'

import OnRouter from './on_router'
import 'angular-ui-router'
import './task'

angular.module('app', [
  'ui.router',
  'app.task'])
  .config(OnRouter).run()

angular.bootstrap(document, ['app'], {
  strictDi: true
})
