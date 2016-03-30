import angular from 'angular'

import { TaskCtrl } from './task.controllers'
import { Task } from './task.services'

var task = angular.module('app.task', [])
  .controller('TaskCtrl', TaskCtrl)
  .service('Task', Task)

require('./task.css')

export default task
