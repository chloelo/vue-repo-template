<template>
  <div class="my-4">
    <h2 class="mb-2 text-lg font-bold">dayjs 範例：</h2>
    <p>當前日期 以 dash (-) 當分隔：{{ formattedDate }}</p>
    <hr class="h-4 mt-4" />
    <p>當前日期 以 slash (/) 當分隔：{{ dayjs().format('YYYY/MM/DD') }}</p>
    <hr class="h-4 mt-4" />
    <h2 class="mb-2 text-lg font-bold">lodash-es 範例：</h2>
    <p>原陣列：{{ originalArray }}</p>
    <p>將陣列中重複出現內容移除：{{ uniqueArray }}</p>
    <hr class="h-4 mt-4" />
    <h2 class="mb-2 text-lg font-bold">Vue-datepicker-next 範例：</h2>
    <div class="flex gap-2">
      <date-picker v-model:value="timeType.time0" placeholder="選擇日期"></date-picker>
      <date-picker
        v-model:value="timeType.time1"
        type="datetime"
        placeholder="選擇日期與時間"
      ></date-picker>
      <date-picker v-model:value="timeType.time2" range placeholder="選擇一個範圍"></date-picker>
    </div>
  </div>
  <hr class="h-4 mt-4" />
  <h2 class="mb-2 text-lg font-bold">vueuse 範例：</h2>
  <div class="my-4">計算滑鼠座標 (x 軸, y 軸)： {{ x }}, {{ y }}</div>
  <div class="flex items-center gap-2 mb-4">
    <p>
      Counter:<span class="inline-block bg-green-50 text-green-700 px-4 py-2 ml-4">
        {{ count }}</span
      >
    </p>
    <button
      type="button"
      class="bg-transparent text-green-600 text-2xl font-bold"
      @click.prevent="() => inc()"
    >
      +
    </button>
    <button
      type="button"
      class="bg-transparent text-green-600 text-2xl font-bold"
      @click.prevent="() => dec()"
    >
      -
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'
import { uniq } from 'lodash-es'
import DatePicker from 'vue-datepicker-next'
import 'vue-datepicker-next/index.css'
import { useCounter, useMouse } from '@vueuse/core'

// dayjs 範例
const formattedDate = ref('')

// Vue-datepicker-next 範例
const timeType = ref({
  time0: null,
  time1: null,
  time2: null
})

// Lodash 範例
const originalArray = ref([1, 2, 2, 3, 4, 4, 5])
const uniqueArray = ref(uniq(originalArray.value))
onMounted(() => {
  formattedDate.value = dayjs().format('YYYY-MM-DD')
})

// tracks mouse position
const { x, y } = useMouse()
const { count, inc, dec } = useCounter()
</script>
