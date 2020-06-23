import {
  AmbientLight,
  BoxBufferGeometry,
  Fog,
  GridHelper,
  Mesh,
  MeshStandardMaterial,
  MeshBasicMaterial,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
} from 'three'
import { TeapotBufferGeometry } from './geometry'

let teapotSize = 1
let tess = -1 // force initialization
const materialColor = new THREE.Color()
// var textureMap = new THREE.TextureLoader().load('textures/uv_grid_opengl.jpg')
// const textureCube = new THREE.CubeTextureLoader().load(urls)

const wireMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true,
})
const flatMaterial = new THREE.MeshPhongMaterial({
  color: materialColor,
  specular: 0x000000,
  flatShading: true,
  side: THREE.DoubleSide,
})
const gouraudMaterial = new THREE.MeshLambertMaterial({
  color: materialColor,
  side: THREE.DoubleSide,
})
const phongMaterial = new THREE.MeshPhongMaterial({
  color: materialColor,
  side: THREE.DoubleSide,
})
// const texturedMaterial = new THREE.MeshPhongMaterial({
//   color: materialColor,
//   map: textureMap,
//   side: THREE.DoubleSide,
// })
// const reflectiveMaterial = new THREE.MeshPhongMaterial({
//   color: materialColor,
//   envMap: textureCube,
//   side: THREE.DoubleSide,
// })

export default class Teapot extends Mesh {
  constructor() {
    super(
      new TeapotBufferGeometry(teapotSize, tess, true, true, true, false, true),
      // wireMaterial,
      // flatMaterial,
      // gouraudMaterial,
      phongMaterial
    )
  }
}
