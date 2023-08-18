<template>
  <v-menu v-model="isPicker" :close-on-content-click="false">
    <template #activator="{props}">
      <v-row>
        <v-col cols="auto" style="min-width: 200px">
          <v-text-field v-model="color" density="compact" variant="outlined" :label="prop.label" v-bind="props" :hint="hexToRgb(color)" :persistent-hint="true">
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

const prop = defineProps({
  label: {
    type: String,
    required: true
  }
})

function hexToRgb(hex) {
  const result:RegExpExecArray = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? 'R: '+parseInt(result[1], 16)+'  G: '+parseInt(result[2], 16)+'  B: '+parseInt(result[3], 16): null;
}
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
