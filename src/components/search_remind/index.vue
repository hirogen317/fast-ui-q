<template>
<div>
  <q-input placeholder="label" square filled @focus="show" @blur="hide">
    <template v-slot:append>
      <q-btn icon="search"  flat />
    </template>
  </q-input>
  <q-list v-bind:class="isShowRemind ? '' : 'hide'" bordered separator>
    <q-item clickable v-ripple v-for="item in items" v-bind:key="item.text">
        <q-item-section>
          {{item.text}}
        </q-item-section>
      </q-item>
  </q-list>
</div>
</template>
<style scoped>
.hide {
  display: none;
}
</style>
<script>
export default {
  name: 'SearchRemind',
  data() {
    return {
      isShowRemind: false,
      items: [
        {
          text: 'search1'
        },
        {
          text: 'search2'
        },
        {
          text: 'search3'
        },
        {
          text: 'search4'
        }
      ]
    }
  },
  methods: {
    show: function () {
      this.isShowRemind = true
    },
    hide: function () {
      this.isShowRemind = false
    }
  }
}
</script>
