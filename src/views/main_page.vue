<template>
  <div class="main_page">
    <div :style="{fontSize: '100px', color: 'red', fontWeight: '400'}">
      hello world
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