<template>
  <div class="home-container">
    <div class="bingo-num-wrap">
      <div class="bingo-num">
        <h1 v-text="bingoNum" />
      </div>
    </div>
    <div class="bingo-btn-wrap">
      <v-btn
        v-if="isStart"
        class="bingo-btn start-btn"
        x-large
        @click="start"
      >
        START
      </v-btn>
      <v-btn
        v-else
        class="bingo-btn stop-btn"
        x-large
        @click="stop"
      >
        STOP
      </v-btn>
      <v-btn
        class="bingo-btn reset-btn"
        @click="reset"
      >
        RESET
      </v-btn>
    </div>
    <div class="num-list-wrap">
      <v-row
        v-for="numList in splitNumList"
        :key="numList"
        class="text-center"
      >
        <v-col
          v-for="num in numList"
          :key="num"
        >
          <v-chip
            v-if="outputtedNumList.includes(num)"
            class="active"
          >
            {{ num }}
          </v-chip>
          <v-chip v-else>
            {{ num }}
          </v-chip>
        </v-col>
      </v-row>
    </div>
    <div class="outputted-num-list-wrap">
      <div class="outputted-num-list">
        <span
          v-for="outputtedNum in outputtedNumList"
          :key="outputtedNum"
        >{{ outputtedNum }},
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Home',
  setup() {
    const store = useStore()
    return {
      // store
      bingoNum: computed(() => store.state.bingoNum),
      isStart: computed(() => store.state.isStart),

      // getters
      splitNumList: computed(() => store.getters.splitNumList),
      outputtedNumList: computed(() => store.getters.getOutputtedNumList),

      // mutation
      start: () => store.commit('start'),
      stop: () => store.commit('stop'),
      reset: () => store.commit('reset'),
    }
  },
}
</script>
