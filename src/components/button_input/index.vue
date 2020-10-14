<template>
  <q-input placeholder="label" square filled>
    <template v-slot:append>
      <q-btn icon="search"  flat />
    </template>
  </q-input>
</template>
<script>
export default {
  name: 'ButtonInput',

}
</script>
