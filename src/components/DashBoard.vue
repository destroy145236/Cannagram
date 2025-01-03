<template>
  <div class="flex flex-row h-screen w-screen fixed z-10">
    <Sidebar />

    <Chat />
  </div>
</template>
<style>
/* Removed empty ruleset */
#discussions {
  background-image: url('../assets/chat-bg-dark.jpg');
}
* {
  transition: all 0.5s ease-in-out;
}
</style>

<script>
import Chat from './Chat/Chat.vue'
import Sidebar from './Sidebar/SideBar.vue'

export default {
  components: {
    Sidebar,

    Chat,
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
