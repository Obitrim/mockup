<script setup>
import BaseTable from "../components/tables/index.table.vue";
import SkeletonLoader from "../components/SkeletonLoader.vue";
</script>

<template>
  <header class="bg-white flex justify-between items-center py-8 px-8">
    <strong>List of Employees</strong>
    <button
      class="bg-[color:var(--primary)] text-white rounded hover:!bg-opacity-40 transition-all duration-150 font-semibold px-3 py-1"
    >
      Add Employee
    </button>
  </header>
  <div class="mx-8">
    <SkeletonLoader :count="10" v-if="isLoading" />
    <BaseTable v-else :data="employees" class="w-full" />
  </div>
</template>
