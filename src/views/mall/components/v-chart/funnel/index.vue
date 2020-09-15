<template>
  <div class="panel-content">
    <!-- <div style="width:100%;height:350px;" ref="chartContentPie"></div> -->
    <!-- <img :src="leftArrow" style="position:absolute;top:10px;left:10px;width:100px;height:100px;"></img> -->

    <div
      style="height:100%;width:100%;position: relative"
      ref="chartContentPie"
    ></div>
  </div>
</template>

<script>
// import leftArrow from "@/assets/images/dashboard/funnel/leftArrow.png";
import echarts from "echarts";
export default {
  props: ["barColor", "progress", "city"],
  name: "TEMPLATE",
  data() {
    return {
      chartData: "71.23",
      chart: "",
      //data:image/png;base64,
      leftArrow:
        "data:image/png;base64,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",
      rightArrow:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAABuCAYAAADGWyb7AAACrElEQVR4Xu2XP2pUURhHvyuKYBEtRdAFKKOGSW2jtaWVlQsQbF2AnaS2EmxsRBBEXcSbMS950cCQTQRUxOR9MsKIf5Kxitwzc2YBmXPPmd/LuyX8IA2U46Zu3m/lcX/Hsv39tdVBMRyw+n8JB/RSLfLs6WW4ahMdDmY4WLAZruEMBzUAxXZxhoMagGK7OMNBDUCxXZzhoAag2C7OcFADUGwXZzioASi2izMc1AAU28UZDmoAiu3iDAc1AMV2cYaDGoBiuzjDQQ1AsV2c4aAGoNguznBQA1BsF2c4qAEotoszHNQAFNvFGQ5qAIrt4gwHNQDFdnGGgxqAYrs4w0ENQLFdnOGgBqDYLs5wUANQbBdnOKgBKLaLMxzUABTbxRkOagCK7eIMBzUAxXZxhoMagGK7OMNBDUCxXZzhoAag2C7OcFADUGwXZzioASi2izMc1AAU28UZDmoAiu3iDAc1AMV2cYaDGoBiuzjDQQ1AsV2c4aAGoNguznBQA1BsF2c4qAEotoszHNQAFNvFGQ5qAIrt4gwHNQDFdnGGgxqAYrs4w0ENQLFdnOGgBqDYLm7Rw43arYfDa4NH0HMuHPY/F5eZJ8dt9yQz7q2tDsrCGYAeaG64Znf3bNn7/CIjbk3PZ7h6Kh8Zrum6S7EfbyLzygzXcJWHG21+HGZ/8Doyz/+KariKw43b7nbf5/OIOPMnpuEqDde02/dL5npmnqgHUZJ5BqZjKqON7kFEPM5M3x4hv5cf4aaso43tOxH5LDNP+6hk1Pu5svHmhxvZH7zKjHO+nNQf77fH47jrLvf78S4yL3odqDveX//Xxjs7F/LLt7cZcdULeL3xDn0hmUwmK3ufvr7MzJteB+qMd+SbZJN5qrTd0+H1wd060Zebau4VYHpFKKXkciuq8/TfAaxrAI0mvVFdAAAAAElFTkSuQmCC",
      // rightArrow:
      //   "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABNBAMAAAAYzFT5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAACZmZmZmZmqqqqZmZkAAAClqsN/AAAAA3RSTlMAf4C/aSLHAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAFdJREFUSMftzbENgCAYROEDHMCCASwYwMQFKNh/JkOhHfnPxuq9+sud9FSuZac+qnUFhUKhUKi3raNQqJ/U7qgU7k1VHZWGo+qI62qWyvHjrFkqW0pHTG6J1zAklFuGvAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wMi0wM1QxODo0OTo1NyswODowMJLTpqcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDItMDNUMTg6NDk6NTcrMDg6MDDjjh4bAAAAAElFTkSuQmCC",
    };
  },
  mounted() {
    this.showChart();

    window.addEventListener("resize", (ev) => {
      //   this.$dt.start({
      //     type: "debounce",
      //     immediate: true,
      //     time: 100,
      //     success: () => {
      //       this.chart.resize();
      //     },
      //   });

      this.chart.resize();
    });
  },
  methods: {
    showChart() {
      this.chart = echarts.init(this.$refs.chartContentPie);
      var colors = ["#5F5EFF", "#026DFF", "#06C9DD"];
      var markLineSettingleft = {
        // 折线文本
        normal: {
          show: true,
          // backgroundColor: "#e4f5da",
          borderRadius: 4,
          color: "#FFFFFF",
          // backgroundColor: "#010F27",
          verticalAlign: "middle",
          offset: [-15, 32, 0, 0],
          fontSize: 14,
          //   padding: [3, 10, 5, 10],
          formatter: function(d) {
            if (d.value) {
              //   var ins = "{img1|} " + "{words|" + d.data.itemValue + "}";
              var ins = " 转换率 " + d.data.itemValue;
              return ins;
            }
          },
          rich: {
            // img1: {
            //   backgroundColor: {
            //     // image: uploadedDataURL,
            //   },
            //   width: 18,
            //   height: 16,
            // },
            words: {
              // color: "#FFFFFFFF",
              // position: "right",
              // fontSize: 14,
              // lineHeight: 20,
              // padding: [0, 0, 5, 0],
            },
          },
        },
      };
      var markLineSetting = {
        // 折线文本
        normal: {
          show: true,
          //   backgroundColor: "#e4f5da",
          borderRadius: 4,
          color: "#FFFFFF",
          verticalAlign: "middle",
          offset: [40, 0, 0, 0],
          fontSize: 14,
          //   padding: [3, 10, 5, 10],
          formatter: function(d) {
            if (d.value) {
              //   var ins = "{img1|} " + "{words|" + d.data.itemValue + "}";
              var ins = " 转换率 " + d.data.itemValue;
              return ins;
            }
          },
          rich: {
            // img1: {
            //   backgroundColor: {
            //     // image: uploadedDataURL,
            //   },
            //   width: 18,
            //   height: 16,
            // },
            words: {
              // color: "#FFFFFFFF",
              // position: "right",
              // fontSize: 14,
              // lineHeight: 20,
              // padding: [0, 0, 5, 0],
            },
          },
        },
      };
      var lineargroup = [
        {
          value: 60,
          name: "商務率",
          oriname: "商務",
          number: 78756,
          color: ["rgba(255,198,82,0.6)", "rgba(255,198,82,0)"],
        },
        {
          value: 40,
          name: "成交率",
          oriname: "即將成交",
          number: 68756,
          color: ["rgba(255,110,115,0.5)", "rgba(255,110,115,0)"],
        },
        {
          value: 20,
          name: "贏單率",
          oriname: "贏單",
          number: 58756,
          color: ["rgba(134,131,230,0.4)", "rgba(134,131,230,0)"],
        },
      ];
      var data1 = [];
      for (var i = 0; i < lineargroup.length; i++) {
        var obj1 = {
          value: lineargroup[i].value,
          num: lineargroup[i].number,
          name: lineargroup[i].oriname,
        };
        data1.push(obj1);
      }
      var option = {
        backgroundColor: "#000B23",
        color: colors,
        tooltip: {
          // show: this.progress != 0,
          //formatter: "{data.name} <br/>{b}: {c} ({d}%)"
          formatter: (params) => {
            var dotHtml = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color}"></span>`;
            return `${dotHtml}${params.name} <br/> &nbsp&nbsp&nbsp人数: &nbsp${params.value}`;
          },
        },
        //折线
        grid: {
          // top: "35",
          // left: "4%",
          right: 20,
          height: "135",
          bottom: "-10",
        },
        xAxis: [
          {
            show: false,
            inverse: true,
            position: "top",
          },
          {
            position: "bottom",
            show: false,
            min: 100,
            max: 200,
          },
        ],
        yAxis: [
          {
            // position: "right",
            top: "105",
            show: false,
            boundaryGap: false,
            inverse: true,
            type: "category",
            min: "转化率1",
            data: ["转化率1", "转化率2", "转化率3"],
          },
        ],
        series: [
          {
            top: 25,
            // bottom:30,
            type: "funnel",
            height: "150",
            gap: 20,
            minSize: 150,
            left: "20%",
            width: "60%",
            label: {
              show: true,
              position: "inside",
              fontSize: "14",
              formatter: function(d) {
                // var ins = d.name + "{aa|}\n" + d.data.num;
                var ins = d.name;
                return ins;
              },
              // rich: {
              //   aa: {
              //     padding: [8, 0, 6, 0],
              //   },
              // },
            },
            data: data1,
          },

          //right

          {
            top: "50%",
            name: "youcejiantou",
            type: "pictorialBar",
            symbolPosition: "center",
            symbolSize: ["65", "55"],
            symbol: "image://" + this.rightArrow,
            symbolClip: true,
            xAxisIndex: "1",
            z: 1,
            data: [
              {
                value: 363,
                itemValue: "100%",
                show: true,
                label: markLineSetting,
              },
              {
                value: 347,
                itemValue: "70%",
                label: markLineSetting,
              },
            ],
          },

          // left
          {
            symbolOffset: [25, 35, 0, 0],
            type: "pictorialBar",
            symbolPosition: "center",
            symbolSize: ["75", "126"],
            // symbol: leftArrow,
            symbol: "image://" + this.leftArrow,
            symbolClip: false,
            xAxisIndex: "1",
            barCategoryGap: "10%",

            z: 1,
            y: 100,
            data: [
              {
                value: 223,
                itemValue: "70%",
                label: markLineSettingleft,
              },
            ],
          },
        ],
      };

      this.chart.clear();
      this.chart.setOption(option);
    },
  },
  components: {},
};
</script>

<style lang="scss" scoped>
.panel-content {
  height: 100%;
  position: relative;
}
</style>
