<template>
  <div
    v-if="store.preview"
    class="h-screen w-screen fixed bg-black bg-opacity-[0.8] flex flex-row justify-center justify-items-center items-center z-40"
  >
    <section
      class="h-sceen w=[80%] lg:w-[25%] pb-10 bg-background rounded-3xl px-2 flex flex-col items-start"
    >
      <button class="flex flex-row p-3" @click="store.previewMedia">
        <img :src="Close" alt="" />
      </button>
      <article class="flex flex-col items-center justify-center">
        <template v-if="store.fileType === 'image/jpeg' || store.fileType === 'image/png'">
          <img :src="store.selectUrl" class="rounded-xl" alt="" />
        </template>
        <template v-else-if="store.fileType === 'video/mp4'">
          <video autoplay class="h-full w-[80%] rounded-xl" :src="store.selectUrl"></video>
        </template>
        <template v-else-if="store.fileType.startsWith('application/')"> </template>
      </article>
    </section>
  </div>
</template>
<script>
import { useChatStore } from '../../stores/chatsore'
import Close from '@/assets/images/icons/Close_Icon.png'

export default {
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
      Close
    }
  },
}
</script>
