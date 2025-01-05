<template>
  <div class="bg-background flex flex-col items-center justify-center h-screen w-screen">
    <section cl>
      <section class="flex flex-col items-center justify-center">
        <article
          class="flex flex-col items-center justify-center bg-violet-700 rounded-full h-[15vh] w-[15vh]"
        >
          <img class="size-[40%]" :src="lightIcon" alt="" />
        </article>
      </section>
      <p class="text-white text-center text-xl py-3 md:text-3xl font-bold">
        S'inscrire à Cannagram
      </p>
      <p class="text-selectedBubble text-center py-5">
        Veuillez saisir votre nom, prénom et nom d'utilisateur.
      </p>

      <div>
        <form
          action="

  "
        >
          <div class="px-4">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Votre Nom"
              class="block w-full px-4 py-4 my-5 text-sm text-white bg-transparent border border-violet-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-violet-600"
            />
          </div>
          <div class="px-4">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Votre Prenom"
              class="block w-full px-4 py-4 my-5 text-sm text-white bg-transparent border border-violet-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-violet-600"
            />
          </div>
          <div class="px-4">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Votre Nom d'utilisateur"
              class="block w-full px-4 py-4 my-5 text-sm text-white bg-transparent border border-violet-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-600 focus:border-violet-600"
            />
          </div>
        </form>
        <div class="flex items-center mb-4 p-4">
          <input
            type="checkbox"
            id="remember"
            class="w-4 h-4 py-3 text-violet-600 bg-gray-800 border-gray-600 rounded focus:ring-violet-500 focus:ring-2"
          />
          <label for="remember" class="ml-2 text-white text-sm">Maintenir la connexion</label>
        </div>

        <!-- Button -->
        <button
          @click="store.gotoHome"
          class="w-full p-4 text-sm font-semibold text-center text-white bg-violet-600 rounded-lg hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2"
        >
          CONTINUER
        </button>

        <!-- Lien -->
      </div>
    </section>
  </div>
</template>
<script>
import { useChatStore } from '../../stores/chatsore'
import lightIcon from '@/assets/images/icons/Light_Icon.png'

export default {
  setup() {
    const store = useChatStore()

    return {
      store,
      lightIcon
    }
  },
}
</script>
