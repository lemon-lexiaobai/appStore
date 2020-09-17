<template>
  <transition appear name="slide">
    <div class="app-category">
      <div class="title">{{name}}</div>
      <scroll class="app-list">
        <ul>
          <li v-for="item in list" :key="item.ID">
            {{item.name}}
          </li>
        </ul>
      </scroll>
    </div>
  </transition>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import { getAppList } from 'api/app'
import { mapGetters } from 'vuex'

export default {
  name: 'applist',
  data () {
    return {
      name: '',
      list: []
    }
  },
  created () {
    this._getAppList()
  },
  methods: {
    _getAppList () {
      if (!this.category.realTabId) {
        this.$router.push('/application')
        return
      }
      getAppList(this.category.realTabId).then(res => {
        this.name = res.name
        this.list = res.layoutData[0].dataList
        console.log(this.list)
      })
    }
  },
  components: {
    Scroll
  },
  computed: {
    ...mapGetters([
      'category'
    ])
  }
}
</script>

<style scoped rel="stylesheet/stylus" lang="stylus">
  @import "~common/stylus/variable"
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)

  .app-category
    position: fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 0
    right: 0
    background-color: $color-background
</style>
