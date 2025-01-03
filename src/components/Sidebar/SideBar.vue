<template>
  <SideBarHome />
  <SideBarSetting />
  <SideBarSettingEdit />
  <SideBarNewCanal />
  <SideBarAddContact />
  <SideBarNewContact/>

  <p></p>
</template>
<script>
import { useChatStore } from '../../stores/chatsore'
import { ref } from 'vue'
import SideBarHome from './SideBarHome.vue'
import SideBarSetting from './SideBarSetting.vue'
import SideBarSettingEdit from './SideBarSettingEdit.vue'
import SideBarNewCanal from './SideBarNewCanal.vue'
import SideBarAddContact from './SiderBarAddConatct.vue'
import SideBarNewContact from './SideBarNewContact.vue'

export default {
  components: {
    SideBarHome,
    SideBarSetting,
    SideBarSettingEdit,
    SideBarNewCanal,
    SideBarAddContact,
    SideBarNewContact
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

      settings,
    }
  },
}
</script>
<style></style>
