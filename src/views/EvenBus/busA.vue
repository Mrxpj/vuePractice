<template>
  <div class="busA">
    <Evenbus/>
  </div>
</template>
<script>
import Evenbus from './busB';
import Bus from '../bus.js';

export default {
  name: 'busA',
  components: {
      Evenbus
  },
  data () {
      return {
        busmsgA:'我是busA的值'
      }
  },
  mounted () {
      Bus.$emit('msg', this.busmsgA);
  },
}
</script>
<style scoped>
</style>