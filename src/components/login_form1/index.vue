<template>
  <div>
    <LabeledInput label="Username" :value="value.name" @input="emitValue => update('name', emitValue)" />
    <LabeledInput label="Email" :value="value.email" @input="emitValue => update('email', emitValue)" />
    <LabeledInput label="Password" :value="value.password" @input="emitValue => update('password', emitValue)" />
    <q-btn label="Login" />
    <q-btn label="Cancel" />
  </div>
</template>
<script>
import LabeledInput from '../labeled_input';
export default {
  name: "LoginForm1",
  components:{
    LabeledInput
  },
  props: ['value'],
  data() {
    return {}
  },
  methods: {
    update: function (key, emitValue) {
      this.$emit('input', { ...this.value, [key]: emitValue})
    }
  }
}
</script>
