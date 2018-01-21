<template>
  <div class="pixi-renderer">
    <canvas ref="renderCanvas"></canvas>
    <!-- All child <template> elements get added in here -->
    <slot></slot>
  </div>
</template>

<script>

export default {
  mounted () {
    // Determine the width and height of the renderer wrapper element.
    const renderCanvas = this.$refs.renderCanvas
    const w = renderCanvas.offsetWidth
    const h = renderCanvas.offsetHeight

    // Create a new PIXI app.
    console.log('new pixi app')
    console.log(this.$pixi.PIXIWrapper.PIXI)
    this.$pixi.PIXIWrapper.PIXIApp = new this.$pixi.PIXIWrapper.PIXI.Application(w, h, {
      view: renderCanvas,
      backgroundColor: 0x1099bb
    })

    this.$pixi.EventBus.$emit('ready')
  }
}
</script>

<style scoped>
canvas {
  width: 100%;
  height: 100%;
}
</style>
