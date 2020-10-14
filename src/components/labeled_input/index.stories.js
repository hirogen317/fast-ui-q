import LabeledInput from './index'

export default { title: 'components/LabeledInput' };

export const Text = () => ({
  components: { LabeledInput },
  template: `<div><LabeledInput label="Username" v-model="username" />{{username}}</div>`,
  data() {
    return {
      username: '',
    }
  },
  watch: {
    username: function (newUserName) {
      console.log(newUserName)
    }
  }
});
