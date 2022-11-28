import { Scene } from 'three'
import { defineComponent, inject, Ref } from 'vue'
import { useGLTF } from '.'

export const GLTFModel = defineComponent({
  name: 'GLTFModel',
  props: {
    path: String,
    draco: Boolean,
  },

  async setup(props) {
    const scene = inject<Ref<Scene>>('local-scene')

    const { scene: model } = await useGLTF(props.path as string, { draco: props.draco })
    if (scene?.value) {
      scene.value.add(model)
    }
    return () => null
  },
})
