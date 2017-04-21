import fancyFunction from './fancyJsModule.js'

/**
 * Provides handlers for theComponent
 */
class ComponentController {
  /**
   * Announces that input bindings aren't defined
   * @return {undefined} undefined
   */
  constructor () {
    console.log('input bindings arent defined!', this.someInput)
  }

  /**
   * Calls someOutput with the value of someInput put in fancyFunction
   * @return {undefined} undefined
   */
  doSuperThings () {
    console.log('doing super things')
    this.someOutput({value: fancyFunction(this.someInput, 3)})
  }

  /**
   * Announces that input bindings are defined
   * @return {undefined} undefined
   */
  $onInit () {
    console.log('input bindings are defined!', this.someInput)
  }
}

export { ComponentController } 