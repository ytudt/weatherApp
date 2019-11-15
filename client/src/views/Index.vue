<template>
  <div class="home">
    <input type="text" v-model="cityName">
    <button @click="onSearch()">查询</button>
    <div class="wether-data" v-if="wetherData">
      <div>城市: {{wetherData.city[0]}}</div>
      <!-- <div>城市: {{wetherData.forecast[0]}}</div> -->

      <!-- <div>城市: {{wetherData.sunrise_1[0]}}</div>
      <div>城市: {{wetherData.sunrise_2[0]}}</div>
      <div>城市: {{wetherData.sunset_1[0]}}</div>
      <div>城市: {{wetherData.sunset_2[0]}}</div> -->
      <div>温度: {{wetherData.wendu[0]}}</div>
      <div>湿度: {{wetherData.shidu[0]}}</div>
      <div>风力: {{wetherData.fengli[0]}}</div>
      <div>风向: {{wetherData.fengxiang[0]}}</div>
      <div>更新时间: {{wetherData.updatetime[0]}}</div>
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
      wetherData: null
    }
  },
  created () {
    this.onSearch()
  },
  methods: {
    onSearch () {
      if (!this.cityName) return
      api.wether.getWetherByCity(this.cityName)
        .then((res) => {
          // console.log(res.data.resp)
          this.wetherData = res.data.resp
        }).catch((e) => {
          // console.log(e)
        })
    }
  }
}
</script>

<style lang="css">
.home{
  height: 100%;
  padding-top: 50px;
  background-color: #39f;
}
</style>
