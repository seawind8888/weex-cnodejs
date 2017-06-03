<template>
  <div class="wrapper">
    <div v-if="isSlide" class="slide-list-container">
      <div class="slide-list-header">
        <image class="slide-logo" src="http://tz88.com.cn/imgs/logo.png"></image>
      </div>
      <div class="slide-list-main">
        <div class="slide-list-item">
          <text class="slide-list-info">最新</text>
        </div>
        <div class="slide-list-item">
          <text class="slide-list-info">招聘</text>
        </div>
        <div class="slide-list-item">
          <text class="slide-list-info">问答</text>
        </div>
        <div class="slide-list-item">
          <text class="slide-list-info">热门</text>
        </div>
      </div>
    </div>
    <div v-else  class="slide-list-container"></div>
    <div class="list-container" ref="containerDig">
      <CnodeHeader @pushEmit="pushList()" :titleInfo="'最新'"></CnodeHeader>
      <list class="list" @loadmore="fetchData" loadmoreoffset="50">
        <refresh @refresh="fetchData" :display="refreshing ? 'show' : 'hide'">
          <text class="refresh-info">正在加载 ...</text>
        </refresh>
        <cell @click="pushList()" class="list-single-cell" v-for="item in listInfo">
          <text class="cell-content">{{item.title}}</text>
          <div class="cell-info-container">
            <text class="author-info">{{item.author.loginname}}</text>
            <div class="cell-block">
              <text class="cell-block-info">{{ item.last_reply_at | getLastTimeStr(true) }}</text>
            </div>
          </div>
        </cell>
      </list>
      <div @click="pushBackList" v-if="isSlide" class="slide-back-block"></div>
    </div>
  </div>
</template>

<style scoped>
.list-container {
  display: flex;
  border-color: #000000;
  box-shadow: -2px 0 4px #888888;
  border-left-width: 1;
  border-color: rgb(37, 37, 37);
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

.list-single-cell {
  padding: 20;
  display: flex;
  justify-content: center;
  background-color: #fafafa;
  border-color: rgb(191, 191, 191);
  border-bottom-width: 1
}

.cell-content {
  lines: 1;
  font-size: 32;
  text-overflow: ellipsis
}

.cell-info-container {
  display: flex;
  flex-direction: row;
  margin-top: 10;
  font-size: 26;
}

.author-info {
  color: rgb(156, 156, 156)
}

.cell-block {
  flex: 1;
  display: flex;
  align-items: flex-end;
}

.cell-block-info {
  color: rgb(191, 191, 191)
}


.slide-back-block {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.slide-list-container {
  position: absolute;
  width: 500px;
  left: 0;
  top: 0;
  bottom: 0;
  box-shadow: 10
}

.slide-list-header {
  height: 100px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #343434;
}

.slide-logo {
  width: 292;
  height: 90;
}

.slide-list-item {
  height: 100px;
  display: flex;
  padding-left: 20;
  border-bottom-width: 1;
  border-color: #dddddd;
  justify-content: center;
}

.slide-list-info {
  font-size: 30px;
}
</style>

<script>
import utils from '../common/utils.js'
import CnodeHeader from '../components/cnodeHeader.vue'
const stream = weex.requireModule('stream')
const animation = weex.requireModule('animation')
export default {
  data() {
    return {
      urlParam: {
        page: 1,
        limit: 20,
        type: 'all',
        render: true
      },
      isReady: false,
      isSlide: false,
      refreshing: false,
      listInfo: ''
    }
  },
  components: {
    CnodeHeader
  },
  mounted() {
    // this.fetchData()
    this.$store.dispatch('FETCH_LIST_DATA', this.urlParam)
  },
  filters: {
    getLastTimeStr(time, isFromNow) {
      return utils.getLastTimeStr(time, isFromNow);
    }
  },
  methods: {
    fetchData() {
      var self = this
      self.refreshing = true
      return new Promise((resolve, reject) => {
        stream.fetch({
          method: 'GET',
          url: 'https://cnodejs.org/api/v1/topics?page=1&limit=20&tab=job&mdrender=true',
          type: 'json'
        }, (response) => {
          self.refreshing = false
          if (response.status == 200) {
            resolve(response)
            self.isReady = true
            self.listInfo = response.data.data
          }
          else {
            reject(response)
          }
        })
      })
    },
    pushList() {
      var self = this
      var pushEl = self.$refs.containerDig
      self.isSlide = true
      animation.transition(pushEl, {
        styles: {
          transform: 'translateX(500px)'
        },
        duration: 200,
      }, () => {
        
      })
    },
    pushBackList() {
      var self = this
      var pushEl = self.$refs.containerDig
      animation.transition(pushEl, {
        styles: {
          transform: 'translateX(0)'
        },
        duration: 200,
      }, () => {
        self.isSlide = false
      })
    }
  }
}

</script>