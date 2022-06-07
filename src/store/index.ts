import { createStore } from 'vuex'

export interface State {
  bingoNumList: number[]
  displayNumList: number[]
  outputtedNumList: number[]
  index: number
  bingoNum: number
  isStart: boolean
  loadBingo: number
  splitCount: number
  splitNumList: number[]
}

export const store = createStore({
  state: {
    bingoNumList: new Array(75).fill(null).map((_, i) => i + 1), // [1 ~ 75]
    displayNumList: new Array(75).fill(null).map((_, i) => i + 1),
    outputtedNumList: [],
    index: 0,
    bingoNum: 0,
    isStart: true,
    loadBingo: 0,
    splitCount: 15,
    splitNumList: [],
  },
  getters: {
    // displayNumberListを15ずつの配列に分割する
    splitNumList(state) {
      for (
        let i = 0;
        i < Math.ceil(state.displayNumList.length / state.splitCount);
        i++
      ) {
        const multipleCount = i * state.splitCount
        const result = state.displayNumList.slice(
          multipleCount,
          multipleCount + state.splitCount
        )
        state.splitNumList.push(result)
      }
      return state.splitNumList
    },
    getOutputtedNumList(state) {
      if (localStorage.getItem('outputtedNumList')) {
        state.outputtedNumList = JSON.parse(
          localStorage.getItem('outputtedNumList')
        )
      }
      return state.outputtedNumList
    },
  },
  mutations: {
    start(state) {
      state.isStart = false

      state.loadBingo = setInterval(() => {
        state.index = Math.floor(Math.random() * state.bingoNumList.length)
        state.bingoNum = state.bingoNumList[state.index]
      }, 80)
    },
    stop(state) {
      state.isStart = true
      clearInterval(state.loadBingo)

      state.bingoNumList.splice(state.index, 1)
      state.outputtedNumList.push(state.bingoNum)
      localStorage.setItem(
        'outputtedNumList',
        JSON.stringify(state.outputtedNumList)
      )
    },
    reset(state) {
      localStorage.removeItem('outputtedNumList')
      state.outputtedNumList = []
    },
  },
  actions: {},
  modules: {},
})

export default store
