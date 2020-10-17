import Iine from './index'

export default { title: 'components/Iine' };

export const Text = () => ({
  components: { Iine },
  template: `<div><Iine :good="115" /></div>`,
  data() {
    return {
      username: '',
    }
  }
});
