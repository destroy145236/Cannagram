<template>
  <section
    v-if="store.indexSideBar === 5"
    :class="[
      'bg-black w-screen md:w-[100%] lg:w-[27%] h-screen text-white',
      store.openChat ? 'hidden' : 'block',
    ]"
  >
    <div class="h-auto py-3 px-5 bg-background">
      <section class="flex flex-row justify-between">
        <article class="flex flex-row gap-5">
          <button @click="store.indexSideBar = 1">
            <img class="h-5" src="@/assets/images/icons/Back_Icon.png" alt="" />
          </button>
          <p class="font-medium">Ajout de membres</p>
        </article>
      </section>

      <div class="mt-5">
        <section
          v-for="item in store.users"
          :key="item.id"
          class="flex gap-4 my-2 flex-row items-center"
        >
          <input
            type="checkbox"
            class="w-5 h-5 border-2 border-white rounded-md bg-violet-600 checked:bg-violet-600 focus:ring-1 focus:outline-none transition duration-300"
          />
          <article>
            <p class="text-md font-medium">{{ item.name }}</p>
            <p class="text-xs font-extralight">En ligne récemment</p>
          </article>
        </section>
      </div>
    </div>

    <p class="text-secondaryText p-4 text-xs text-start">
      Vous pouvez fournir une description facultatif pour votre canal
    </p>
    <button
      @click="store.indexSideBar = 1"
      class="absolute flex flex-row justify-center justify-items-center items-center bottom-[10%] right-0 md:bottom-[5%] md:left-[45%] lg:left-[15%] m-6 size-14 rounded-full bg-violet-600"
    >
      <img src="@/assets/images/icons/forward_icon.png" alt="Gallery Icon" />
    </button>
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
