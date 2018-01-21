<template>
  <div id="app">
    <button @click="show=!show">show/hide</button>
    <pixi-renderer v-if="show">
      <container
        :x="200" :y="400"
        @tick="tickInfo" @pointerdown="scaleObject"
      >
        <sprite :x="0" :y="0" imagePath="assets/logo.png"/>
      </container>
    </pixi-renderer>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      show: false
    }
  },

  methods: {
    scaleObject (container) {
      container.scale.x *= 1.25
      container.scale.y *= 1.25
    },

    tickInfo (container, delta) {
      console.log(`Tick delta: ${delta}`)
    }
  }
}
</script>

<style>
#app {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
