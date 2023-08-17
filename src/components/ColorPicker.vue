<template>
  <v-menu v-model="isPicker" :close-on-content-click="false">
    <template #activator="{props}">
      <v-row>
        <v-col cols="auto" style="min-width: 200px">
          <v-text-field v-model="color" density="compact" variant="outlined" v-bind="props" hide-details>
            <template #append-inner>
              <v-sheet v-bind="props" width="30" height="30" rounded="circle" :color="color"/>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
    </template>
    <v-color-picker v-model="color" class="scroll mt-2" mode="rgb"/>
  </v-menu>
</template>

<script setup lang="ts">
import {ref, Ref} from "vue";

let isPicker:Ref<boolean> = ref(false)
const color:Ref<string> = ref('#000000')

</script>

<style scoped>
/* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
.scroll::-webkit-scrollbar {
  display: none;
}

.scroll {
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
}

</style>
