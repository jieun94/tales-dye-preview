<template>
  <v-item-group v-model="character">
    <v-row justify="center">
      <v-col cols="auto" v-for="(item, idx) in items" :key="idx">
        <v-item :value="item" #default="{isSelected, selectedClass, toggle}">
            <v-img width="48" height="48" :src="'/src/assets/images/character/'+item+'.png'" :class="isSelected ? undefined : 'img-gray'" @click="toggle"/>
        </v-item>
      </v-col>
    </v-row>
  </v-item-group>
</template>
<script setup lang="ts">
import {ref, watch} from "vue";
import {useAppStore} from "@/store/app";

const store = useAppStore()
const character = ref(undefined)
const items = ['lucian','boris','maximin','sivelin','josua','lanziee','issac','mila','tichiel']
watch(() => character.value, (newVal) => {
  store.setCharacter(newVal)
})
</script>
<style scoped>
.img-gray {
  filter: grayscale(100%);
}
</style>
