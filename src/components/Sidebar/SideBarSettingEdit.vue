<template>
  <section
    v-if="store.indexSideBar === 3"
    class="bg-black overflow-y-scroll w-screen md:w-[60%] lg:w-[27%] h-screen text-white"
  >
    <div class="h-auto py-3 px-5 bg-background">
      <section class="flex flex-row justify-between">
        <article class="flex flex-row gap-5">
          <button @click="store.indexSideBar = 2">
            <img class="h-5" src="@/assets/images/icons/Back_Icon.png" alt="" />
          </button>
          <p>Modifier le profil</p>
        </article>
      </section>
      <section class="h-[60%] my-5 flex flex-col items-center justify-center">
        <article
          class="h-[14vh] m-3 w-[14vh] rounded-full bg-gradient-to-b from-green-200 to-green-600 flex flex-row items-center justify-center"
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
          <label class="relative left-5 hover:text-violet-500 top-3 bg-background px-2" for=""
            >Prénom</label
          >
          <input
            type="text"
            class="w-full bg-background text-white border-2 border-gray-700 px-6 hover:border-violet-500 rounded-lg py-4"
            placeholder="Allison"
          />
        </div>
        <div>
          <input
            type="text"
            class="w-full bg-background text-white border-2 border-gray-700 px-6 hover:border-violet-500 rounded-lg py-4"
            placeholder="Nom de Famille"
          />
        </div>
        <div>
          <input
            type="text"
            class="w-full bg-background text-white border-2 px-6 border-gray-700 hover:border-violet-500 rounded-lg py-4"
            placeholder="Bio(Optionnel)"
          />
        </div>
      </form>
    </div>

    <p class="text-secondaryText p-4 text-xs text-start">
      Des informations comme l'age , la profession ou la ville. <br />
      Exemple: Aristite de 23 ans a lyon
    </p>

    <div class="mt-2 bg-background pt-1 gap-2">
      <form
        class="flex p-6 flex-col gap-4"
        action="
    "
      >
        <p class="text-violet-500 text-lg">Nom d'utilisateur</p>
        <div>
          <input
            type="text"
            class="w-full bg-background text-white border-2 border-gray-700 px-6 hover:border-violet-500 rounded-lg py-4"
            placeholder="Nom de Famille"
          />
        </div>
      </form>
    </div>

    <p class="text-secondaryText p-4 text-xs text-start">
      Vous pouvez choisir un nom d'utilisateur sur Cannagramn <br />
      D'autres personnes pourront vous trouver grace a ce nom et vous cotacter sans connaitre votre
      numero de télephone
    </p>

    <p class="text-secondaryText p-4 text-xs text-start">
      Vous pouvez utiliser des lettres , des chiffres ,et des tirets bas .<br />
      La longeur doit etre comprise entre 5 et 32 caracteres
    </p>
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
