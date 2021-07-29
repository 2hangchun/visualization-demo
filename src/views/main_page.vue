<template>
  <div class="main_page">
    <div class="container" :style="{width: '1920px', height: '1080px'}">
      <div :style="{fontSize: '200px', color: 'blue'}">
        hello world
      </div>
      <div :style="{fontSize: '100px', color: 'green'}">
        hello js
      </div>
    </div>
  </div>
</template>

<script>
import BuiltInMixin from '../mixins/built_in'
import 'echarts'
import VChart from 'vue-echarts'
export const main_page = {
  mixins: [BuiltInMixin],

  components: {
    'v-chart':VChart
  },

  data () {
    return {
      craneStates: {
      },
    }
  },
}
export default main_page
</script>