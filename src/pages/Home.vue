<template>
  <p v-text="bingoNum" />
  <v-btn
    v-if="isStart"
    color="primary"
    @click="start"
  >
    START
  </v-btn>
  <v-btn
    v-else
    color="primary"
    @click="stop"
  >
    STOP
  </v-btn>
  <v-btn
    color="error"
    @click="reset"
  >
    RESET
  </v-btn>
  <div style="display: flex">
    <div
      v-for="outputtedNum in outputtedNumList"
      :key="outputtedNum"
      style="margin-right: 10px"
    >
      {{ outputtedNum }}
    </div>
  </div>
  <v-row
    v-for="numList in splitNumList"
    :key="numList"
    class="text-center"
    justify="center"
  >
    <v-col
      v-for="num in numList"
      :key="num"
    >
      <v-chip
        v-if="outputtedNumList.includes(num)"
        color="red"
      >
        {{
          num
        }}
      </v-chip>
      <v-chip v-else>
        {{ num }}
      </v-chip>
    </v-col>
  </v-row>
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
