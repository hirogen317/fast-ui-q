<template>
  <div>
    <q-icon name="fas fa-search" color="black" />
    <q-icon name="search" color="black" />
    <q-btn >
      <template v-slot:default >
        <q-icon name="fab fa-twitter" color="black" size="xs" /> &nbsp;Login with Twitter
      </template>
    </q-btn>
  </div>

</template>
<style scoped>
</style>
<script>
export default {
  name: 'VendorButton'
}
</script>
