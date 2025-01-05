<template>
  <div
    v-if="store.openChat"
    class="w-full overflow-y-scroll px-2 md:px-10 lg:px-56 flex flex-col h-full"
  >
    <section class="h-[80%] overflow-y-scroll flex flex-col">
      <div v-if="store.disccussionType === 'default'">
        <div v-for="disccusion in store.discussionsdefault" :key="disccusion.date">
          <div class="flex flex-col items-center">
            <article class="my-3 mx-56 px-4 py-1 bg-white bg-opacity-15 text-center rounded-full">
              <p class="text-white">{{ disccusion.date }}</p>
            </article>
          </div>
          <div
            v-for="(item, idx) in disccusion.messages"
            :key="idx"
            :class="['flex w-full', item.status == 'user' ? 'justify-end' : 'justify-start']"
          >
            <section
              @click="
                store.showHeart = !store.showHeart
                store.applyReactionsDefault(item.id)
              "
              :class="[
                'p-2 flex my-2 gap-1 cursor-pointer  max-w-[70%] h-[20%] md:max-w-[50%] lg:max-w-[30%] w-auto break-words',
                item.status == 'user'
                  ? 'rounded-t-xl rounded-bl-xl bg-blue-600'
                  : 'rounded-t-xl rounded-br-xl bg-gray-500',
              ]"
            >
              <template v-if="item.media == ''">
                <div class="flex flex-col">
                  <p class="text-white">{{ item.text }}</p>
                  <div class="flex flex-row justify-between items-end py-1">
                    <article v-if="item.reactions != ''" class="flex flex-row items-center gap-1">
                      <p class="bg-background rounded-full w-auto px-2">{{ item.reactions }}</p>
                      <article
                        class="h-5 m-1 w-5 rounded-full bg-gradient-to-b from-violet-200 to-violet-600 flex flex-row items-center justify-center"
                      >
                        <p class="text-white text-sm">A</p>
                      </article>
                    </article>
                    <article class="flex gap-2 items-end">
                      <p class="text-xs text-white">{{ item.time }}</p>
                      <p>
                        <img class="h-2 w-3" src="@/assets/images/icons/vue.png" alt="" />
                      </p>
                    </article>
                  </div>
                </div>
              </template>
              <template v-else>
                <section class="flex flex-col">
                  <template
                    v-if="
                      item.fileType &&
                      (item.fileType === 'image/jpeg' || item.fileType === 'image/png')
                    "
                  >
                    <button @click="store.previewMedia(item.media, item.fileType)">
                      <img :src="item.media" class="rounded-xl" alt="" />
                    </button>
                    <p class="text-white">{{ item.text }}</p>
                  </template>
                  <template v-else-if="item.fileType && item.fileType === 'video/mp4'">
                    <button @click="store.previewMedia(item.media, item.fileType)">
                      <video autoplay class="h-full w-full rounded-xl" :src="item.media"></video>
                    </button>
                    <p class="text-white">{{ item.text }}</p>
                  </template>
                  <template v-else-if="item.fileType && item.fileType.startsWith('application/')">
                    <button
                      @click="store.downloadFile(item.media)"
                      class="flex flex-col items-start justify-center rounded-xl gap-2 px-6"
                    >
                      <article class="flex flex-row items-center justify-center gap-2">
                        <img src="@/assets/images/icons/document.png" class="h-10" alt="" />
                        <article class="flex flex-col items-start text-white">
                          <p class="text-white text-md overflow-x-hidden text-start">
                            {{ item.fileName }}
                          </p>
                          <p>{{ item.filesize }} ko</p>
                        </article>
                      </article>
                      <p class="text-white">{{ item.text }}</p>
                    </button>
                  </template>

                  <div class="flex flex-row justify-between items-end py-1">
                    <article v-if="item.reactions != ''" class="flex flex-row">
                      <p class="bg-background rounded-full w-auto px-2">{{ item.reactions }}</p>
                      <article
                        class="h-5 m-1 w-5 rounded-full bg-gradient-to-b from-violet-200 to-violet-600 flex flex-row items-center justify-center"
                      >
                        <p class="text-white text-sm">A</p>
                      </article>
                    </article>
                    <article class="flex gap-2 items-end">
                      <p class="text-xs text-white">{{ item.time }}</p>
                      <p>
                        <img class="h-2 w-3" src="@/assets/images/icons/vue.png" alt="" />
                      </p>
                    </article>
                  </div>
                </section>
              </template>
              <div
                v-show="store.showHeart && store.idshowHeart === item.id"
                class="my-7 bg-background absolute rounded-full px-2 flex flex-row gap-2 items-center justify-items-center justify-center w-auto h-10"
              >
                <p
                  v-for="item in store.reactiveEmojies"
                  :key="item.id"
                  @click="store.selectEmojies = item.name"
                  class=""
                >
                  {{ item.name }}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div v-else>
        <div v-for="disccusion in store.discussionsCanal" :key="disccusion.date">
          <div class="flex flex-col items-center">
            <article class="my-3 px-4 py-1 bg-white bg-opacity-15 text-center rounded-full">
              <p class="text-white">{{ disccusion.date }}</p>
            </article>
            <article class="my-3 px-4 py-1 bg-white bg-opacity-15 text-center rounded-full">
              <p class="text-white">Un Canal a été crée</p>
            </article>
            <article class="my-3 px-4 py-1 bg-white bg-opacity-15 text-center rounded-full">
              <p class="text-white">Vous avez rejoint le canal</p>
            </article>
          </div>
          <div
            v-for="(item, idx) in disccusion.messages"
            :key="idx"
            :class="['flex w-full', 'justify-start']"
          >
            <section
              @click="
                store.showHeart = !store.showHeart
                store.applyReactionsCanal(item.id)
              "
              :class="[
                'p-2 flex m-2 gap-1 cursor-pointer bg-selectedBubble max-w-[80%] md:max-w-[50%] lg:max-w-[30%] break-words',
                item.status == 'user' ? 'rounded-t-xl rounded-br-xl' : 'rounded-t-xl rounded-br-xl',
              ]"
            >
              <template v-if="item.media == ''">
                <div class="flex flex-col">
                  <p class="text-white">{{ item.text }}</p>
                  <div class="flex flex-row justify-end items-end py-1">
                    <article v-if="item.reactions != ''" class="flex flex-row">
                      <p class="bg-background rounded-full w-auto px-2">{{ item.reactions }}</p>
                      <article
                        class="h-5 m-1 w-5 rounded-full bg-gradient-to-b from-violet-200 to-violet-600 flex flex-row items-center justify-center"
                      >
                        <p class="text-white text-sm">A</p>
                      </article>
                    </article>
                    <article class="flex gap-2 items-end">
                      <p class="text-xs text-white">{{ item.time }}</p>
                      <p>
                        <img class="h-2 w-3" src="@/assets/images/icons/vue.png" alt="" />
                      </p>
                    </article>
                  </div>
                </div>
              </template>
              <template v-else>
                <section class="flex flex-col w-full">
                  <template v-if="item.fileType === 'image/jpeg' || item.fileType === 'image/png'">
                    <button class="h-[25vh]" @click="store.previewMedia(item.media, item.fileType)">
                      <img :src="item.media" class="h-[90%] w-[100%] rounded-xl" alt="" />
                    </button>
                    <p class="text-white">{{ item.text }}</p>
                  </template>
                  <template v-else-if="item.fileType === 'video/mp4'">
                    <button @click="store.previewMedia(item.media, item.fileType)">
                      <video autoplay class="h-[90%] w-[100%] rounded-xl" :src="item.media"></video>
                    </button>
                  </template>
                  <template v-else-if="item.fileType.startsWith('application/')">
                    <button
                      @click="store.downloadFile(item.media)"
                      class="flex flex-row items-center justify-center rounded-xl gap-2 p-4"
                    >
                      <img src="@/assets/images/icons/document.png" class="h-14" alt="" />
                      <article class="flex flex-col items-start text-white">
                        <p class="text-white text-lg">{{ item.fileName }}</p>
                        <p>{{ item.filesize }} ko</p>
                      </article>
                    </button>
                  </template>

                  <div class="flex flex-row justify-between items-end py-1">
                    <article v-if="item.reactions != ''" class="flex flex-row">
                      <p class="bg-background rounded-full w-auto px-2">{{ item.reactions }}</p>
                      <article
                        class="h-5 m-1 w-5 rounded-full bg-gradient-to-b from-violet-200 to-violet-600 flex flex-row items-center justify-center"
                      >
                        <p class="text-white text-sm">A</p>
                      </article>
                    </article>
                    <article class="flex gap-2 items-end">
                      <p class="text-xs text-white">{{ item.time }}</p>
                      <p>
                        <img class="h-2 w-3" src="@/assets/images/icons/vue.png" alt="" />
                      </p>
                    </article>
                  </div>
                </section>
              </template>
              <div
                v-show="store.showHeart && store.idshowHeart === item.id"
                class="my-7 bg-background rounded-full px-2 absolute bottom-auto flex flex-row gap-2 items-center justify-items-center justify-center w-auto h-10"
              >
                <p
                  v-for="item in store.reactiveEmojies"
                  :key="item.id"
                  @click="store.selectEmojies = item.name"
                  class=""
                >
                  {{ item.name }}
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
    <section class="h-[10%] mb-40 md:mb-28 lg:mb-0">
      <form @submit.prevent="store.handleSubmit" class="h-full flex items-center">
        <div
          class="bg-background h-[75%] flex items-center mx-2 w-full rounded-t-3xl rounded-bl-2xl relative"
        >
          <!-- Icône de recherche -->
          <div class="relative left-7">
            <button type="button" @click="toggleEmojiPicker">
              <img src="@/assets/images/icons/emoji_icon.png" alt="Emoji" />
            </button>
            <div v-if="store.showEmojiPicker" class="absolute bottom-full left-0 z-50">
              <EmojiPicker @select="onSelectEmoji" />
            </div>
          </div>
          <!-- Champ de recherche -->
          >
          <input
            v-model="store.inputText"
            class="bg-transparent h-full pl-14 pr-10 rounded-full w-full text-white focus:outline-none"
            type="Text"
            placeholder="Ecrire un message"
          />

          />
          <button type="button" @click="store.toogleFile">
            <img
              class="absolute right-3 bottom-1/4"
              src="@/assets/images/icons/Attach_Icon.png"
              alt="Upload_Icon"
            />
          </button>
        </div>
        <ModalForUplaod />

        <button type="submit" class="bg-violet-600 rounded-full p-4">
          <img class=" " src="@/assets/images/icons/Send_icon.png" alt="Send Icon" />
        </button>
      </form>
    </section>
  </div>
</template>
<script>
import { useChatStore } from '../../stores/chatsore'
import EmojiPicker from 'vue3-emoji-picker'
import ModalForUplaod from '../Modal/ModalForUplaod.vue'
import 'vue3-emoji-picker/css'

export default {
  components: {
    EmojiPicker,
    ModalForUplaod,
  },
  setup() {
    const store = useChatStore()

    const toggleEmojiPicker = () => {
      store.showEmojiPicker = !store.showEmojiPicker
      console.log(store.showEmojiPicker)
    }

    const onSelectEmoji = (emoji) => {
      store.inputText += emoji.i // Adds the emoji to the input text
      store.showEmojiPicker = false // Closes picker after selection
    }

    return {
      store,
      onSelectEmoji,
      toggleEmojiPicker,
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
