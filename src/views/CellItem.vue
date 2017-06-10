<template>
  <div>
    <CnodeHeader @pushEmit="back"  :titleInfo="'详情'"></CnodeHeader>
    <scroller class="scroller" >
      <refresh @refresh="fetchData" :display="this.$store.state.isRefresh ? 'show' : 'hide'">
        <text class="refresh-info">正在加载 ...</text>
      </refresh>
      <text class="scroller-container">
    {{this.$store.state.itemInfo.content}}
      </text>
    </scroller>  
  </div>
</template>

<script>
import CnodeHeader from '../components/cnodeHeader.vue'

export default {
  components: {
    CnodeHeader
  },
  created () {
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    back () {
      this.$router.back()
    },
    fetchData () {
       this.$store.dispatch('FETCH_ITEM_DATA', this.$route.params.id)
    }
  }
}
</script>

<style>
.wrapper {
  flex:1
}
.refresh-info {
  width: 750px;
  color: #dddddd;
  margin-top: 10px;
  height: 40px;
  line-height: 40px;
  font-size: 30px;
  text-align: center;
}
.scroller-container {
  font-size: 28
}
</style>
