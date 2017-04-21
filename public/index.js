import angular from 'angular'
import {theComponent} from './superAwesomeComponent/theComponent.js'

/**
 * @class Has fields addValue and fancyValue. Manages state between superAwesomeComponents
 */
class IndexController {
  constructor () {
    this.addValue = 3
    this.fancyValue = 1337
  }
}


angular.module('theWholeApp', [])
.component('superAwesomeComponent', theComponent)
.controller('IndexController', IndexController)