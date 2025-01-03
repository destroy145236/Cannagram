<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <section
    id="discussions"
    :class="[
      'bg-background sm:hidden w-full md:block     h-full ',
      store.openChat ? 'block' : 'hidden',
      store.openSideBarChat ? 'hidden   md:w-[50%] lg:w-[73%]  ' : 'block',
    ]"
  >
    <!--hidden md:block-->
    <div
      v-if="store.openChat"
      class="w-full border-b-2 p-2 border-s-2 bg-background border-black flex flex-row justify-between items-center h-16"
    >
      <div class="flex flex-row items-center">
        <button class="block lg:hidden" @click="store.openChat = false">
          <img class=" " src="../../assets/images/icons/Back_Icon.png" alt="" />
        </button>
        <article
          class="h-12 w-12 my-2 rounded-full flex justify-center items-center overflow-hidden"
        >
          <img
            :src="store.UrlActiveChannel ? store.UrlActiveChannel : profil"
            :class="  [store.UrlActiveChannel == ''? 'h-[40%] w-[40%]' :'',, 'h-full w-full object-cover']"
          />
        </article>
        <section @click="store.showopenSideBarChat" class="px-2 cursor-pointer">
          <p class="text-md font-bold text-white">{{ store.NameActiveChannel }}</p>
          <p class="text-sm text-secondaryText">
            {{ store.disccussionType == 'default' ? 'En ligne recement' : '0 Abonnés' }}
          </p>
        </section>
      </div>
      <section class="">
        <button class="relative" @click="store.toogleOpenModal">
          <img src="../../assets/images/icons/Dots_icon.png" alt="" />
        </button>

        <DiscussionModal />
      </section>
    </div>

    <ChatList />
  </section>
  <SideBarChat />
  <AddMessage />
  <MediaPreview />
</template>
<script>
import { useChatStore } from '../../stores/chatsore'
import ChatList from '../Chat/ChatList.vue'
import MediaPreview from '../Chat/MediaPreview.vue'
import DiscussionModal from '../Modal/DiscussionModal.vue'
import AddMessage from '../Chat/AddMessage.vue'
import SideBarChat from '../Sidebar/SideBarChat.vue'
import profil from '../../assets/images/icons/User_Attach_Icon.png'

export default {
  components: {
    ChatList,
    MediaPreview,
    DiscussionModal,
    AddMessage,
    SideBarChat,
  },

  setup() {
    const store = useChatStore()

    return {
      store,
      profil,
    }
  },
}
</script>
<style>
input {
  outline: none;
}
/* Sélection de la scrollbar */
::-webkit-scrollbar {
  width: 0px; /* Réduit la largeur de la scrollbar */
  height: 0px; /* Pour les scrollbars horizontales */
  background: transparent; /* Couleur de fond de la scrollbar */
}

/* Personnalisation de la piste de la scrollbar */
::-webkit-scrollbar-track {
  background: transparent; /* Supprime le fond blanc autour du curseur */
  border-radius: 4px; /* Arrondi de la piste */
}

/* Personnalisation du curseur de la scrollbar */
::-webkit-scrollbar-thumb {
  background: #888; /* Couleur du curseur */
  border-radius: 4px; /* Arrondi du curseur */
  border: none; /* Supprime toute bordure autour du curseur */
}

/* Au survol, changement de couleur du curseur */
::-webkit-scrollbar-thumb:hover {
  background: #555; /* Change la couleur du curseur au survol */
}
</style>
