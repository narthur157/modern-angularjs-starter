import template from './componentTemplate.html'
import componentStylez from './componentStylez.sass'
import {ComponentController} from './theComponentController.js'

const bindings = {
  someInput: '<',
  someOutput: '&'
}

export const theComponent = {
  controller: ComponentController,
  template,
  bindings
}