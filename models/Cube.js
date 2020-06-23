import { Mesh, MeshStandardMaterial, BoxBufferGeometry } from 'three'

export default class IconMesh extends Mesh {
  constructor() {
    super(
      new BoxBufferGeometry(1.0, 1.0, 1.0),
      new MeshStandardMaterial({
        // map: new TextureLoader().load(require('./assets/icon.png')),
        color: 0xff0000,
      })
    )
  }
}
