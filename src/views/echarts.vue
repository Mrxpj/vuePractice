<template>
    <div id="echarts" ref="echarts" :style="{width: '300px', height: '300px'}">
        
    </div>
</template>

<script>
export default {
    name: 'echarts',
    data () {
        return {
            msg: 'Welcome to Your Echarts!'
        }
    },
    mounted () {
        this.drawLine();
    },
    methods: {
        drawLine() {
            //初始化echarts实例
            let echart = this.$echarts.init(document.getElementById('echarts'));
            // var echart = this.$echarts.init(this.$refs.echarts);
            //绘制图表
            var option = {
                // color: ['#f44'],
                title: { 
                    text: '使用echarts',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer : {  //鼠标放上去添加阴影
                        type : 'shadow'
                    }
                },
                legend: {
                    data:['销量']
                },
                xAxis: [{
                    // type : 'category',
                    data: ["芒果","橘子","香蕉","菠萝","柠檬","葡萄"],
                    axisTick: {
                        alignWithLabel: true
                    }
                }],
                yAxis: [{
                    type : 'value'
                }],
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [10, 30, 20, 20, 50, 57]
                }]
            }
            echart.setOption(option);
            //建议加上以下这一行代码，不加的效果（当浏览器窗口缩小的时候）。超过了div的界限
            window.addEventListener('resize',function() {myChart.resize()});
        }
    },
}
</script>
<style scoped>
    
</style>