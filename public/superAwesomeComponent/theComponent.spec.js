/* eslint-disable */
import chai from 'chai'
import sinon from 'sinon'
console.log('running')
const theComponentInjector = require('inject-loader!./theComponent.js')

let {expect, should, assert} = chai

describe('superAwesomeComponent', function() {
  let stub 
  let theComponent
  let controller

  beforeEach(function setupCompentMock() {
    stub = sinon.stub.returns(1)

    theComponent = theComponentInjector({
      './fancyJsModule.js': stub
    })

    controller = new theComponent.controller()
  })
  describe('doSuperThings', function() {
    it('calls fancyFunction', function() {
      controller.doSuperThings()
      assert(stub.calledOnce)
    })
  })
})