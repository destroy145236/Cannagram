<template>
  <div class="bg-background flex flex-col items-center justify-center h-screen w-screen">
    <section class="flex flex-col items-center justify-center">
      <img
        src="@/assets/images/icons/cannagramqr.png"
        alt="Logo"
        class="h-[50%] w-[70%] sm:h-[40%] sm:w-[45%] md:h-[40%] md:w-[75%]"
      />
      <p class="text-white text-xl py-3 md:text-3xl font-bold">Connexion à Cannagram par code QR</p>
      <p class="text-white text-start py-5 text-md font-semibold leading-loose">
        1- Ouvrez Cannagram sur votre téléphone. <br />
        2- Allez dans Paramètres > Appareils > <br />
        Connectez votre PC. <br />
        3- Pointez votre téléphone sur cet écran <br />
        pour confirmer la connexion.
      </p>
      <button
        @click="store.gotoLoginPage"
        class="text-violet-700 text-xl font-extralight py-3 px-6 rounded-lg hover:bg-violet-300 hover:bg-opacity-10"
      >
        CONNEXION PAR UN NUMERO DE TELEPHONE
      </button>
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
