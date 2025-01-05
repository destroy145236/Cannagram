import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'

export const useChatStore = defineStore('chat', () => {
  // État (state)
  const router = useRouter()
  const selectUrl = ref(null)
  const fileType = ref('')
  const inputTextMedia = ref('')
  const fileName = ref('')
  const filesize = ref(0)
  const idactivate = ref(0)
  const showEmojiPicker = ref(false)
  const openChat = ref(false)
  const openModal = ref(false)
  const openModalSetting = ref(false)
  const toogleFilestate = ref(false)
  const preview = ref(false)
  const toogleSendlytate = ref(false)
  const inputText = ref('')
  const Settings = ref(false)
  const showSetting = ref(true)
  const showtooglemodify = ref(false)
  const openEditCanal = ref(false)
  const newCanal = ref(false)
  const indexSideBar = ref(1)
  const disccussionType = ref('')
  const openSideBarChat = ref(false)
  const openSideBarChatAppContact = ref(false)
  const showHeart = ref(false)
  const selectEmojies = ref('')
  const idshowHeart = ref(0)
  const idChannel = ref(0)
  const inputNameContact = ref('')
  const inputNameCanal = ref('')
  const NameActiveChannel = ref('')
  const UrlActiveChannel = ref('')

  const navigate = ref([
    { id: 1, name: 'All Channel', active: true },
    { id: 2, name: 'Contact', active: false },
    { id: 3, name: 'Canal', active: false },
  ])

  const reactiveEmojies = ref([
    { id: 1, name: '❤️' },
    { id: 2, name: '👌' },
    { id: 3, name: '😡' },
    { id: 4, name: '🤔' },
    { id: 5, name: '👍🏻' },
  ])

  const optionsSiderbarChAt = ref([
    { id: 1, name: 'Membres' },
    { id: 2, name: 'Médias' },
    { id: 3, name: 'Archives' },
    { id: 4, name: 'Supprimer' },
  ])

  //Navigation

  const gotoLoginPage = () => {
    router.push('/Connexion') // Assurez-vous que le chemin est exact
  }
  const gotoSignInPage = () => {
    router.push('/Inscription') // Assurez-vous que le chemin est exact
  }
  const gotoHome = () => {
    router.push('/Home') // Assurez-vous que le chemin est exact
  }
  const gotoQr = () => {
    router.push('/') // Assurez-vous que le chemin est exact
  }

  const users = ref([])
  /**
   *     {
      type: 'default',

      id: 1,
      name: 'Joseph',
      avatar: '',
      message: 'Allz vous ',
      nonlu: 2,
    },
    {
      type: 'canal',
      id: 2,
      name: 'Canal Test',
      avatar: '',
      message: '',
      nonlu: 0,
    },
   */

  const handleaddNewUserdefault = () => {
    users.value.push({
      type: 'default',
      id: users.value.length + 1,
      avatar: selectUrl.value || '',
      name: inputNameContact.value,
      message: '',
      nonlu: 0,
    })
    selectUrl.value = null

    console.log(users.value)

    indexSideBar.value = 1
  }
  const handleaddNewUserCanal = () => {
    users.value.push({
      type: 'canal',
      id: users.value.length + 1,
      avatar: selectUrl.value || '',
      name: inputNameCanal.value,
      message: '',
      nonlu: 0,
    })

    selectUrl.value = null
    indexSideBar.value = 5
    openChat.value = false
  }

  const discussionsdefault = ref([
    {
      date: "Aujourdh'hui",
      type: 'default',
      messages: [
        {
          id: 1,
          media: '',
          text: 'message de luser',
          time: '21:26',
          status: 'user',
          fileType: '', // Ajoutez ces informations
          fileName: '', // dans chaque message
          filesize: '',
          reactions: '',
        },
        {
          id: 2,
          media: '',
          text: 'message de reponse',
          time: '21:26',
          status: 'other',
          fileType: '', // Ajoutez ces informations
          fileName: '', // dans chaque message
          filesize: '',
          reactions: '',
        },
      ],
    },
  ])

  const applyReactionsDefault = (id) => {
    idshowHeart.value = id
    const messages = discussionsdefault.value[0].messages.find((message) => message.id === id)

    if (selectEmojies.value != '') {
      messages.reactions = selectEmojies.value
      console.log(messages.reactions)
      showHeart.value = false
    }
    selectEmojies.value = ''
  }

  const applyReactionsCanal = (id) => {
    idshowHeart.value = id
    const messages = discussionsCanal.value[0].messages.find((message) => message.id === id)

    if (selectEmojies.value != '') {
      messages.reactions = selectEmojies.value
      console.log(messages.reactions)
      showHeart.value = false
    }
    selectEmojies.value = ''
  }

  const discussionsCanal = ref([
    {
      date: "Aujourdh'hui",
      type: 'default',
      messages: [
        {
          id: 1,
          media: '',
          text: 'message de luser',
          time: '21:26',
          status: 'user',
          fileType: '', // Ajoutez ces informations
          fileName: '', // dans chaque message
          filesize: '',
          reactions: '',
        },
      ],
    },
  ])

  const showopenSideBarChat = () => {
    openSideBarChat.value = !openSideBarChat.value
  }

  // Actions
  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      fileType.value = file.type
      fileName.value = file.name
      filesize.value = parseInt(file.size / 1024)

      const reader = new FileReader()
      reader.onloadend = () => {
        selectUrl.value = reader.result
      }
      reader.readAsDataURL(file)
      toogleSendlytate.value = true
    }
    toogleFilestate.value = false
  }

  const toogleOpenEditCanal = () => {
    openEditCanal.value = !openEditCanal.value
  }

  const toogleNewCanal = () => {
    newCanal.value = !newCanal.value
  }

  const handleFileUploadProfil = (event) => {
    const file = event.target.files[0]

    if (file) {
      // Vérification du type de fichier
      if (!file.type.startsWith('image/')) {
        console.error('Le fichier doit être une image')
        return
      }

      const reader = new FileReader()
      reader.onloadend = () => {
        selectUrl.value = reader.result
      }
      reader.onerror = () => {
        console.error('Erreur lors de la lecture du fichier')
      }
      reader.readAsDataURL(file)
    }
  }

  const toogleOpenModal = () => {
    openModal.value = !openModal.value
  }

  const toogleSettings = () => {
    Settings.value = !Settings.value
  }
  const toogleshowSetting = () => {
    openModalSetting.value = !openModalSetting.value
    indexSideBar.value = 2
  }
  const toogleshowmodify = () => {
    showtooglemodify.value = !showtooglemodify.value
  }

  const toogleOpenModalSetting = () => {
    openModalSetting.value = !openModalSetting.value
  }

  const toogleOpenChat = (id, string) => {
    openChat.value = true
    idactivate.value = id
    disccussionType.value = string
  }

  const toogleOpenChatCanal = () => {
    handleaddNewUserCanal()

  }

  const toggleEmojiPicker = () => {
    showEmojiPicker.value = !showEmojiPicker.value
  }

  const onSelectEmoji = (emoji) => {
    inputText.value += emoji.i
    showEmojiPicker.value = false
  }

  const downloadFile = (fileUrl) => {
    const a = document.createElement('a')
    a.href = fileUrl
    a.download = fileName.value
    a.click()
  }
  const handleSubmit = () => {
    console.log('Type actuel:', disccussionType)
    if (disccussionType.value === 'default') {
      addMessagedefault()
    } else {
      addMessageCanal()
    }
  }
  const previewMedia = (media, filetype) => {
    preview.value = !preview.value
    selectUrl.value = media
    fileType.value = filetype
  }

  const toogleFile = () => {
    toogleFilestate.value = !toogleFilestate.value
  }

  const toogleSendly = () => {
    toogleSendlytate.value = !toogleSendlytate.value
  }

  const addMessagedefault = () => {
    const activeDiscussion = discussionsdefault.value[0]
    if (activeDiscussion && (inputText.value || selectUrl.value || inputTextMedia.value)) {
      activeDiscussion.messages.push({
        id: activeDiscussion.messages.length + 1,
        text: inputTextMedia.value || inputText.value || '',
        time: new Date().toLocaleTimeString('fr-FR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        status: 'user',
        media: selectUrl.value || '',
        fileType: fileType.value, // Ajoutez ces informations
        fileName: fileName.value, // dans chaque message
        filesize: filesize.value,
        reactions: '',
      })

      if (selectUrl.value) {
        toogleSendlytate.value = false
        toogleFilestate.value = false
        selectUrl.value = null
      }

      inputText.value = ''
      inputTextMedia.value = ''
    }
  }
  /**
   *
   */

  const addMessageCanal = () => {
    const activeDiscussion = discussionsCanal.value[0]
    if (activeDiscussion && (inputText.value || selectUrl.value || inputTextMedia.value)) {
      activeDiscussion.messages.push({
        id: activeDiscussion.messages.length + 1,
        text: inputTextMedia.value || inputText.value || '',
        time: new Date().toLocaleTimeString('fr-FR', {
          hour: '2-digit',
          minute: '2-digit',
        }),
        status: 'user',
        media: selectUrl.value || '',
        fileType: fileType.value, // Ajoutez ces informations
        fileName: fileName.value, // dans chaque message
        filesize: filesize.value,
        reactions: '',
      })

      console.log(discussionsCanal.value[0].messages[2])

      if (selectUrl.value) {
        toogleSendlytate.value = false
        toogleFilestate.value = false
      }

      inputText.value = ''
      inputTextMedia.value = ''
      selectUrl.value = null
    }
  }

  const activateNavigate = (id, string) => {
    disccussionType.value = string
    idChannel.value = id
    console.log(disccussionType.value)
    navigate.value = navigate.value.map((item) => ({
      ...item,
      active: item.id === id,
    }))
  }

  const idActiveOptions = ref(0)

  const activateOptions = (id) => {
    idActiveOptions.value = id
    console.log(idActiveOptions.value)
  }

  return {
    // État
    selectUrl,
    fileType,
    inputTextMedia,
    fileName,
    filesize,
    idactivate,
    navigate,
    showEmojiPicker,
    openChat,
    openModal,
    openModalSetting,
    toogleFilestate,
    preview,
    toogleSendlytate,
    inputText,
    users,
    discussionsCanal,
    discussionsdefault,
    Settings,
    showSetting,
    showtooglemodify,
    openEditCanal,
    newCanal,
    indexSideBar,
    disccussionType,
    optionsSiderbarChAt,
    idActiveOptions,
    openSideBarChat,
    openSideBarChatAppContact,
    showHeart,
    reactiveEmojies,
    idshowHeart,
    selectEmojies,
    idChannel,
    inputNameContact,
    inputNameCanal,
    NameActiveChannel,
    UrlActiveChannel,

    // Navigation

    gotoLoginPage,
    gotoSignInPage,
    gotoHome,
    gotoQr,

    // Actions
    handleaddNewUserCanal,
    handleaddNewUserdefault,
    handleFileUpload,
    applyReactionsDefault,
    applyReactionsCanal,
    toogleOpenModal,
    toogleOpenModalSetting,
    toogleOpenChat,
    toggleEmojiPicker,
    onSelectEmoji,
    downloadFile,
    previewMedia,
    toogleFile,
    toogleSendly,
    addMessagedefault,
    addMessageCanal,
    activateNavigate,
    handleFileUploadProfil,
    toogleSettings,
    toogleshowSetting,
    toogleshowmodify,
    toogleOpenEditCanal,
    toogleNewCanal,
    handleSubmit,
    toogleOpenChatCanal,
    activateOptions,
    showopenSideBarChat,
  }
})
