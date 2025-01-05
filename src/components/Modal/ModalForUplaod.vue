<template>
  <section
    v-if="store.toogleFilestate"
    class="absolute p-3 bottom-[13%] right-[15%] bg-gray-100 bg-opacity-15 backdrop-blur-3xl rounded-md text-white transition-all ease-out duration-500"
  >
    <div class="absolute inset-0 bg-gray-950 bg-opacity-20 rounded-md -z-10"></div>
    <article class="flex flex-row py-1 gap-3 items-center">
      <label
        for="uploadPhotoVideo"
        class="cursor-pointer flex flex-row items-center gap-2 p-2 text-white rounded-md hover:bg-violet-600"
      >
        <img src="@/assets/images/icons/Gallery_Icon.png" alt="Gallery Icon" />
        <p>Photo ou Vidéo</p>
      </label>
      <input
        id="uploadPhotoVideo"
        type="file"
        accept="image/*,video/*"
        class="hidden"
        @change="store.handleFileUpload"
      />
    </article>
    <article class="flex flex-row py-1 gap-3 items-center">
      <label
        for="uploadDocument"
        class="cursor-pointer flex flex-row items-center gap-2 p-2 text-white rounded-md hover:bg-violet-600"
      >
        <img src="@/assets/images/icons/File_Icon.png" alt="Gallery Icon" />
        <p>Document</p>
      </label>
      <input
        id="uploadDocument"
        type="file"
        accept=".pdf, .doc, .docx, .ppt, .pptx, .xls, .xlsx, .txt"
        class="hidden"
        @change="store.handleFileUpload"
      />
    </article>
  </section>
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
