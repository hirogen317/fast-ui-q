import SearchRemind from './index'

export default { title: 'components/SearchRemind' };

export const Default = () => ({
  components: { SearchRemind },
  template: `<SearchRemind />`,
  data() {
    return {
      username: '',
    }
  }
});
