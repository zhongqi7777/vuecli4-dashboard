<template>
    <div class="panel-content">
        <!-- <div style="width: 300px;height: 300px;background-color: #0E1824;" ref="chartContent">
        </div> -->

        <div style="width: 150px;height: 150px;" ref="chartContent">
        </div>
    </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    name: "TEMPLATE",
    data() {
      return {
        chartData:'71.23'
      }
    },
    mounted() {
      this.showChart();
    },
    methods:{
      showChart(){
          let chart = echarts.init(this.$refs.chartContent);
          var data = {
            value: this.chartData,
            company: "年度能耗",
            // ringColor: [{
            //   offset: 0,
            //   color: '#02d6fc' // 0% 处的颜色
            // }, {
            //   offset: 1,
            //   color: '#367bec' // 100% 处的颜色
            // }]

             ringColor: [{
              offset: 0,
              color: 'red' // 0% 处的颜色
            }, {
              offset: 1,
              color: '#367bec' // 100% 处的颜色
            }]
          }
          let option = {
            title: {
              text: data.value +'%\n'+ data.company,
              x: 'center',
              y: 'center',
              textStyle: {
                color: '#fff',
                fontSize: '18'
              }
            },
            color: ['#282c40'],
            legend: {
              show: false,
              data: []
            },

            series: [{
              name: 'Line 1',
              type: 'pie',
              clockWise: true,
              //radius: ['55', '65'],//设置圆环的半径
              radius: ['55', '65'],//设置圆环的半径
              itemStyle: {
                normal: {
                  label: {
                    show: false
                  },
                  labelLine: {
                    show: false
                  }
                }
              },
              hoverAnimation: false,
              data: [{
                value: data.value,
                name: '',
                itemStyle: {
                  normal: {
                    color: { // 完成的圆环的颜色
                      colorStops: data.ringColor
                    },
                    label: {
                      show: false
                    },
                    labelLine: {
                      show: false
                    }
                  }
                }
              }, {
                name: '',
                value: 100 - data.value
              }]
            }]
          };
          chart.clear();
          chart.setOption(option);

        },
    }


  }
</script>

<style scoped>

</style>