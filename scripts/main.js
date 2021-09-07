const app = Vue.createApp({
        setup () {
          return {
            canvas: null,
          }
        },
        mounted () {
          this.canvas = new PIXI.Application({width: window.innerWidth, height:window.innerHeight-100})

          document.getElementById("pixi-bg").append(this.canvas.view)

          PIXI.loader
          .add("./assets/building.png")
          .load(this.init)
        },
        methods: {
          loaded: function init() {
            let building = new PIXI.Sprite(
              PIXI.loader.resources["./assets/building.png"].texture
            )
            this.canvas.stage.addChild(building);
          }
        }
      })

app.use(Quasar)
app.mount('#q-app')
