<template>
  <section
    v-if="store.indexSideBar === 6"
    class="bg-black w-screen md:w-[100%] lg:w-[27%] h-screen text-white"
  >
    <div class="h-auto py-3 px-5 bg-background">
      <section class="flex flex-row justify-between">
        <article class="flex flex-row gap-5">
          <button @click="store.indexSideBar = 1">
            <img class="h-5" src="@/assets/images/icons/Back_Icon.png" alt="" />
          </button>
          <p class="font-medium">Nouvelle discussion</p>
        </article>
      </section>
      <section class="h-[60%] my-5 flex flex-col items-center justify-center">
        <article
          class="h-[14vh] m-3 w-[14vh] rounded-full bg-gradient-to-b from-violet-200 to-violet-600 flex flex-row items-center justify-center"
        >
          <div class="h-full w-full" v-if="store.selectUrl">
            <img class="h-full w-full rounded-full" :src="store.selectUrl" alt="" />
          </div>
          <div v-else>
            <label for="uploadPhoto">
              <img class="h-14 hover:h-16" src="@/assets/images/icons/Camera_Add_Icon.png" alt="" />
            </label>
            <input
              id="uploadPhoto"
              type="file"
              accept="image/*"
              class="hidden"
              @change="store.handleFileUploadProfil"
            />
          </div>
        </article>
      </section>
      <form
        class="flex flex-col gap-4"
        action="
    "
      >
        <div>
          <input
            type="text"
            v-model="store.inputNameContact"
            required
            class="w-full bg-background text-white border-2 border-gray-700 px-6 hover:border-violet-500 rounded-lg py-4"
            placeholder="Nom du Contact"
          />
        </div>
      </form>
    </div>

    <p class="text-secondaryText p-4 text-xs text-start">
      Vous pouvez fournir une description facultatif pour votre canal
    </p>
    <button
      type="submit"
      v-if="store.inputNameContact"
      @click="store.handleaddNewUserdefault"
      class="absolute flex flex-row justify-center justify-items-center items-center bottom-20 right-0 md:bottom-[5%] md:left-[15%] m-6 size-14 rounded-full bg-violet-600"
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
