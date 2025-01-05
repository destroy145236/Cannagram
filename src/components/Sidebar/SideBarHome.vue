<template>
  <section
    v-if="store.indexSideBar === 1"
    :class="[
      'bg-background  w-screen md:w-[60%] lg:w-[21.3%] h-screen flex flex-col text-white',
      store.openChat == true ? ' hidden lg:block ' : 'md:blobk lg:block',
    ]"
  >
    <div class="flex flex-row justify-between items-center h-16 py-8 px-4">
      <section>
        <button @click="store.toogleOpenModalSetting">
          <img :src="menu" alt="" />
        </button>
        <ModalSetting />
      </section>

      <form class="w-[90%] h-10 flex items-center">
        <div
          class="bg-black h-full w-full rounded-full hover:border-0.5 hover:border-white relative"
        >
          <!-- Icône de recherche -->
          <img
            class="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2"
            :src="search"
            alt="Search Icon"
          />
          <!-- Champ de recherche -->
          <input
            class="bg-transparent h-full pl-10 pr-4 rounded-full w-full text-white focus:outline-none"
            type="search"
            placeholder="Rechercher"
          />
        </div>
      </form>
    </div>
    <div
      class="flex flex-row z-20 w-full h-[9.5%] overflow-x-scroll border-b-2 border-gray-950 justify-around"
    >
      <button
        v-for="item in store.navigate"
        :key="item.id"
        @click="store.activateNavigate(item.id)"
        class="flex flex-col w-full px-5 pt-4 items-center whitespace-nowrap"
      >
        <section class="flex flex-col">
          <article class="flex flex-row justify-between items-center">
            <p
              :class="[
                ' w-full px-1 font-semibold text-sm md:text-md ',
                item.active ? 'text-white' : 'text-secondaryText',
              ]"
            >
              {{ item.name }}
            </p>
            <article class="rounded-full flex justify-center items-center bg-violet-600">
              <p class="text-xs px-3 font-semibold text-white">1</p>
            </article>
          </article>
          <article
            v-if="item.active === true"
            class="bg-purple-500 relative top-1 w-full h-0.5 mt-4 rounded-full"
          ></article>
        </section>
      </button>
    </div>
    <div class="overflow-y-scroll h-[91%]">
      <section>
        <button
          @click="store.toogleOpenEditCanal"
          class="absolute flex flex-row justify-center justify-items-center items-center bottom-[10%] right-0 md:bottom-[5%] md:left-[45%] lg:left-[15%] m-6 size-14 rounded-full bg-violet-600"
        >
          <img
            v-if="store.openEditCanal == false"
            :src="pencil"
            alt="Gallery Icon"
          />
          <img v-else :src="close" alt="Gallery Icon" />
        </button>
        <ModalNewCannal />
      </section>

      <section
        v-for="item in store.idChannel === 1
          ? store.users
          : store.idChannel === 2
            ? store.users.filter((user) => user.type === 'default')
            : store.idChannel === 3
              ? store.users.filter((user) => user.type === 'canal')
              : store.users"
        @click="
          store.toogleOpenChat(item.id, item.type) ;store.NameActiveChannel = item.name ;          store.UrlActiveChannel = item.avatar
        "
        :key="item.id"
        :class="[
          'py-2 px-4 flex flex-row w-full hover:bg-violet-600 items-center',
          store.idactivate === item.id ? 'bg-violet-600' : '',
        ]"
      >
        <!-- Avatar -->
        <article
          class="h-14 w-14 my-2  p-5  rounded-full bg-gradient-to-b from-violet-200 to-violet-600 flex justify-center items-center overflow-hidden"
        >
          <img
            :src="item.avatar == '' ? profil : item.avatar"
            :class="[item.avatar == '' ? ' size-3 '     : '', 'h-full w-full object-cover']"
            alt=""
          />
        </article>

        <!-- Content Section -->
        <section class="flex flex-row px-3 justify-between items-center h-full w-[85%]">
          <article class="flex-1 overflow-hidden">
            <!-- Name Section -->
            <section class="text-sm md:text-md font-bold truncate">
              <p class="truncate">{{ item.name }}</p>
            </section>

            <!-- Message Section -->
            <section class="text-xs md:text-sm text-secondaryText font-semibold">
              <p class="overflow-hidden text-ellipsis text-xs whitespace-nowrap truncate">
                {{ item.message }}
              </p>
            </section>
          </article>

          <!-- Timestamp and Notifications -->
          <article class="flex flex-col justify-between items-center ms-2">
            <p
              :class="[
                'text-xs font-light text-secondaryText text-center',
                item.nonlu > 0 ? 'px-0' : 'px-3',
              ]"
            >
              merc
            </p>
            <template v-if="item.nonlu > 0">
              <article
                class="rounded-full m-2 flex justify-center items-center h-5 w-8 bg-violet-600"
              >
                <p class="text-xs font-semibold text-white">{{ item.nonlu }}</p>
              </article>
            </template>
          </article>
        </section>
      </section>
    </div>
  </section>
</template>
<script>
import { useChatStore } from '../../stores/chatsore'
import ModalSetting from '../Modal/ModalSetting.vue'
import ModalNewCannal from '../Modal/ModalNewCannal.vue'
import menu from '@/assets/images/icons/Menu Icon.png'
import { ref } from 'vue'
import profil from '@/assets/images/icons/User_Attach_Icon.png'
import search from '@/assets/images/icons/Search_Icon.png'
import pencil from '@/assets/images/icons/pencil_icons.png'
import close from '@/assets/images/icons/Close_Icon.png'

export default {
  components: {
    ModalSetting,
    ModalNewCannal,
  },
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
      profil,
      settings,
      menu,
      search,
      pencil,
      close
    }
  },
}
</script>
