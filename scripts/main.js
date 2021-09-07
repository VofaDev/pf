
let canvas = new PIXI.Application({width: window.innerWidth, height:window.innerHeight-100})
document.getElementById("pixi-bg").append(canvas.view)


const app = Vue.createApp({
        setup () {
          return {

          }
        },
        mounted: function () {


          PIXI.Loader.shared
          .add("./assets/building.png")
          .load(this.init)
        },
        methods: {
          loaded: function init() {
            let building = new PIXI.Sprite(
              PIXI.Loader.shared.resources["./assets/building.png"].texture
            )
            console.log(  PIXI.Loader.shared.resources["./assets/building.png"].texture)
            canvas.stage.addChild(building);
          }
        }
      })

app.use(Quasar)
app.mount('#q-app')
