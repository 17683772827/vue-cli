<template>
<div class="testCss">ssss</div>
</template>

<script>
export default {
  name: 'testCss',
  props: [], //父子传参
  mixins: [], //混入
  components: {}, //组件注册
  watch: {}, //监听
  filters: {}, //过滤器
  computed: {}, //计算属性
  //方法
  methods: {},
  data () {
    return {}
  }, //数据
  //生命周期
  beforeCreate () {
  },
  created () {
  },
  beforeMount () {
  },
  //元素开始挂载
  mounted () {
  },
  //----------
  beforeUpdate () {
  },
  updated () {
  },
  beforeDestroy () {
  },
  destroyed () {
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/css/global.scss";
.testCss{
  font-size: px2rem(25)
}
</style>
