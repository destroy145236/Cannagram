<template>
  <section
  v-if="store.openSideBarChatAppContact"
    :class="['bg-black w-screen md:w-[100%] lg:w-[27%] h-screen text-white',store.openSideBarChat ? 'block sm:w-[100%] md:w-[100%] ':'hidden']"
  >
  <div class="h-auto py-3 px-5 bg-background">
      <section class="flex flex-row justify-between">
        <article class="flex flex-row gap-5">
          <button @click="store.openSideBarChatAppContact = false">
            <img class="h-5" src="../../assets/images/icons/Back_Icon.png" alt="" />
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

      class="absolute flex flex-row justify-center justify-items-center items-center bottom-[10%] right-0 md:bottom-[5%]  md:right-[1%] lg:right-0 m-6 size-14 rounded-full bg-violet-600"
    >
      <img src="../../assets/images/icons/Add_User_Icon.png" alt="Gallery Icon" />
    </button>
  </section>
  <section
v-else
    :class="['bg-black  w-screen md:w-[100%] lg:w-[27%] h-screen text-white',store.openSideBarChat ? 'block sm:w-[100%] md:w-[100%] ':'hidden']"
  >
    <div class="h-auto py-3 px-5 bg-background">
      <section class="flex flex-row justify-between">
        <article class="flex flex-row gap-5">
          <button @click="store.openSideBarChat =false">
            <img class="h-5" src="../../assets/images/icons/Close_Icon.png" alt="" />
          </button>
          <p class="font-medium">Infos du Canal</p>
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
              <img
                class="h-14 hover:h-16"
                src="../../assets/images/icons/Camera_Add_Icon.png"
                alt=""
              />
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
      <section class="flex flex-row gap-8 mx-2 items-center">
        <button><img class="h-5" src="../../assets/images/icons/Phone_Icon.png" alt="" /></button>
        <article>
          <p class="text-white text-md">C.me/Canaltest</p>
          <p class="text-sm text-secondaryText">Lien</p>
        </article>
      </section>
      <section class="flex flex-row gap-8 m-3 items-center">
        <button><img class="h-5" src="../../assets/images/icons/Phone_Icon.png" alt="" /></button>
        <article class="flex flex-row w-full justify-between">
          <p class="text-white text-md">Notifications</p>
          <input type="checkbox" name="" id="" />
        </article>
      </section>
    </div>

    <div class="bg-background mt-2 h-full">
      <section class="flex text-sm flex-row justify-between">
        <button  v-for="item in store.optionsSiderbarChAt" @click="store.activateOptions(item.id)" :key="item.id" :class="['hover:bg-gray-800 p-4 ', store.idActiveOptions === item.id ? 'text-violet-600 ' : '']">
          {{ item.name }}
        </button>
      </section>
      <section class="bg-background px-5 h- py-4">
        <div class="mt-5">
          <section
            v-for="item in store.users"
            :key="item.id"
            class="flex gap-4 my-2 flex-row items-center"
          >
            <article
              class="h-10 w-10 my-2 rounded-full flex justify-center items-center overflow-hidden"
            >
              <img
                src="../../assets/images/Avatar.png"
                class="h-full w-full object-cover"
                alt="Avatar"
              />
            </article>
            <article class="flex flex-row justify-between w-full items-center">
              <section>
                <p class="text-md font-medium">{{ item.name }}</p>
                <p class="text-xs font-extralight">En ligne récemment</p>
              </section>
              <p class="text-xs">Admin</p>
            </article>
          </section>
        </div>
      </section>
    </div>
    <button
    @click="store.openSideBarChatAppContact= true"
      class="absolute flex flex-row justify-center justify-items-center items-center bottom-[10%] right-0 md:bottom-[5%]  md:right-[1%] lg:right-0 m-6 size-14 rounded-full bg-violet-600"
    >
      <img src="../../assets/images/icons/Add_User_Icon.png" alt="Gallery Icon" />
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
