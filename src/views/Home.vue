<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height justify-center">
      <v-sheet width="900" class="mx-auto">
        <v-card-text>
          <Characters/>
          <v-expand-transition>
            <Clothes v-if="isCharacter"/>
          </v-expand-transition>
          <v-expand-transition>
          <v-row v-if="isCharacter && isCloth">
            <!-- 캐릭터 -->
            <v-col>
              <v-img src="@/assets/images/side.png"/>
            </v-col>
            <!-- 염색 부위 -->
            <v-col>
              <ColorPicker label="머리"/>
              <ColorPicker label="치마"/>
              <ColorPicker label="저고리"/>
            </v-col>
          </v-row>
          </v-expand-transition>
        </v-card-text>
      </v-sheet>
    </v-responsive>
  </v-container>
</template>

<script lang="ts" setup>
  import Characters from "@/components/Characters.vue";
  import Clothes from "@/components/Clothes.vue";
  import {useAppStore} from "@/store/app";
  import {ref, Ref, watch} from "vue";
  import {storeToRefs} from "pinia";
  import ColorPicker from "@/components/ColorPicker.vue";

  const store = useAppStore()
  const {character, cloth} = storeToRefs(store)

  const isCharacter:Ref<boolean> = ref(false)
  watch(() => character.value, (newVal) => {
    isCharacter.value = !!newVal
  })

  const isCloth:Ref<boolean> = ref(false)
  watch(() => cloth.value, (newVal) => {
    isCloth.value = !!newVal
  })
</script>
