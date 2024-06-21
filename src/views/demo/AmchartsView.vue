<template>
  <h2 class="my-4">amcharts 圖表範例：</h2>
  <div class="hello" ref="chartRef"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as am5 from '@amcharts/amcharts5'
import * as am5xy from '@amcharts/amcharts5/xy'
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated'

const chartRef = ref<HTMLElement | null>(null)

const charts: {
  [key: string]: any
} = {}

onMounted(() => {
  if (!chartRef.value) return
  const id = chartRef.value.id
  if (charts[id]) charts[id].dispose()
  const root = am5.Root.new(chartRef.value)
  root?._logo?.dispose()
  root.setThemes([am5themes_Animated.new(root)])

  const chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panY: false,
      layout: root.verticalLayout
    })
  )

  // Define data
  const data = [
    { category: 'Research', value1: 1000, value2: 588 },
    { category: 'Marketing', value1: 1200, value2: 1800 },
    { category: 'Sales', value1: 850, value2: 1230 }
  ]

  // Create Y-axis
  const yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {})
    })
  )

  // Create X-Axis
  const xAxis = chart.xAxes.push(
    am5xy.CategoryAxis.new(root, {
      renderer: am5xy.AxisRendererX.new(root, {}),
      categoryField: 'category'
    })
  )
  xAxis.data.setAll(data)

  // Create series
  const series1 = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: 'Series 1',
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: 'value1',
      categoryXField: 'category'
    })
  )
  series1.data.setAll(data)

  const series2 = chart.series.push(
    am5xy.ColumnSeries.new(root, {
      name: 'Series 2',
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: 'value2',
      categoryXField: 'category'
    })
  )
  series2.data.setAll(data)

  // Add legend
  const legend = chart.children.push(am5.Legend.new(root, {}))
  legend.data.setAll(chart.series.values)

  // Add cursor
  chart.set('cursor', am5xy.XYCursor.new(root, {}))
  chart.appear(1000)
  charts[id] = root
})
</script>

<style scoped lang="scss">
.hello {
  width: 100%;
  height: 500px;
}
</style>
