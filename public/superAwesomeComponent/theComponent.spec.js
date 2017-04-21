/* eslint-disable */
import chai from 'chai'
import sinon from 'sinon'

const theControllerInjector = require('inject-loader!./theComponentController.js')

let {expect, should, assert} = chai

describe('superAwesomeComponent', function() {
  let stub 
  let theComponentController
  let controller

  beforeEach(function setupComponent () {
    stub = sinon.stub().returns(1)

    theComponentController = theControllerInjector({
      // The module is really simple, so it's not really necessary to mock it
      // In a real app, it could be much more complex (ie, something that makes API calls)
      './fancyJsModule.js': stub
    }).ComponentController
    controller = new theComponentController()
    controller.someOutput = sinon.stub()
    controller.someInput = 1
  })
  describe('doSuperThings', function() {
    it('calls fancyFunction', function() {
      controller.doSuperThings()
      assert(stub.calledOnce)
    })
  })
})
