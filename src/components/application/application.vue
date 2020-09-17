<template>
    <div class="application">
      <scroll class="list" :data="categories">
        <ul>
          <li v-for="category in categories" class="item" :key="category.realTabId" @click="selectItem(category)">
            <div class="icon">
              <img width="30" height="30" :src="category.tabIcon" />
            </div>
            <div class="text">{{category.tabName}}</div>
          </li>
        </ul>
      </scroll>
      <router-view></router-view>
    </div>
</template>

<script>
import { getAppCategory } from 'api/app'
import Scroll from 'base/scroll/scroll'
import { mapMutations } from 'vuex'

export default {
  name: 'application',
  data () {
    return {
      categories: []
    }
  },
  created () {
    this._getAppCtegory()
  },
  methods: {
    _getAppCtegory () {
      getAppCategory().then(res => {
        this.categories = res.tabInfo
      })
    },
    selectItem (category) {
      this.$router.push({
        path: `/application/${category.realTabId}`
      })
      this.setCategory(category)
    },
    ...mapMutations({
      setCategory: 'SET_CATEGORY'
    })
  },
  components: {
    Scroll
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~common/stylus/variable"
  .list
    position: fixed
    top: 44px
    bottom: 44px
    width: 100%
    overflow: hidden
    .item
      display: flex
      align-items: center
      padding: 20px 0 0 30px
      .icon
        width: 30px
        height: 30px
        border-radius: 50%
      .text
        margin-left: 20px
        color: $color-text
        font-size: $font-size-medium
</style>
