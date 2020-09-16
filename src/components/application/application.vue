<template>
    <p>application</p>
</template>

<script>
import { getAppCategory } from 'api/app'
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
        console.log(this.categories)
      })
    }
  }
}
</script>

<style scoped>

</style>
