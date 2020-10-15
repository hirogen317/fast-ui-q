<template>
  <div>
    <q-btn>
      <template v-slot:default >
        <q-icon name="fab fa-twitter" color="black" size="xs" /> &nbsp;Login with Twitter
      </template>
    </q-btn>

    <q-btn >
      <template v-slot:default >
        <q-icon name="fab fa-google" color="black" size="xs" /> &nbsp;Login with Google
      </template>
    </q-btn>


    <q-btn >
      <template v-slot:default >
        <q-icon name="fab fa-facebook" color="black" size="xs" /> &nbsp;Login with Google
      </template>
    </q-btn>

    <q-btn >
      <template v-slot:default >
        <q-icon name="fab fa-github" color="black" size="xs" /> &nbsp;Login with Github
      </template>
    </q-btn>

    <q-btn >
      <template v-slot:default >
        <q-icon name="fab fa-weibo" color="black" size="xs" /> &nbsp;Login with Weibo
      </template>
    </q-btn>

    <q-btn >
      <template v-slot:default >
        <q-icon name="fab fa-weixin" color="black" size="xs" /> &nbsp;Login with Weixin
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
