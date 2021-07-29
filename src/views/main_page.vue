<template>
  <div class="main_page">
    <div class="container" :style="{width: '1920px', height: '1080px', backgroundColor: '#192342', display: 'flex', flexDirection: 'column'}">
      <div class="container__top" :style="{height: '78px', width: '1920px', border: '1px solid black', display: 'flex', justifyContent: 'center'}">
        <div :style="{width: '500px', height: '36px', fontSize: '36px', fontWeight: '600', color: '#fff', textAlign: 'center'}">
          园区经济资源可视化
        </div>
      </div>
      <div class="container__bottom" :style="{width: '1820px', height: '1010px', margin: '63px 0 0 50px', display: 'flex', flexWrap: 'wrap'}">
        <div class="container__bottom__left-top" :style="{width: '764px', height: '414px', border: '1px solid red', display: 'flex', flexDirection: 'column'}">
          <div class="container__bottom__left-top__top" :style="{width: '720px', height: '30px', border: '1px solid green', margin: '32px 0 0 22px'}">
            <div :style="{fontSize: '18px', color: '#0071fe', fontWeight: '500', letterSpacing: '0.5'}">
              xxx
            </div>
            <img src="" alt="pic" />
          </div>
          <div class="container__bottom__left-top__bottom" :style="{width: '713px', height: '247px', margin: '50px 0 0 23px', border: '1px solid yellow', display: 'flex', justifyContent: 'space-between'}">
            <div class="container__bottom__left-top__bottom__left" :style="{width: '282px', height: '207px', border: '1px solid red', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}">
              <div class="container__bottom__left-top__bottom__left__first" :style="{width: '282px', height: '70px', border: '1px solid green', display: 'flex', justifyContent: 'space-between'}">
                <div class="container__bottom__left-top__bottom__left__first__left" :style="{width: '66px', height: '66px', border: '1px solid green', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '4px'}">
                  icon
                </div>
                <div class="container__bottom__left-top__bottom__left__first__right" :style="{width: '200px', height: '70px', border: '1px solid green'}">
                  图标
                </div>
              </div>
              <div class="container__bottom__left-top__bottom__left__second" :style="{width: '282px', height: '70px', border: '1px solid green', display: 'flex', justifyContent: 'space-between'}">
                <div class="container__bottom__left-top__bottom__left__second__left" :style="{width: '66px', height: '66px', border: '1px solid green', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '4px'}">
                  icon
                </div>
                <div class="container__bottom__left-top__bottom__left__second__right" :style="{width: '200px', height: '70px', border: '1px solid green'}">
                  图标
                </div>
              </div>
            </div>
            <div class="container__bottom__left-top__bottom__right" :style="{width: '398px', height: '247px', border: '1px solid red'}" />
          </div>
        </div>
        <div class="container__bottom__right-top" :style="{width: '1018px', height: '414px', marginLeft: '34px', border: '1px solid red', display: 'flex', flexDirection: 'column'}">
          <div class="container__bottom__right-top__top" :style="{width: '976px', height: '30px', border: '1px solid green'}">
            <div :style="{fontSize: '18px', color: '#0071fe', fontWeight: '500', letterSpacing: '0.5'}">
              xxx
            </div>
            <img src="" alt="pic" />
          </div>
          <div class="container__bottom__right-top__bottom" :style="{width: '992px', height: '414px', border: '1px solid yellow'}" />
        </div>
        <div class="container__bottom__left-bottom" :style="{width: '1018px', height: '414px', marginTop: '-13px', border: '1px solid red', display: 'flex', flexDirection: 'column'}">
          <div class="container__bottom__left-bottom__top" :style="{width: '976px', height: '30px', border: '1px solid green'}">
            <div :style="{fontSize: '18px', color: '#0071fe', fontWeight: '500', letterSpacing: '0.5'}">
              xxx
            </div>
            <img src="" alt="pic" />
          </div>
          <div class="container__bottom__left-bottom__bottom" :style="{width: '966px', height: '414px', border: '1px solid yellow'}" />
        </div>
        <div class="container__bottom__right-bottom" :style="{width: '764px', height: '414px', marginLeft: '34px', marginTop: '-13px', border: '1px solid red', display: 'flex', flexDirection: 'column'}">
          <div class="container__bottom__right-bottom__top" :style="{width: '722px', height: '30px', border: '1px solid green'}">
            <div :style="{fontSize: '18px', color: '#0071fe', fontWeight: '500', letterSpacing: '0.5'}">
              xxx
            </div>
            <img src="" alt="pic" />
          </div>
          <div class="container__bottom__right-bottom__bottom" :style="{width: '760px', height: '340px', border: '1px solid yellow'}" />
        </div>
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