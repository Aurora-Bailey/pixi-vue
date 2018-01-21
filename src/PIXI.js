import Vue from 'vue'
import * as PIXI from 'pixi.js'

import PixiRenderer from './PIXIRenderer.vue'
import Sprite from './PIXISprite.vue'
import Container from './PIXIContainer.vue'

function getProviders () {
  return {
    // These need to be contained in an object because providers are not reactive.
    PIXIWrapper: {
      // Expose PIXI and the created app to all descendants.
      PIXI,
      PIXIApp: null
    },
    // Expose the event bus to all descendants so they can listen for the app-ready event.
    EventBus: new Vue()
  }
}

function install (Vue, options) {
  Vue.prototype.$pixi = getProviders()
  Vue.component('pixi-renderer', PixiRenderer)
  Vue.component('sprite', Sprite)
  Vue.component('container', Container)
}
export default {install}
