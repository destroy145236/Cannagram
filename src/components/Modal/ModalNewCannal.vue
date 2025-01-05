<template>
  <section
    v-if="store.openEditCanal"
    class="absolute z-50 mb-2 bottom-40 right-3 md:right-[45%] lg:bottom-28 lg:right-[80%] bg-gray-100 bg-opacity-15 backdrop-blur-3xl rounded-lg text-white transition-all ease-out duration-500"
  >
    <div class="absolute inset-0 bg-gray-950 bg-opacity-20 rounded-md -z-10"></div>
    <article class="flex flex-row py-1 gap-3 items-center w-full">
      <button
        @click="
          store.indexSideBar = 6
          store.openEditCanal = false
        "
        class="cursor-pointer flex flex-row items-center gap-2 p-2 text-white rounded-md hover:bg-gray-600"
      >
        <img src="@/assets/images/icons/Gallery_Icon.png" alt="Gallery Icon" />
        <p>Nouveau Discussion</p>
      </button>
    </article>
    <article class="flex flex-row py-1 gap-3 items-center w-full">
      <button
        @click="
          store.indexSideBar = 4
          store.openEditCanal = false
        "
        class="cursor-pointer flex flex-row items-center gap-2 p-2 text-white rounded-md hover:bg-gray-600"
      >
        <img src="@/assets/images/icons/Gallery_Icon.png" alt="Gallery Icon" />

        <p>Nouveau canal</p>
      </button>
    </article>
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
