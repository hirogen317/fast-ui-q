import ButtonInput from './index'

export default { title: 'components/ButtonInput' };

export const Text = () => ({
  components: { ButtonInput },
  template: `<div><ButtonInput label="Username" /></div>`,
  data() {
    return {
      username: '',
    }
  }
});
