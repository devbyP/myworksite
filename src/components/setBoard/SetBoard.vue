<template>
  <div class="set-board">
    <div class="helper-tools">
      <WindowConfig
        v-show="store.configOpen"
        class="show-pos"
      />
    </div>
    <div class="top-section feed-sec">
      <StatusTab
        :title="feedSection.name"
        :is-open="feedSection.enable"
        class="tab"
      />
      <FeedWindow
        v-show="feedSection.enable"
        class="content"
      />
    </div>
    <div class="mid-section">
      <div class="column">
        <div class="section project-sec">
          <StatusTab
            :title="projectSection.name"
            :is-open="projectSection.enable"
            class="tab"
          />
          <ProjectWindow 
            v-show="projectSection.enable"
            class="content"
          />
        </div>
        <div class="section ideas-sec">
          <StatusTab
            :title="ideasSection.name"
            :is-open="ideasSection.enable"
            class="tab"
          />
          <IdeaWindow
            class="content"
            v-show="ideasSection.enable"
          />
        </div>
      </div>
      <div class="column">
        <div class="section budget-sec">
          <StatusTab
            :title="budgetSection.name"
            :is-open="budgetSection.enable"
            class="tab"
          />
          <BudgetWindow
            v-show="budgetSection.enable"
            class="content"
          />
        </div>
        <div class="section voting-sec">
          <StatusTab
            :title="votingSection.name"
            :is-open="votingSection.enable"
            class="tab"
          />
          <VotingWindow
            class="content"
            v-show="votingSection.enable"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import FeedWindow from "./windows/FeedWindow.vue"
import WindowConfig from "./windows/WindowConfig.vue";
import StatusTab from "./StatusTab.vue";
import ProjectWindow from "./windows/ProjectWindow.vue";
import BudgetWindow from "./windows/BudgetWindow.vue";
import IdeaWindow from "./windows/IdeaWindow.vue";
import VotingWindow from "./windows/VotingWindow.vue";
import { useSetBoardStore } from "@/stores/setBoard";

const store = useSetBoardStore();

const feedSection = store.feedSection
const projectSection = store.projectSection
const ideasSection = store.ideasSection
const budgetSection = store.budgetSection
const votingSection = store.votingSection

</script>

<style lang="scss" scoped>
$half-height: calc($board-height / 2);
.set-board {
  width: 100%;
  min-height: $board-height;
  display:flex;
  flex-direction: column;
  .section {
    border-style: solid;
    border-width: 1px 1px 0 1px;
    border-color: $color-border;
    overflow: auto;
    width: 100%;
  }
}
.content {
  height: $half-height;
  width: 100%;
}

.mid-section {
  display: flex;
}
.column {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.helper-tools {
  position: fixed;
  width: 100%;
  z-index: 100;
}
.show-pos {
  position: absolute;
  top: 100px;
  left: 100px;
}
</style>