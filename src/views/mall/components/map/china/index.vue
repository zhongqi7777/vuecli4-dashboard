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
      geoCoordMap: {},
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
      return [this.chartMap, cfg];
    },
    async showMap(name) {
      const records = await this.getData("date");
      const option = await this.setupMapCharts(
        records,
        document.getElementById("chart_container"),
        name
      );

      const cfg = option[1];
      const chartMap = option[0];

      console.log("this.geoCoordMap", this.geoCoordMap);

      console.log(
        "this.convertData(this.geoCoordMap,records[0].records.slice(0, 5))",
        this.convertData(this.geoCoordMap, records[0].records.slice(0, 5))
      );
      cfg.options[0].series[1].data = [
        this.convertData(this.geoCoordMap, records[0].records.slice(0, 5)),
      ];
      chartMap.setOption(cfg);
      // var j = 0;
      // var IntervalId = window.setInterval(() => {
      //   if (j == 1) j = 0;
      //   // topCity数组就是top的这个5个城市.
      //   // cfg.baseOption.series[1].data = [
      //   //   this.convertData(this.geoCoordMap, records[0].records.slice(0, 5))[j],
      //   // ];
      //   cfg.options[0].series[1].data = [this.convertData(this.geoCoordMap,records[0].records.slice(0, 5))[j]];
      //   chartMap.setOption(cfg);
      //   j++;
      // }, 1000);
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
        this.geoCoordMap[showName] = v.properties.cp;

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
              name: "Top 5",
              type: "scatter",
              coordinateSystem: "geo",
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
              {
                name: "Top 5",
                type: "scatter",
                coordinateSystem: "geo",
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
        }),
      };

      return config;
    },
    handleHashChanged() {
      const func = this.mobulesConfig["map"];
      func.func("", "");

      //this.chartMap&&this.chartMap.resize();
    },
    convertData(geoCoordMap, data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].showName];
        if (geoCoord) {
          geoCoord[0] = +geoCoord[0] + 0.2 + "";
          geoCoord[1] = +geoCoord[1] + 0.1 + "";
          res.push({
            name: data[i].showName,
            // insickCount: geoCoord.concat(data[i].insickCount),
            value: geoCoord.concat(data[i].insickCount),
          });
        }
      }
      return res;
    },
  },
};
</script>

<style lang="scss">
.container-fluid {
  height: 100%;
}
</style>
