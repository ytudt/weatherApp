<template>
  <div class="home">
    <input type="text" v-model="cityName">
    <button @click="onSearch()">查询</button>
    <div class="wether-data" v-if="wetherData">
      <div>城市: {{wetherData.city[0]}}</div>
      <div>温度: {{wetherData.wendu[0]}}</div>
      <div>湿度: {{wetherData.shidu[0]}}</div>
      <div>风力: {{wetherData.fengli[0]}}</div>
      <div>风向: {{wetherData.fengxiang[0]}}</div>
      <div>更新时间: {{wetherData.updatetime[0]}}</div>
    </div>
    <div class="city-list"
         v-for="(item, index) in cityList"
         :key="index"
    >
      <span>{{item.title}}</span>
      <span v-for="(city, index) in item.lists"
         :key="index"
         @click="onCityClick(city)"
         >{{city}}
      </span>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

// import api form '../api/index.ts';
import api from '../api/index'

export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      cityName: '北京',
      wetherData: null,
      cityList: []
    }
  },
  created () {
    this.onSearch()
    this.getCityList()
  },
  methods: {
    onSearch () {
      if (!this.cityName) return
      api.wether.getWetherByCity(this.cityName)
        .then((res) => {
          this.wetherData = res.data.resp
        }).catch((e) => {})
    },
    onCityClick (cityName) {
      this.cityName = cityName
      this.onSearch()
    },
    getCityList () {
      api.city.getCityList(this.cityName)
        .then((res) => {
          this.cityList = res.data
        }).catch(() => {})
    }
  }
}
</script>

<style lang="css">
.home{
  height: 100%;
  padding-top: 50px;
  background-color: #39f;
  overflow: auto;
}
</style>
