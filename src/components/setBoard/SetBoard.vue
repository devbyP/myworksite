<template>
  <div class="set-board">
    <WindowConfig
      :windows="windows" 
      @toggle="toggleWindow"
      @close-all="toggleAll(false)"
      @open-all="toggleAll(true)"
      class="show-pos"
    />
    <div class="section project-sec">
      <StatusTab
        :title="projectSection.name"
        :is-open="projectSection.enable"
        @toggle="toggleWindow(projectSection.name, 0)"
        class="tab"
      />
      <ProjectWindow v-show="projectSection.enable"/>
    </div>
    <div class="section budget-sec">
      <StatusTab
        :title="budgetSection.name"
        :is-open="budgetSection.enable"
        @toggle="toggleWindow(budgetSection.name, 1)"
        class="tab"
      />
      <BudgetWindow v-show="budgetSection.enable" />
    </div>
    <div class="section ideas-sec">
      <StatusTab
        :title="ideasSection.name"
        :is-open="ideasSection.enable"
        @toggle="toggleWindow(ideasSection.name, 2)"
        class="tab"
      />
      <IdeaWindow v-show="ideasSection.enable"/>
    </div>
    <div class="section voting-sec">
      <StatusTab
        :title="votingSection.name"
        :is-open="votingSection.enable"
        @toggle="toggleWindow(votingSection.name, 3)"
        class="tab"
      />
      <VotingWindow v-show="votingSection.enable"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import type { Window } from './type';
import WindowConfig from "./windows/WindowConfig.vue";
import StatusTab from "./StatusTab.vue";
import ProjectWindow from "./windows/ProjectWindow.vue";
import BudgetWindow from "./windows/BudgetWindow.vue";
import IdeaWindow from "./windows/IdeaWindow.vue";
import VotingWindow from "./windows/VotingWindow.vue";

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

const projectSection: Window = windows[0]
const budgetSection: Window = windows[1]
const ideasSection: Window = windows[2]
const votingSection: Window = windows[3]

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

<style lang="scss" scoped>
.set-board {
  width: calc(100% - 80px);
  height: $board-height;
  display:grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  .section {
    border-style: solid;
    border-width: 1px 1px 0 0;
    border-color: $color-border;
    max-height: calc($board-height / 2);
    overflow: auto;
  }
}
.show-pos {
  position: absolute;
  top: 100px;
  left: 100px;
}
</style>