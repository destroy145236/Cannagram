<template>
  <div
    v-if="store.toogleSendlytate"
    class="h-screen w-screen fixed bg-black bg-opacity-[0.8] flex flex-row justify-center justify-items-center items-center z-40"
  >
    <section
      class="bg-background h-auto lg:w-[30%] p-4 mb-16 rounded-3xl flex flex-col justify-start items-start"
    >
      <form @submit.prevent="store.handleSubmit" class="w-full" action="">
        <button class="flex flex-row py-6" @click="store.toogleSendly">
          <img src="@/assets/images/icons/Close_Icon.png" alt="" />
          <p class="text-lg px-4 text-white font-semibold">
            Envoyer un {{ store.fileType.startsWith('application/') ? 'Document' : 'Media' }}
          </p>
        </button>
        <article class="flex flex-col items-center w-full justify-center">
          <template v-if="store.fileType === 'image/jpeg' || store.fileType === 'image/png'">
            <img :src="store.selectUrl" class="max-h-[20%] max-w-[25%] rounded-xl" alt="" />
          </template>
          <template v-else-if="store.fileType === 'video/mp4'">
            <video autoplay class="lg:w-[80%] rounded-xl" :src="store.selectUrl"></video>
          </template>
          <template v-else-if="store.fileType.startsWith('application/')">
            <article
              class="flex w-[80%] -flex-row items-center justify-center rounded-xl gap-2 p-4"
            >
              <img src="@/assets/images/icons/document.png" class="h-14" alt="" />
              <article class="flex flex-col text-white">
                <p class="text-white text-lg">{{ store.fileName }}</p>
                <p>{{ store.filesize }} ko</p>
              </article>
            </article>
          </template>
        </article>
        <section class="flex flex-row justify-between items-center w-full p-4">
          <input
            type="text"
            v-model="store.inputTextMedia"
            class="bg-transparent w-full h-12 text-white"
            placeholder="Ajouter une légende"
          />

          <button @click="store.handleSubmit" class="bg-violet-600 text-white px-8 py-3 rounded-lg">
            Envoyer
          </button>
        </section>
      </form>
    </section>
  </div>
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
