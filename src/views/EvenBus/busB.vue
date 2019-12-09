<template>
  <div class="busB">
      {{message}}
      <div>123</div>
  </div>
</template>
<script>
import Bus from '../bus';
export default {
  name: 'busB',
  data () {
      return {
        busmsg:'我是busB的值',
        message: ''
      }
  },
  mounted() {
    Bus.$on('msg', (val) => {
        this.message = val;
    });
  },
}
</script>
<style scoped>
</style>