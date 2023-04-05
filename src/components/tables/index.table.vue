<script setup>
import { ref, computed } from "vue";
import { format } from "date-fns";
import BaseButton from "../BaseButton.vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
});

const currentPage = ref(1);
const totalPages = computed(() =>
  Math.ceil(props.data.length / props.pageSize)
);
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * props.pageSize;
  const end = start + props.pageSize;
  return props.data.slice(start, end);
});

function prevPage() {
  currentPage.value -= 1;
}

function nextPage() {
  currentPage.value += 1;
}

function editItem(item) {
  // implement edit functionality
}

function deleteItem(id) {
  // implement delete functionality
}
</script>

<!-- employee name, email, position, department, status, start of contract and profile picture. -->

<template>
  <div class="flex justify-end !my-8">
    <base-button btnText="Filter" />
  </div>
  <div class="overflow-x-auto text-left !bg-white">
    <table class="w-full table-fixed text-gray-500">
      <thead
        class="sticky top-0 bg-white uppercase !text-sm border-b border-b-[color:var(--bg-gray)]"
      >
        <tr>
          <th class="w-1/6 px-4 py-3">Name</th>
          <th class="w-1/6 px-4 py-3">Email</th>
          <th class="w-1/6 px-4 py-3">Position</th>
          <th class="w-1/6 px-4 py-3">department</th>
          <th class="w-1/6 px-4 py-3">Status</th>
          <th class="w-1/6 px-4 py-3">Start date</th>
        </tr>
      </thead>
      <tbody class="divide-y-2 divide-[color:var(--bg-gray)]">
        <tr
          v-for="item in paginatedData"
          :key="item.id"
          class="hover:!bg-gray-50 hover:cursor-pointer capitalize"
        >
          <td class="px-4 py-2 whitespace-nowrap text-ellipsis">
            <img :src="item.user.avatar" alt="" />{{ item.user.first_name }}
            {{ item.user.last_name }}
          </td>
          <td class="px-4 py-2 whitespace-nowrap text-ellipsis">
            {{ item.email ?? "n/a" }}
          </td>
          <td class="px-4 py-2 whitespace-nowrap text-ellipsis">position</td>
          <td class="px-4 py-2 whitespace-nowrap text-ellipsis">department</td>
          <td class="px-4 py-2 whitespace-nowrap text-ellipsis">
            <span
              :class="{
                'bg-green-200 text-green-700': item.status === 'published',
              }"
              class="bg-red-200 text-red-700 inline-block rounded-full px-3 py-1 text-xs font-semibold"
              >{{ item.status }}</span
            >
          </td>
          <td class="px-4 py-2 whitespace-nowrap text-ellipsis">
            {{ format(new Date(item.date_created), "dd MMM yyyy") }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- <div class="flex justify-between mt-4">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
      >
        Previous
      </button>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
      >
        Next
      </button>
    </div> -->
  </div>
</template>

<style>
table {
  /* Add styling for the table */
}

thead.sticky {
  /* Add styling for the sticky header */
}

td {
  /* Add styling for the table cells */
}

button {
  /* Add styling for the pagination buttons */
}
</style>
