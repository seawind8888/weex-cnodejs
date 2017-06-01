<template>
  <div class="wrapper">
    <list class="list" @loadmore="fetchData" loadmoreoffset="50">
      <refresh @refresh="fetchData" :display="refreshing ? 'show' : 'hide'">
        <text class="refresh-info">正在加载 ...</text>
      </refresh>
      <cell class="list-single-cell" v-for="item in listInfo">
        <text class="cell-content">{{item.title}}</text>
        <div class="cell-info-container">
          <text class="author-info">{{item.author.loginname}}</text>
          <div class="cell-block">
            <text class="cell-block-info">{{ item.create_at | getLastTimeStr(true) }}</text>
          </div>
        </div>
      </cell>
    </list>
  </div>
</template>

<style scoped>
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
}
.author-info {
  color: rgb(156, 156, 156)
}
.cell-block {
  flex:1;
  display: flex;
  align-items: flex-end;
}
.cell-block-info {
  color: rgb(191, 191, 191)
}
</style>

<script>
const stream = weex.requireModule('stream')
export default {
  data() {
    return {
      urlParam: {
        page: 1,
        limit: 20,
        tab: 'all',
        render: true
      },
      refreshing: false,
      listInfo: ''
    }
  },
  mounted () {
    this.fetchData()
    console.log(new Date())
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
            self.listInfo = response.data.data
          }
          else {
            reject(response)
          }
        })
      })
    }
  }
}

</script>