<script setup>
import {
  reactive,
  computed,
  watchEffect,
  defineEmits,
  defineProps,
  onMounted,
} from "vue";

const props = defineProps(["isOpen"]);
const emit = defineEmits(["onOpen"]);

watchEffect(props, () => {
  console.log(props.isOpen);
});
</script>

<template>
  <nav
    class="flex flex-col gap-2 !bg-[color:var(--primary)] !text-white fixed top-0 -left-[150px] xl:static z-50 h-screen"
    :class="{ 'left-0': props.isOpen }"
  >
    <div
      class="text-center py-4 bg-white m-4 rounded text-[color:var(--primary)] text-xl font-semibold"
    >
      Logo
    </div>

    <router-link
      active-class="bg-white bg-opacity-80"
      class="text-white flex flex-col justify-center items-center p-4 text-sm"
      ref="/"
      exact
      ><img
        src="../assets/svg/home.svg"
        alt=""
        class="w-8 h-8"
      />Home</router-link
    >
    <router-link
      active-class="bg-white bg-opacity-80"
      class="text-white flex flex-col justify-center items-center p-4 text-sm"
      ref="/employees"
    >
      <img src="../assets/svg/users.svg" alt="" class="w-8 h-8" />
      Employees</router-link
    >
  </nav>
</template>

<style scoped>
.sidebar {
  @apply flex flex-col gap-2 !w-[250px];
}

.router-link {
  @apply text-black;
}
</style>
