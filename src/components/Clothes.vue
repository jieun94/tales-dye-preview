<template>
  <v-item-group v-model="cloth">
    <v-row>
      <v-col cols="auto" v-for="item in items">
        <v-item :value="item.value" #default="{isSelected, toggle}">
          <v-btn :color="isSelected ? 'primary' : ''" variant="tonal" rounded="xl" :text="item.text" @click="toggle" :ripple="false">
            <template #prepend>
              <v-expand-x-transition>
                <v-icon v-if="isSelected">mdi-check</v-icon>
              </v-expand-x-transition>
            </template>
          </v-btn>
        </v-item>
      </v-col>
    </v-row>
  </v-item-group>
</template>

<script setup lang="ts">
import {Ref, ref, watch} from "vue";
import {useAppStore} from "@/store/app";
import {storeToRefs} from "pinia";

const store = useAppStore()
const {character} = storeToRefs(store)
const cloth:Ref<string> = ref('')
const items:Array<Object> = [
  {text: '기본', value: 'default'},
  {text: '제복', value: 'uniform'},
  {text: '한복', value: 'hanbok'},
]

watch(()=> character.value, () => {
  cloth.value = ''
})
watch(() => cloth.value, (newVal) => {
  store.setCloth(newVal)
})
</script>

<style scoped>

</style>
