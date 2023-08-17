// Utilities
import { defineStore } from 'pinia'
import {ref} from "vue";
import type {Ref} from 'vue'

export const useAppStore = defineStore('app', () => {
  let character: Ref<String> = ref('')
  const cloth: Ref<String> = ref('')

  function setCharacter(param) {
    character.value = param
  }
  function setCloth(param) {
    cloth.value = param
  }
  return {character, cloth, setCharacter, setCloth}
})
