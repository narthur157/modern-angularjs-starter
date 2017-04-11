import template from './componentTemplate.html'
import componentStylez from './componentStylez.sass'
import {fancyFunction} from './fancyJsModule.js'

class ComponentController {
  constructor () {
    console.log('input bindings arent defined!', this.someInput)
  }
  doSuperThings () {
    console.log('this button pressed, doing super things')
    this.someOutput({value: fancyFunction(1, 3)})
  }

  $onInit () {
    console.log('input bindings are defined!', this.someInput)
  }
}
const bindings = {
  someInput: '<',
  someOutput: '&'
}

export const theComponent = {
  controller: ComponentController,
  template,
  bindings
}