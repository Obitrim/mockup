<template>
  <div class="skeleton-loader">
    <div class="skeleton-block" v-for="n in count" :key="n"></div>
  </div>
</template>

<script>
export default {
  name: "SkeletonLoader",
  props: {
    count: {
      type: Number,
      default: 3, // change this to set the number of skeleton blocks
    },
  },
};
</script>

<style>
.skeleton-loader {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
}

.skeleton-block {
  width: 100%;
  height: 2rem;
  background-color: #eee;
  margin-bottom: 0.5rem;
  border-radius: 0.25rem;
}
</style>
