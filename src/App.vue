<template>
<router-view/>
</template>

<script>
// size from SiteConfig
// const [WIDTH, HEIGHT] = [2688, 1440]

export default {
  // created () {
  //   this.initScale()
  // },

  // methods: {
  //   initScale () {
  //     this.bindSizeChange()
  //     this.setScale()
  //   },
  //
  //   bindSizeChange () {
  //     window.addEventListener('resize', () => {
  //       this.setScale()
  //     })
  //   },
  //
  //   setScale () {
  //     const { clientWidth, clientHeight } = document.documentElement,
  //           body_style = document.body.style,
  //           scaleW = clientWidth / WIDTH,
  //           real_height = scaleW * HEIGHT;
  //
  //     body_style.width = `${WIDTH}px`
  //     body_style.height = `${HEIGHT}px`
  //     body_style.transform = `scale(${scaleW})`
  //     // 实际内容超出 y 屏幕，则顶部对齐，否则居中对齐
  //     if (real_height > clientHeight) {
  //       body_style.transformOrigin = 'top'
  //       body_style.alignSelf = 'start'
  //     } else {
  //       body_style.transformOrigin = 'center'
  //       body_style.alignSelf = 'center'
  //     }
  //   },
  // },
}
</script>

<style>
*{
  padding:0;
  margin:0;
  box-sizing: border-box;
}
body {
  width:1920px;
  height:1080px;
  transform: scale(1, 1);
  /*position: absolute;*/
  overflow: hidden;
}
html {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: visible;
  height: 100%;
}
</style>
