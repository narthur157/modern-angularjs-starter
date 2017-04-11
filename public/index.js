import angular from 'angular'
import {theComponent} from './superAwesomeComponent/theComponent.js'

angular.module('theWholeApp', [])
.component('superAwesomeComponent', theComponent)