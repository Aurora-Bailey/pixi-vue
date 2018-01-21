<script>
export default {
  props: ['x', 'y', 'imagePath'],

  data () {
    return {
      sprite: null
    }
  },

  // We can leave the render function empty
  // since a sprite has no children.
  // eslint-disable-next-line
  render () {},

  created () {
    this.sprite = this.$pixi.PIXIWrapper.PIXI.Sprite.fromImage('https://vuejs.org/images/logo.png')
    // Set the initial position.
    this.sprite.x = this.x || 0
    this.sprite.y = this.y || 0
    this.sprite.anchor.set(0.5)

    // Opt-in to interactivity.
    this.sprite.interactive = true

    // Forward the pointerdown event.
    this.sprite.on('pointerdown', () => this.$emit('pointerdown', this.sprite))

    // When the PIXI renderer starts.
    this.$pixi.EventBus.$on('ready', () => {
      // Add the sprite to the parent container or the root app stage.
      if (this.$parent.container) {
        this.$parent.container.addChild(this.sprite)
      } else {
        this.$pixi.PIXIWrapper.PIXIApp.stage.addChild(this.sprite)
      }

      // Emit an event for this sprite on every tick.
      // Great way to kill performance.
      this.$pixi.PIXIWrapper.PIXIApp.ticker.add(delta => this.$emit('tick', this.sprite, delta))
    })
  }
}
</script>
