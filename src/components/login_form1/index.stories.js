import LoginForm1 from './index'

export default { title: 'components/LoginForm1' };

export const Text = () => ({
  components: { LoginForm1 },
  template: '<div><LoginForm1 v-model="user" /> {{user}}</div>',
  data() {
    return {
      user: {
        name: '111',
        email: '111',
        password: '111'
      }
    }
  }
});
