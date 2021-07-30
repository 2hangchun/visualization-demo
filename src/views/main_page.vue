<template>
  <div class="main_page">
    <div class="container" :style="{width: '1920px', height: '1080px', display: 'flex', flexDirection: 'column'}">
      <div class="container__top" :style="{height: '78px', width: '1920px', display: 'flex', justifyContent: 'center'}">
        <div :style="{width: '500px', height: '36px', fontSize: '36px', fontWeight: '600', lineHeight: '36px', color: '#fff', textAlign: 'center', marginTop: '23px', letterSpacing: '1'}">
          园区经济资源可视化
        </div>
      </div>
      <div class="container__bottom" :style="{width: '1820px', height: '868px', margin: '63px 0 0 50px', display: 'flex', flexWrap: 'wrap', alignContent: 'space-between'}">
        <div class="container__bottom__left-top" :style="{width: '764px', height: '414px', display: 'flex', flexDirection: 'column'}">
          <div class="container__bottom__left-top__top" :style="{width: '720px', height: '30px', margin: '32px 0 0 22px'}">
            <div :style="{fontSize: '18px', color: '#0071fe', fontWeight: '500', letterSpacing: '0.5', margin: '1px 0 0 4px'}">
              经济指标
            </div>
          </div>
          <div class="container__bottom__left-top__bottom" :style="{width: '713px', height: '247px', margin: '50px 0 0 23px', border: '1px solid yellow', display: 'flex', justifyContent: 'space-between'}">
            <div class="container__bottom__left-top__bottom__left" :style="{width: '282px', height: '207px', border: '1px solid red', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}">
              <div class="container__bottom__left-top__bottom__left__first" :style="{width: '282px', height: '70px', border: '1px solid green', display: 'flex', justifyContent: 'space-between'}">
                <div class="container__bottom__left-top__bottom__left__first__left" :style="{width: '66px', height: '66px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '4px', borderRadius: '50%', backgroundColor: '#19284b'}">
                  <img :style="{width: '30px', height: '30px'}" src="../../public/demo/image/Icon-Currency.svg" alt="pic" />
                </div>
                <div class="container__bottom__left-top__bottom__left__first__right" :style="{width: '200px', height: '70px', border: '1px solid green'}">
                  图标
                </div>
              </div>
              <div class="container__bottom__left-top__bottom__left__second" :style="{width: '282px', height: '70px', border: '1px solid green', display: 'flex', justifyContent: 'space-between'}">
                <div class="container__bottom__left-top__bottom__left__second__left" :style="{width: '66px', height: '66px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '4px', borderRadius: '50%', backgroundColor: '#19284b'}">
                  <img :style="{width: '30px', height: '30px'}" src="../../public/demo/image/Icon-Money.svg" alt="pic" />
                </div>
                <div class="container__bottom__left-top__bottom__left__second__right" :style="{width: '200px', height: '70px', border: '1px solid green'}">
                  图标
                </div>
              </div>
            </div>
            <div class="container__bottom__left-top__bottom__right" :style="{width: '398px', height: '247px', border: '1px solid red'}" />
          </div>
        </div>
        <div class="container__bottom__right-top" :style="{width: '1018px', height: '414px', marginLeft: '34px', display: 'flex', flexDirection: 'column'}">
          <div class="container__bottom__right-top__top" :style="{width: '976px', height: '30px', margin: '32px 0 0 22px'}">
            <div :style="{fontSize: '18px', color: '#0071fe', fontWeight: '500', letterSpacing: '0.5', margin: '1px 0 0 4px'}">
              科技成果
            </div>
          </div>
          <div class="container__bottom__right-top__bottom" :style="{width: '991px', height: '308px', border: '1px solid yellow', margin: '21px 0 0 23px', display: 'flex'}">
            <div class="container__bottom__right-top__bottom__first" :style="{width: '240px', height: '308px', border: '1px solid red', display: 'flex', flexDirection: 'column'}">
              <div class="container__bottom__right-top__bottom__first__first" :style="{height: '75px', width: '222px', border: '1px solid green', marginTop: '25px', display: 'flex', justifyContent: 'space-between'}">
                <div class="container__bottom__right-top__bottom__first__first__left" :style="{width: '66px', height: '66px', marginTop: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#19284b'}">
                  <img :style="{width: '30px', height: '30px'}" src="../../public/demo/image/Icon-Currency.svg" alt="pic" />
                </div>
                <div class="container__bottom__right-top__bottom__first__first__right" :style="{width: '140px', height: '75px', border: '1px solid red'}" />
              </div>
              <div class="container__bottom__right-top__bottom__first__second" :style="{height: '46px', width: '192px', border: '1px solid green', marginTop: '29px', marginLeft: '15px', display: 'flex', justifyContent: 'space-between'}">
                <div class="container__bottom__right-top__bottom__first__second__left" :style="{width: '36px', height: '36px', marginTop: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#19284b'}">
                  <img :style="{width: '14px', height: '14px'}" src="../../public/demo/image/Icon-Book.svg" alt="pic" />
                </div>
                <div class="container__bottom__right-top__bottom__first__second__right" :style="{width: '140px', height: '46px', border: '1px solid red'}" />
              </div>
              <div class="container__bottom__right-top__bottom__first__third" :style="{height: '46px', width: '192px', border: '1px solid green', marginTop: '16px', marginLeft: '15px', display: 'flex', justifyContent: 'space-between'}">
                <div class="container__bottom__right-top__bottom__first__third__left" :style="{width: '36px', height: '36px', marginTop: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#19284b'}">
                  <img :style="{width: '14px', height: '14px'}" src="../../public/demo/image/Icon-Application.svg" alt="pic" />
                </div>
                <div class="container__bottom__right-top__bottom__first__third__right" :style="{width: '140px', height: '46px', border: '1px solid red'}" />
              </div>
              <div class="container__bottom__right-top__bottom__first__forth" :style="{height: '46px', width: '192px', border: '1px solid green', marginTop: '16px', marginLeft: '15px', display: 'flex', justifyContent: 'space-between'}">
                <div class="container__bottom__right-top__bottom__first__forth__left" :style="{width: '36px', height: '36px', marginTop: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#19284b'}">
                  <img :style="{width: '14px', height: '14px'}" src="../../public/demo/image/Icon-Rocket.svg" alt="pic" />
                </div>
                <div class="container__bottom__right-top__bottom__first__forth__right" :style="{width: '140px', height: '46px', border: '1px solid red'}" />
              </div>
            </div>
            <div class="container__bottom__right-top__bottom__second" :style="{width: '358px', height: '308px', border: '1px solid red'}" />
            <div class="container__bottom__right-top__bottom__third" :style="{width: '389px', height: '308px', border: '1px solid red'}" />
          </div>
        </div>
        <div class="container__bottom__left-bottom" :style="{width: '1018px', height: '414px', display: 'flex', flexDirection: 'column'}">
          <div class="container__bottom__left-bottom__top" :style="{width: '976px', height: '30px', margin: '32px 0 0 22px'}">
            <div :style="{fontSize: '18px', color: '#0071fe', fontWeight: '500', letterSpacing: '0.5', margin: '1px 0 0 4px'}">
              项目申报
            </div>
          </div>
          <div class="container__bottom__left-bottom__bottom" :style="{width: '958px', height: '274px', border: '1px solid yellow', margin: '52px 0 0 30px', display: 'flex'}">
            <div class="container__bottom__left-bottom__bottom__left" :style="{width: '261px', height: '218px', marginTop: '5px', border: '1px solid red'}">
              <div class="container__bottom__left-bottom__bottom__left__top" :style="{width: '221px', height: '75px', border: '1px solid white', display: 'flex', justifyContent: 'space-between'}">
                <div :style="{width: '66px', height: '66px', marginTop: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#19284b'}">
                  <img :style="{width: '30px', height: '30px'}" src="../../public/demo/image/Icon-Project02.svg" alt="pic" />
                </div>
                <div :style="{width: '140px', height: '75px', border: '1px solid green'}" />
              </div>
              <div class="container__bottom__left-bottom__bottom__left__middle" :style="{width: '261px', height: '46px', border: '1px solid white', marginTop: '34px', display: 'flex', justifyContent: 'space-between'}">
                <div class="container__bottom__left-bottom__bottom__left__middle__left" :style="{width: '143px', height: '46px', display: 'flex', justifyContent: 'space-between', border: '1px solid yellow'}">
                  <div class="container__bottom__left-bottom__bottom__left__middle__left__left" :style="{width: '36px', height: '36px', marginTop: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#19284b'}">
                    <img :style="{width: '14px', height: '14px'}" src="../../public/demo/image/Icon-Project.svg" alt="pic" />
                  </div>
                  <div class="container__bottom__left-bottom__bottom__left__middle__left__right" :style="{width: '100px', height: '46px', border: '1px solid red'}" />
                </div>
                <div class="container__bottom__left-bottom__bottom__left__middle__right" :style="{width: '112px', height: '46px', display: 'flex', justifyContent: 'space-between', border: '1px solid yellow'}">
                  <div class="container__bottom__left-bottom__bottom__left__middle__right__left" :style="{width: '36px', height: '36px', marginTop: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#19284b'}">
                    <img :style="{width: '14px', height: '14px'}" src="../../public/demo/image/Icon-Tech.svg" alt="pic" />
                  </div>
                  <div class="container__bottom__left-bottom__bottom__left__middle__right__right" :style="{width: '70px', height: '46px', border: '1px solid red'}" />
                </div>
              </div>
              <div class="container__bottom__left-bottom__bottom__left__bottom" :style="{width: '261px', height: '46px', border: '1px solid white', marginTop: '17px', display: 'flex', justifyContent: 'space-between'}">
                <div class="container__bottom__left-bottom__bottom__left__bottom__left" :style="{width: '143px', height: '46px', display: 'flex', justifyContent: 'space-between', border: '1px solid yellow'}">
                  <div class="container__bottom__left-bottom__bottom__left__bottom__left__left" :style="{width: '36px', height: '36px', marginTop: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#19284b'}">
                    <img :style="{width: '14px', height: '14px'}" src="../../public/demo/image/Icon-Sort.svg" alt="pic" />
                  </div>
                  <div class="container__bottom__left-bottom__bottom__left__bottom__left__right" :style="{width: '100px', height: '46px', border: '1px solid red'}" />
                </div>
                <div class="container__bottom__left-bottom__bottom__left__bottom__right" :style="{width: '112px', height: '46px', display: 'flex', justifyContent: 'space-between', border: '1px solid yellow'}">
                  <div class="container__bottom__left-bottom__bottom__left__bottom__right__left" :style="{width: '36px', height: '36px', marginTop: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%', backgroundColor: '#19284b'}">
                    <img :style="{width: '14px', height: '14px'}" src="../../public/demo/image/Icon-Sapling.svg" alt="pic" />
                  </div>
                  <div class="container__bottom__left-bottom__bottom__left__bottom__right__right" :style="{width: '70px', height: '46px', border: '1px solid red'}" />
                </div>
              </div>
            </div>
            <div class="container__bottom__left-bottom__bottom__middle" :style="{width: '230px', height: '222px', marginTop: '2px', marginLeft: '40px', border: '1px solid red'}">
              <div class="container__bottom__left-bottom__bottom__middle__top" :style="{width: '230px', height: '206px', border: '1px solid white'}" />
              <div class="container__bottom__left-bottom__bottom__middle__bottom" :style="{width: '230px', height: '16px', color: '#fff', fontSize: '16px', fontWeight: '400', textAlign: 'center'}">
                年度申报成功率
              </div>
            </div>
            <div class="container__bottom__left-bottom__bottom__right" :style="{width: '372px', height: '274px', marginLeft: '55px', border: '1px solid red'}" />
          </div>
        </div>
        <div class="container__bottom__right-bottom" :style="{width: '764px', height: '414px', marginLeft: '34px', display: 'flex', flexDirection: 'column'}">
          <div class="container__bottom__right-bottom__top" :style="{width: '722px', height: '30px', margin: '32px 0 0 22px'}">
            <div :style="{fontSize: '18px', color: '#0071fe', fontWeight: '500', letterSpacing: '0.5', margin: '1px 0 0 4px'}">
              经济产出行业对比
            </div>
          </div>
          <div class="container__bottom__right-bottom__bottom" :style="{width: '670px', height: '340px', border: '1px solid yellow', margin: '7px 0 0 22px'}" />
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

<style>
 .container {
   background: url("../../public/demo/image/economic-bg.png");
 }
 .container__top {
   background: url("../../public/demo/image/economic-titile01.png")
 }
 .container__bottom__left-top{
   background: url("../../public/demo/image/economic-box-S.png")
 }
 .container__bottom__left-top__top{
   background: url("../../public/demo/image/economic-titile02.png")
 }
 .container__bottom__right-top{
   background: url("../../public/demo/image/economic-box-L.png")
 }
 .container__bottom__right-top__top{
   background: url("../../public/demo/image/economic-titile03.png")
 }
 .container__bottom__left-bottom{
   background: url("../../public/demo/image/economic-box-L.png")
 }
 .container__bottom__left-bottom__top{
   background: url("../../public/demo/image/economic-titile03.png")
 }
 .container__bottom__right-bottom{
   background: url("../../public/demo/image/economic-box-S.png")
 }
 .container__bottom__right-bottom__top{
   background: url("../../public/demo/image/economic-titile02.png")
 }
</style>