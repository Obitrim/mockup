<script setup>
const props = defineProps(["btnText"]);
</script>
<template>
  <button
    class="bg-[color:var(--primary)] text-white rounded hover:!bg-opacity-40 transition-all duration-150 font-semibold px-3 py-1"
  >
    {{ props.btnText }}
  </button>
</template>
