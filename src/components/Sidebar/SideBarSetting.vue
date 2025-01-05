<template>
  <section
    v-if="store.indexSideBar === 2"
    class="bg-black overflow-y-scroll w-screen md:w-[60%] lg:w-[27%] h-screen text-white"
  >
    <div class="h-auto py-3 px-5 bg-background">
      <section class="flex flex-row justify-between">
        <article class="flex flex-row gap-5">
          <button @click="store.indexSideBar = 1">
            <img class="h-5" src="@/assets/images/icons/Back_Icon.png" alt="" />
          </button>
          <p>Paramétres</p>
        </article>
        <article class="flex flex-row gap-6">
          <button @click="store.indexSideBar = 3">
            <img class="h-5" src="@/assets/images/icons/pencil_icons.png" alt="" />
          </button>
          <button><img class="h-5" src="@/assets/images/icons/Dots_icon.png" alt="" /></button>
        </article>
      </section>
      <section class="h-[60%] my-5 flex flex-col items-center justify-center">
        <article
          class="h-[14vh] m-3 w-[14vh] rounded-full bg-gradient-to-b from-green-200 to-green-600 flex flex-row items-center justify-center"
        >
          <p class="text-white text-4xl font-bold">A</p>
        </article>
        <p class="text-white text-lg">Allison</p>
        <p class="text-sm text-secondaryText">En ligne</p>
      </section>
      <section class="flex flex-row gap-8 mx-2 items-center">
        <button><img class="h-5" src="@/assets/images/icons/Phone_Icon.png" alt="" /></button>
        <article>
          <p class="text-white text-lg">+228 98745632</p>
          <p class="text-sm text-secondaryText">Telephone</p>
        </article>
      </section>
    </div>

    <div class="mt-2 bg-background h-full pt-1 gap-2">
      <section
        v-for="item in settings"
        :key="item.id"
        class="flex rounded-lg hover:bg-gray-800 flex-row gap-8 p-4 m-3 items-center"
      >
        <button>
          <img class="h-5" src="@/assets/images/icons/Boockmark_Icon.png" alt="" />
        </button>

        <p class="text-md text-white">{{ item.name }}</p>
      </section>
    </div>
  </section>
</template>
<script>
import { useChatStore } from '../../stores/chatsore'
import { ref } from 'vue'

export default {
  setup() {
    const store = useChatStore()
    const settings = ref([
      { id: 1, name: 'Notifications et sons' },
      { id: 2, name: 'Données et Stockage' },
      { id: 3, name: 'Confidentialié et sécurité' },
      { id: 4, name: 'Préferences générales' },
      { id: 5, name: 'Appareils' },
      { id: 6, name: 'Langues' },
      { id: 7, name: "Dossiers d'echange " },
    ])

    return {
      store,

      settings,
    }
  },
}
</script>
