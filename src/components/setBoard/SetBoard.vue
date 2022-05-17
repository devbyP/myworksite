<template>
  <div class="set-board">
    <ShowConfig
      :windows="windows" 
      @toggle="toggleWindow"
      @close-all="toggleAll(false)"
      @open-all="toggleAll(true)"
      class="show-pos"
    />
    <div class="project-sec" v-show="windows[0].enable">
      
      project
    </div>
    <div class="budget-sec" v-show="windows[1].enable">
      budget
    </div>
    <div class="ideas-sec" v-show="windows[2].enable">
      ideas
    </div>
    <div class="voting-sec" v-show="windows[3].enable">
      voting
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import ShowConfig from "./shows/ShowConfig.vue";
import type { Window } from './type';
const windows = reactive<Window[]>([
  {
    name: "project section",
    enable: true
  },
  {
    name: "budget section",
    enable: true
  },
  {
    name: "ideas section",
    enable: true
  },
  {
    name: "voting section",
    enable: false
  }
])

function toggleWindow(wName: string, i: number) {
  const selectWindow = windows[i]
  if (selectWindow.name === wName) {
    selectWindow.enable = !selectWindow.enable
  }
}

function toggleAll(open: boolean) {
  for (let i = 0; i < windows.length; i++) {
    windows[i].enable = open
  }
}

</script>

<style scoped>
.set-board {
  display:grid;
  
}

.show-pos {
  position: absolute;
  top: 100px;
  left: 100px;
}
</style>