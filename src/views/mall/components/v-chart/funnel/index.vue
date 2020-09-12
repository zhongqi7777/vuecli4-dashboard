<template>
  <div class="panel-content">
    <!-- <div style="width:100%;height:350px;" ref="chartContentPie"></div> -->
     <!-- <img :src="leftArrow" style="position:absolute;top:10px;left:10px;width:100px;height:100px;"></img> -->
   
    <div style="height:100%;width:100%;position: relative" ref="chartContentPie">
     
      
    </div>
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
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABNCAYAAADq4knKAAABTElEQVR4nO3c0W2DMAAGYbvKjKzgMZKMYUZgOUZwRSrAtRo4pZGK6H1PUZRIyekH+Yk4DEMJJ9R1XXzlX5VSQozfv/pxxkC/NYWqXebXr5Y/q3pRLmnDvKhlSe3EtHZxScCypPaO/l+1V9TUxSVt8Ma9o76yjNTo+/7qYXJHSunefsJIgJEAIwGnPXG/89znkgBP3IBLAowEGAkwEmAkwEiAkQAjAUYCjAQYCTASYCTASICRACMBRgKMBBgJMBJgJMBIgJEAIwFGAowEXMZxPPyP/GsuCTASYCTASICRACMBRgKMBBgJMBJgJMBIgJEAIwFGAowEGAkwEmAkwEiAkQAjAUYCjAQYqZFzLjnna/2ukX52q0MZ6bklVJzmddAfeRQ3l7QvxvnxGz484UtzZd1TSi5pwyNQ8Mb91BLoYbrcfMbkKue8xpmEED4Bda9HHADqTPQAAAAASUVORK5CYII=",
      rightArrow:
        "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAABNBAMAAAAYzFT5AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAACZmZmZmZmqqqqZmZkAAAClqsN/AAAAA3RSTlMAf4C/aSLHAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAFdJREFUSMftzbENgCAYROEDHMCCASwYwMQFKNh/JkOhHfnPxuq9+sud9FSuZac+qnUFhUKhUKi3raNQqJ/U7qgU7k1VHZWGo+qI62qWyvHjrFkqW0pHTG6J1zAklFuGvAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMC0wMi0wM1QxODo0OTo1NyswODowMJLTpqcAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjAtMDItMDNUMTg6NDk6NTcrMDg6MDDjjh4bAAAAAElFTkSuQmCC",
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
          //   backgroundColor: "#e4f5da",
          borderRadius: 4,
          color: "#FFFFFFFF",
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
          color: "#FFFFFFFF",
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
            console.log(" formatter: (params) => {", params);
            var dotHtml = `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${
              params.color
            }"></span>`;
            return `${dotHtml}${params.name} <br/> &nbsp&nbsp&nbsp人数: &nbsp${
              params.value
            }`;
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
            symbol: this.rightArrow,
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
            symbolOffset: [25, 37, 0, 0],
            type: "pictorialBar",
            symbolPosition: "center",
            symbolSize: ["65", "126"],
            // symbol: leftArrow,
            symbol: "image://" + this.leftArrow,
            symbolClip: false,
            xAxisIndex: "1",
            barCategoryGap: "10%",

            z: 1,
            y: 100,
            data: [
              {
                value: 220,
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
