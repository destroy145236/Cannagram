<template>
      <section
        v-if="store.openModalSetting"
        class="absolute z-50 top-16 bg-gray-100 bg-opacity-15 backdrop-blur-3xl rounded-lg text-white transition-all ease-out duration-500"
      >
        <div class="absolute inset-0 bg-gray-950 bg-opacity-20 rounded-md -z-10"></div>
        <article class="flex flex-row py-1 gap-3 items-center w-full">
          <button
            @click="store.toogleshowSetting"
            class="cursor-pointer flex flex-row items-center gap-2 p-2 text-white rounded-md hover:bg-gray-600"
          >
            <img src="../../assets/images/icons/Gallery_Icon.png" alt="Gallery Icon" />

            <p>Parametres</p>
          </button>
        </article>
        <p class="text-center font-extralight text-gray-400 m-2">Cannagram WebK 0.0.1</p>
      </section>
</template>
<script>
import { useChatStore } from '../../stores/chatsore'

export default {
  setup() {
    const store = useChatStore()

    return {
      store,
    }
  },
}
</script>
