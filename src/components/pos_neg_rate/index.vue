<template>
  <div>
    <q-icon name="fas fa-thumbs-up" /> {{good}}
    <q-icon name="fas fa-thumbs-down" /> {{bad}}
  </div>
</template>
<script>

export default {
  name: "Iine",
  props: ['good', 'bad'],
  data() {
    return {}
  },
  // like, dislike, isLiked, isDisliked
  // 
}
</script>
