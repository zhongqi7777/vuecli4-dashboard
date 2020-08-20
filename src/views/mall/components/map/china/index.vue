<template>
  <div class="container-fluid" id="chart_container">
    Loading...
  </div>
</template>

<script>
import axios from "axios";
import echarts from "echarts";
import { mapGetters, mapActions, mapState } from "vuex";
import chinaData from "../../../data/china.json";
import byDate from "../../../data/by_date.json";

export default {
  watch: {
    // flowData(val) {
    // }
  },
  props: {
    // data: {
    //   type: Object,
    //   default: false
    // }
  },
  components: {},
  data: function() {
    return {
      mobulesConfig: {
        map: {
          func: this.showMap,
          supportProvince: true,
        },
      },
      chartMap: "",
    };
  },
  computed: {
    //...mapState([""])
  },
  mounted() {
    this.handleHashChanged();
    window.addEventListener("resize", (ev) => {
      this.$dt.start({
        type: "debounce",
        immediate: true,
        time: 100,
        success: () => {
          console.log("china map chart size changed!");
          this.chartMap && this.chartMap.resize();
        },
      });
    });
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed: function() {},
  methods: {
    //...mapActions([""]),
    getVisualPieces(type) {
      const pieces = {
        country: [
          { min: 3001, label: "3001单以上", color: "#003C87" },
          { min: 2000, max: 3000, label: "2000-3001单", color: "#003C87" },
          { min: 1001, max: 2000, label: "1001-2000单", color: "#0373FF" },
          { min: 1, max: 1000, label: "1-1000单", color: "#5EC6F9" }, //#86FEFC
          { min: 0, max: 1, label: "待破零", color: "#86FEFC" },
        ],
      };
      const visualPieces = pieces[type] || pieces.city;
      return visualPieces;
    },
    async setupMapCharts(records, container, province = "", allCities = false) {
      const mapName = "china";
      const html =
        '<div id="mapchart" class="mychart" style="display:inline-block;width:100%;height:100%;"></div>';
      container.innerHTML = html;
      const cfg = await this.createMapChartConfig({ mapName, data: records });
      // const chart = echarts.init(document.getElementById("mapchart"));
      // chart.setOption(cfg);
      // return [chart];

      this.chartMap = echarts.init(document.getElementById("mapchart"));
      this.chartMap.setOption(cfg);
      return [this.chartMap];
    },
    async showMap(name) {
      const records = await this.getData("date");
      this.setupMapCharts(
        records,
        document.getElementById("chart_container"),
        name
      );
    },
    async prepareChartMap(mapName) {
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
    async getData(type) {
      // const ret = await axios.get(`static/data/by_${type}.json`);
      const ret = byDate;
      return byDate;
    },
    async createMapChartConfig({ mapName, data, valueKey = "confirmedCount" }) {
      let geoJSON = await this.prepareChartMap(mapName);
      geoJSON.features.forEach((v) => {
        const showName = v.properties.name;
        data.forEach((d) => {
          d.records.forEach((r) => {
            const name = r.name;
            if (
              name.substr(0, showName.length) === showName ||
              showName.substr(0, name.length) === name
            ) {
              r.showName = showName;
            }
          });
        });
      });

      const visualPieces = this.getVisualPieces(
        mapName === "china" ? "country" : "city"
      );

      const geoCoordMap = {
        北京: [116.405285, 39.904989],
        天津: [117.190182, 39.125596],
        承德市: [117.939152, 40.976204],
        张家口市: [114.884091, 40.811901],
        秦皇岛市: [119.586579, 39.942531],
        唐山市: [118.175393, 39.635113],
        廊坊市: [116.704441, 39.523927],
        保定市: [115.482331, 38.867657],
        沧州市: [116.857461, 38.310582],
        石家庄市: [114.502461, 38.045474],
        衡水市: [115.665993, 37.735097],
        邢台市: [114.508851, 37.0682],
        邯郸市: [114.490686, 36.612273],
      };

      let seriesData = [
        {
          name: "北京",
          value: 2350,
        },
        {
          name: "天津",
          value: 3231,
        },
        {
          name: "石家庄市",
          value: 1234,
        },
        {
          name: "唐山市",
          value: 1234,
        },
        {
          name: "邯郸市",
          value: 1234,
        },
        {
          name: "秦皇岛市",
          value: 1234,
        },
        {
          name: "邢台市",
          value: 1234,
        },
        {
          name: "保定市",
          value: 1234,
        },
        {
          name: "张家口市",
          value: 1234,
        },
        {
          name: "承德市",
          value: 1234,
        },
        {
          name: "廊坊市",
          value: 1234,
        },
        {
          name: "沧州市",
          value: 1234,
        },
        {
          name: "衡水市",
          value: 1234,
        },
      ];

      let convertData = function(data) {
        let scatterData = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            scatterData.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value),
            });
          }
        }
        return scatterData;
      };

      const config = {
        baseOption: {
          timeline: {
            axisType: "category",
            autoPlay: false,
            // currentIndex: data.length - 1,
            playInterval: 1000,
            data: data.map((d) => d.day),
            show: false,
          },
          geo: {
            map: "JJJ",
            left: "150",
            itemStyle: {
              //地图区域的多边形 图形样式
              // color: 'rgba(209,250,12,0.5)',
              normal: {
                //是图形在默认状态下的样式
                color: "rgba(37,124,169)",
                label: {
                  show: true, //是否显示标签
                  textStyle: {
                    color: "rgb(249, 249, 249)",
                  },
                },

                borderWidth: 3,
                borderColor: "rgba(37,124,169)",
                // areaColor: 'rgba(37,124,169)',
                shadowColor: "rgba(37,124,169)",
                shadowOffsetY: 15,
                shadowOffsetX: 8,
                // shadowBlur: 3,
              },
            },

            // layoutCenter: ['50%', '30%'],
            //如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
            // layoutSize: 100,
          },
          tooltip: {
            show: true,
            trigger: "item",
          },
          xAxis: [
            {
              type: "value",
              axisLine: { show: false },
              axisTick: { show: false },
              axisLabel: { show: false },
              splitLine: { show: false },
            },
          ],
          yAxis: [
            {
              type: "category",
              axisLabel: {
                show: false,
                interval: 0,
              },
              axisTick: { show: false },
              axisLine: { show: false },
            },
          ],
          visualMap: [
            {
              type: "piecewise",
              pieces: visualPieces,
              right: 10,
              bottom: 30,
              show: true,
              textStyle: {
                fontSize: 12,
                color: "#FFFFFF",
              },
            },
          ],
          series: [
            {
              name: "",
              type: "map",
              mapType: mapName,
              label: {
                show: false, // true 显示区域名称 false 不显示
              },
              // left: hideBarChart ? 'center' : '30%',
              left: "center",
              tooltip: {
                formatter: ({ name, data }) => {
                  if (data) {
                    const {
                      name,
                      /*value,*/ confirmed,
                      dead,
                      cured,
                      increased,
                      insick,
                    } = data;
                    // const tip = `<b>${name}</b><br />${getTextForKey('现存确诊：')}${insick}<br />${getTextForKey('累计确诊：')}${confirmed}<br />${getTextForKey('治愈人数：')}${cured}<br />${getTextForKey('死亡人数：')}${dead}<br />${getTextForKey('新增确诊：')}${increased}`;
                    const tip = `<b>${name}</b><br />${"订单总数："}${insick}<br />`;
                    return tip;
                  }
                  return `<b>${name}</b><br />${"暂无数据"}`;
                },
              },
              z: 1000,
            },

            {
              name: "",
              type: "effectScatter",
              coordinateSystem: "geo",
              color: "rgba(209,250,12,0.5)",
              // symbolSize:50, //function (val) {
              //     var a = (maxSize4Pin - minSize4Pin) / (max - min);
              //     var b = minSize4Pin - a*min;
              //     b = maxSize4Pin - a*max;
              //     return a*val[2]+b;
              // },
              symbolSize: function(value) {
                // return value[2] / 100;
                return 15;
              },
              tooltip: {
                show: false,
              },
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
                  // color: 'rgba(209,250,12,0.5)', //标志颜色
                  color: "rgba(209,250,12,0.5)", //标志颜色
                },
              },
              zlevel: 1,
              data: convertData(seriesData),
            },
          ],
        },
        options: data.map((d) => {
          return {
            series: [
              {
                data: d.records.map((r) => {
                  return {
                    name: r.showName,
                    value: r["insickCount"], //confirmedCount insickCount
                    insick: r.insickCount,
                  };
                }),
              },
            ],
          };
        }),
      };

      return config;
    },
    handleHashChanged() {
      const func = this.mobulesConfig["map"];
      func.func("", "");

      //this.chartMap&&this.chartMap.resize();
    },
  },
};
</script>

<style lang="scss">
.container-fluid {
  height: 100%;
}
</style>
