<template>
  <div class="panel-content">
    <!-- <div
      style="display:inline-block;width:100%;height:100%;"
      ref="chartContentPietest"
    ></div> -->

    <div
      style="display:inline-block;width:100vw;height:100vh;"
      ref="chartContentPietest"
    ></div>
  </div>
</template>

<script>
import echarts from "echarts";
import chinaData from "./geojson.json";
export default {
  props: ["barColor", "progress", "city"],
  name: "TEMPLATE",
  data() {
    return {
      chartData: "71.23",
      chart: "",
    };
  },
  mounted() {
    this.showChart();

    // window.addEventListener("resize", (ev) => {
    //   //   this.$dt.start({
    //   //     type: "debounce",
    //   //     immediate: true,
    //   //     time: 100,
    //   //     success: () => {
    //   //       this.chart.resize();
    //   //     },
    //   //   });

    //   this.chart.resize();
    // });
  },
  methods: {
    showChart() {
      console.log(" showChart() {");
      this.chart = echarts.init(this.$refs.chartContentPietest);

      var name_title = "name_title";
      var subname = "subname\n，\nsubname";
      var nameColor = " rgb(55, 75, 113)";
      var name_fontFamily = "等线";
      var subname_fontSize = 15;
      var name_fontSize = 18;
      var mapName = "china";
      var data = [
        { name: "北京", value: 177 },
        { name: "天津", value: 42 },
        { name: "河北", value: 102 },
        { name: "山西", value: 81 },
        { name: "内蒙古", value: 47 },
        { name: "辽宁", value: 67 },
        { name: "吉林", value: 82 },
        { name: "黑龙江", value: 66 },
        { name: "上海", value: 24 },
        { name: "江苏", value: 92 },
        { name: "浙江", value: 114 },
        { name: "安徽", value: 109 },
        { name: "福建", value: 116 },
        { name: "江西", value: 91 },
        { name: "山东", value: 119 },
        { name: "河南", value: 137 },
        { name: "湖北", value: 116 },
        { name: "湖南", value: 114 },
        { name: "重庆", value: 91 },
        { name: "四川", value: 125 },
        { name: "贵州", value: 62 },
        { name: "云南", value: 83 },
        { name: "西藏", value: 9 },
        { name: "陕西", value: 80 },
        { name: "甘肃", value: 56 },
        { name: "青海", value: 10 },
        { name: "宁夏", value: 18 },
        { name: "新疆", value: 67 },
        { name: "广东", value: 123 },
        { name: "广西", value: 59 },
        { name: "海南", value: 14 },
      ];

      var geoCoordMap = {};
      var toolTipData = [
        {
          name: "北京",
          value: [
            { name: "文科", value: 95 },
            { name: "理科", value: 82 },
          ],
        },
        {
          name: "天津",
          value: [
            { name: "文科", value: 22 },
            { name: "理科", value: 20 },
          ],
        },
        {
          name: "河北",
          value: [
            { name: "文科", value: 60 },
            { name: "理科", value: 42 },
          ],
        },
        {
          name: "山西",
          value: [
            { name: "文科", value: 40 },
            { name: "理科", value: 41 },
          ],
        },
        {
          name: "内蒙古",
          value: [
            { name: "文科", value: 23 },
            { name: "理科", value: 24 },
          ],
        },
        {
          name: "辽宁",
          value: [
            { name: "文科", value: 39 },
            { name: "理科", value: 28 },
          ],
        },
        {
          name: "吉林",
          value: [
            { name: "文科", value: 41 },
            { name: "理科", value: 41 },
          ],
        },
        {
          name: "黑龙江",
          value: [
            { name: "文科", value: 35 },
            { name: "理科", value: 31 },
          ],
        },
        {
          name: "上海",
          value: [
            { name: "文科", value: 12 },
            { name: "理科", value: 12 },
          ],
        },
        {
          name: "江苏",
          value: [
            { name: "文科", value: 47 },
            { name: "理科", value: 45 },
          ],
        },
        {
          name: "浙江",
          value: [
            { name: "文科", value: 57 },
            { name: "理科", value: 57 },
          ],
        },
        {
          name: "安徽",
          value: [
            { name: "文科", value: 57 },
            { name: "理科", value: 52 },
          ],
        },
        {
          name: "福建",
          value: [
            { name: "文科", value: 59 },
            { name: "理科", value: 57 },
          ],
        },
        {
          name: "江西",
          value: [
            { name: "文科", value: 49 },
            { name: "理科", value: 42 },
          ],
        },
        {
          name: "山东",
          value: [
            { name: "文科", value: 67 },
            { name: "理科", value: 52 },
          ],
        },
        {
          name: "河南",
          value: [
            { name: "文科", value: 69 },
            { name: "理科", value: 68 },
          ],
        },
        {
          name: "湖北",
          value: [
            { name: "文科", value: 60 },
            { name: "理科", value: 56 },
          ],
        },
        {
          name: "湖南",
          value: [
            { name: "文科", value: 62 },
            { name: "理科", value: 52 },
          ],
        },
        {
          name: "重庆",
          value: [
            { name: "文科", value: 47 },
            { name: "理科", value: 44 },
          ],
        },
        {
          name: "四川",
          value: [
            { name: "文科", value: 65 },
            { name: "理科", value: 60 },
          ],
        },
        {
          name: "贵州",
          value: [
            { name: "文科", value: 32 },
            { name: "理科", value: 30 },
          ],
        },
        {
          name: "云南",
          value: [
            { name: "文科", value: 42 },
            { name: "理科", value: 41 },
          ],
        },
        {
          name: "西藏",
          value: [
            { name: "文科", value: 5 },
            { name: "理科", value: 4 },
          ],
        },
        {
          name: "陕西",
          value: [
            { name: "文科", value: 38 },
            { name: "理科", value: 42 },
          ],
        },
        {
          name: "甘肃",
          value: [
            { name: "文科", value: 28 },
            { name: "理科", value: 28 },
          ],
        },
        {
          name: "青海",
          value: [
            { name: "文科", value: 5 },
            { name: "理科", value: 5 },
          ],
        },
        {
          name: "宁夏",
          value: [
            { name: "文科", value: 10 },
            { name: "理科", value: 8 },
          ],
        },
        {
          name: "新疆",
          value: [
            { name: "文科", value: 36 },
            { name: "理科", value: 31 },
          ],
        },
        {
          name: "广东",
          value: [
            { name: "文科", value: 63 },
            { name: "理科", value: 60 },
          ],
        },
        {
          name: "广西",
          value: [
            { name: "文科", value: 29 },
            { name: "理科", value: 30 },
          ],
        },
        {
          name: "海南",
          value: [
            { name: "文科", value: 8 },
            { name: "理科", value: 6 },
          ],
        },
      ];

      /*获取地图数据*/
      //this.chart.showLoading();
      let geoJSON = this.prepareChartMap("china");
      geoJSON.features.forEach((v) => {
        const name = v.properties.name;
        geoCoordMap[name] = v.properties.cp;
      });
      //this.chart.hideLoading();
      // console.log("============geoCoordMap===================")
      // console.log(geoCoordMap)
      // console.log("================data======================")
      console.log(data);
      console.log(toolTipData);
      var max = 480,
        min = 9; // todo
      var maxSize4Pin = 100,
        minSize4Pin = 20;

      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
            });
          }
        }
        return res;
      };
      var convertData1 = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            geoCoord[0] = +geoCoord[0] + 0.2 + "";
            geoCoord[1] = +geoCoord[1] + 0.1 + "";
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
            });
          }
        }
        return res;
      };
      var option = {
        title: {
          text: name_title,
          subtext: subname,
          x: "center",
          textStyle: {
            color: nameColor,
            fontFamily: name_fontFamily,
            fontSize: name_fontSize,
          },
          subtextStyle: {
            fontSize: subname_fontSize,
            fontFamily: name_fontFamily,
          },
        },
        tooltip: {
          trigger: "item",
          formatter: function(params) {
            if (typeof params.value[2] == "undefined") {
              console.log(toolTiphtml);
              // console.log(convertData(data))
              return toolTiphtml;
            } else {
              a();
              var toolTiphtml = "";

              console.log(toolTiphtml, 8888);
              // console.log(convertData(data))
              return toolTiphtml;
            }
          },
        },
        // legend: {
        //     orient: 'vertical',
        //     y: 'bottom',
        //     x: 'right',
        //     data: ['credit_pm2.5'],
        //     textStyle: {
        //         color: '#fff'
        //     }
        // },
        visualMap: {
          show: true,
          min: 0,
          max: 200,
          left: "left",
          top: "bottom",
          text: ["高", "低"], // 文本，默认为数值文本
          calculable: true,
          seriesIndex: [1],
          inRange: {
            // color: ['#3B5077', '#031525'] // 蓝黑
            // color: ['#ffc0cb', '#800080'] // 红紫
            // color: ['#3C3B3F', '#605C3C'] // 黑绿
            // color: ['#0f0c29', '#302b63', '#24243e'] // 黑紫黑
            // color: ['#23074d', '#cc5333'] // 紫红
            color: ["#00467F", "#A5CC82"], // 蓝绿
            // color: ['#1488CC', '#2B32B2'] // 浅蓝
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
            // color: ['#00467F', '#A5CC82'] // 蓝绿
          },
        },
        /*工具按钮组*/
        // toolbox: {
        //     show: true,
        //     orient: 'vertical',
        //     left: 'right',
        //     top: 'center',
        //     feature: {
        //         dataView: {
        //             readOnly: false
        //         },
        //         restore: {},
        //         saveAsImage: {}
        //     }
        // },
        geo: {
          show: true,
          map: mapName,
          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
          roam: false, // 缩放
          itemStyle: {
            normal: {
              areaColor: "#031525",
              borderColor: "#3B5077",
            },
            emphasis: {
              areaColor: "#2B91B7",
            },
          },
        },
        series: [
          {
            name: "散点",
            type: "scatter",
            coordinateSystem: "geo",
            data: convertData(data),
            symbolSize: function(val) {
              return 8;
            },
            label: {
              normal: {
                formatter: "{b}",
                position: "bottom",
                show: true,
              },
              emphasis: {
                show: true,
              },
            },
            itemStyle: {
              normal: {
                color: "#05C3F9",
              },
            },
          },
          {
            type: "map",
            map: mapName,
            geoIndex: 0,
            aspectScale: 0.75, //长宽比
            showLegendSymbol: false, // 存在legend时显示
            label: {
              normal: {
                show: true,
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#fff",
                },
              },
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: "#031525",
                borderColor: "#3B5077",
              },
              emphasis: {
                areaColor: "#2B91B7",
              },
            },
            animation: false,
            data: data,
          },
          {
            name: "点",
            type: "scatter",
            coordinateSystem: "geo",
            symbol: "pin", //气泡
            symbolSize: 0,
            label: {
              normal: {
                show: false,
                textStyle: {
                  color: "#fff",
                  fontSize: 9,
                },
              },
            },
            itemStyle: {
              normal: {
                color: "#F62157", //标志颜色
              },
            },
            zlevel: 6,
            data: convertData(data),
          },
          {
            name: "Top 5",
            type: "scatter",
            coordinateSystem: "geo",
            // data: convertData1(
            //   data
            //     .sort(function(a, b) {
            //       return b.value - a.value;
            //     })
            //     .slice(0, 5)
            // ),
            data: [],
            symbolSize: function(val) {
              return val[2] / 10;
            },
            showEffectOn: "render",
            // showEffectOn: "hover",
            rippleEffect: {
              brushType: "stroke",
            },
            hoverAnimation: true,
            label: {
              normal: {
                position: [10, 10],
                formatter: "{b}",
                position: "right",
                show: true,
              },
            },
            itemStyle: {
              normal: {
                color: "yellow",
                shadowBlur: 10,
                shadowColor: "yellow",
              },
            },
            zlevel: 8,
          },
        ],
      };
      function a() {
        console.log(7777);
      }

      //方式 一
      var j = 0;
      var IntervalId = window.setInterval(() => {
        if (j == 5) j = 0;
        // topCity数组就是top的这个5个城市.
        option.series[3].data = [convertData(data)[j]];
        this.chart.setOption(option);
        j++;
      }, 1000);

      // var j = 0;
      // var IntervalId = window.setInterval(() => {
      //   if (j == 5) j = 0;
      //   // topCity数组就是top的这个5个城市.
      //   this.chart.dispatchAction({
      //     type: "highlight",
      //     seriesIndex: j+1,
      //     dataIndex: j+1,
      //   });
      //   j++;
      // }, 500);

      //  var IntervalId = window.setInterval(()=> {
      //     this.chart.dispatchAction({
      //       type: "highlight",
      //       seriesIndex: 1,
      //       dataIndex: 1,
      //     });
      //   },500);
      this.chart.clear();
      this.chart.setOption(option);

      // 然后在初始化显示的时候:
      // 设置top5城市的循环展示,每隔3秒轮换显示
      // @blog http://phping.sinaapp.com
      // var j = 0;
      // var IntervalId = window.setInterval(()=> {
      //   if (j == 5) j = 0;
      //   // topCity数组就是top的这个5个城市.
      //   option.series[1].data = [convertData(data)[j]];
      //   this.chart.setOption(option);
      //   j++;
      // }, 500);


        let scatter= convertData1(
              data
                .sort(function(a, b) {
                  return b.value - a.value;
                })
                .slice(0, 5)
            );

        console.log("scatter",scatter);
        console.log("data",data);
    },

    prepareChartMap(mapName) {
      let geoJSON = null;
      if (!echarts.getMap(mapName)) {
        // geoJSON = (await axios.get("static/data/china.json")).data;
        geoJSON = chinaData;
        echarts.registerMap(mapName, geoJSON);
      } else {
        geoJSON = echarts.getMap(mapName).geoJson;
      }
      return geoJSON;
    },
  },
  components: {},
};
</script>

<style scoped>
.panel-content {
  position: relative;
  height: 100%;
}
</style>
