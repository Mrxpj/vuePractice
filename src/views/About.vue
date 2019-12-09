<template>
  <div class="about">
    <div v-if="deviceitems.length !== 0">
      <ul>
        <li v-for="(item,index) in deviceitems" :key="index">
          <span v-show="devieceItem.name !==''"></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'about',
  data() {
    return {
      deviceitems: [],
      devieceItem: {
        name: 'cdb'
      }

    }
  }
}
</script>
