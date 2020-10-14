<template>
  <div>
    <label >{{label}}</label>
    <q-input type="text" :placeholder="label" :value="value" @input="value => $emit('input', value)" outlined flat />
  </div>
</template>
<script>
export default {
  name: 'LabeledInput',
  props: ['label', 'type', 'value']
}
</script>
