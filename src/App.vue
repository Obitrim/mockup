<script setup>
import BaseTable from "./components/tables/index.table.vue";
import { useQuery } from "vue-query";
import Employee from "./services/employee";
import axios from "axios";
import AppSidebar from "./components/AppSidebar.vue";
import SkeletonLoader from "./components/SkeletonLoader.vue";
import { reactive } from "vue";

const navbarOpen = reactive(false);

const { isLoading, data: employees } = useQuery("employees", async () => {
  const response = await axios.get(
    `https://staging-backend.teamwell.co/items/employees`,
    {
      headers: {
        Authorization: `Bearer tzGLgauh3jwfkryrRklMCGpouZfyC0Dc`,
      },
      params: {
        fields: "*.*",
      },
    }
  );

  return response.data.data;
});
</script>

<template>
  <main class="flex">
    <AppSidebar :isOpen="navbarOpen" class="max-w-[150px] h-screen flex-1" />
    <div class="flex-1">
      <header class="bg-white flex justify-between items-center py-8 px-8">
        <div class="flex items-center gap-2">
          <!-- <button @click="navbarOpen = !navbarOpen">
            <img src="./assets/svg/menu-close.svg" class="h-7 w-7" alt="" />
          </button> -->
          <strong>List of Employees</strong>
        </div>
        <button
          class="bg-[color:var(--primary)] text-white rounded hover:!bg-opacity-40 transition-all duration-150 font-semibold px-3 py-1"
        >
          Add Employee
        </button>
      </header>
      <div class="mx-8">
        <SkeletonLoader class="!mt-24" :count="10" v-if="isLoading" />
        <BaseTable v-else :data="employees" class="w-full" />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
