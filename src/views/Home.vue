<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
        return {
            arr: [
              {name: 'x',type:'一',item:'111',content:'aaa'},
              {name: 'c',type:'二',item:'222',content:'bbb'},
              {name: 'z',type:'二',item:'22',content:'bb'},
              {name: 'x',type:'一',item:'11',content:'aa'},
              {name: 'c',type:'二',item:'2222',content:'bbbb'},
              {name: 'z',type:'三',item:'33',content:'cc'},
              {name: 'z',type:'三',item:'3333',content:'cccc'},
            ]
        }
    },
    methods: {
      extractSameType(arr, attr, type){ //arr目标数组，attr须合并属性，type参考类型属性
        var typelist = {};
        var result = [];   //结果数组
        var typeArr = [];
        arr.map((val,index) => {  //arr是被转换的数组
        //转换成javascript对象
        //这里打印出来的val是__ob__: Observer: 是vue这个框架对数据设置的监控器，一般都是不可枚举的
          let value = Object.assign({},val);  //如果不加这一行，结果不一样
          console.log(val);
            if(!typelist[value[type]]) {  //第一次遇见
                typelist[value[type]] = 1; 
                typeArr.push(value[type]); //类型数组
                result.push(value);  //新的结果
            }
        })
        typeArr.map((val,index) => {
          result[index][attr] = [];   //将每一项的item转成数组类型
          arr.map((content,key) => {   //遍历对比类型
            if(content[type] == val) {  //如果相等就加进去对应结果数组里的item
              result[index][attr].push(content[attr]);
            }
          })  
        })
        return result;
      }
    },
    mounted () {
      var a = this.extractSameType(this.arr, 'content', 'name');
      console.log(a);
        // var typelist = {};
        // var result = [];   //结果数组
        // var typeArr = [];
        // this.arr.map((val,index) => {  //arr是被转换的数组
        // //转换成javascript对象
        // //这里打印出来的val是
        //   let value = Object.assign({},val);  //如果不加这一行，结果不一样
        //   console.log(val);
        //     if(!typelist[value.type]) {  //第一次遇见
        //         typelist[value.type] = 1; 
        //         typeArr.push(value.type); //类型数组
        //         result.push(value);  //新的结果
        //     }
        // })
        // typeArr.map((val,index) => {
        //   result[index].item = [];   //将每一项的item转成数组类型
        //   this.arr.map((content,key) => {   //遍历对比类型
        //     if(content.type == val) {  //如果相等就加进去对应结果数组里的item
        //       result[index].item.push(content.item);
        //     }
        //   })  
        // })
        // console.log(result);
    }
}
</script>
